import type { NextRequest } from "next/server";
import { encodeAbiParameters, Hash, keccak256 } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { z } from "zod";

import { supabase } from "../../../db/supabase";
import { getEnv } from "../../../lib/env";

const UNIQUE_VIOLATION = "23505";

// bytes32 as a hex string: the signed payload encodes it as bytes32.
const requestSchema = z.object({
  licenseKey: z.string().min(1),
  nonce: z.string().regex(/^0x[0-9a-fA-F]{64}$/),
});

export async function POST(req: NextRequest) {
  const body: unknown = await req.json().catch(() => null);
  const result = requestSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ message: "invalidRequest" }, { status: 400 });
  }

  const { licenseKey, nonce } = result.data;

  const { data: licenseEntity } = await supabase //
    .from("license")
    .select()
    .eq("uuid", licenseKey)
    .single();

  if (!licenseEntity) {
    return Response.json({ message: "licenseNotFound" }, { status: 404 });
  }

  // The unique constraint on nonce makes the insert the check, so two requests with one nonce cannot both pass.
  // Case is folded because 0xAB and 0xab are one bytes32 value.
  const { error } = await supabase //
    .from("nonce")
    .insert({
      nonce: nonce.toLowerCase(),
      license_uuid: licenseEntity.uuid,
    });

  if (error?.code === UNIQUE_VIOLATION) {
    return Response.json({ message: "nonceExpired" }, { status: 400 });
  }

  if (error) {
    console.error("Failed to store nonce", { code: error.code });
    return Response.json({ message: "databaseError" }, { status: 500 });
  }

  const account = privateKeyToAccount(getEnv("PRIVATE_KEY") as Hash);

  const payload = encodeAbiParameters(
    [{ type: "bytes32" }, { type: "string" }, { type: "string" }],
    [nonce as Hash, licenseKey, licenseEntity.status],
  );

  const signature = await account.signMessage({ message: { raw: keccak256(payload) } });

  return Response.json({
    signature,
    nonce,
  });
}
