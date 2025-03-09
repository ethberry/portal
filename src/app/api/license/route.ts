import type { NextRequest } from "next/server";
import { encodeAbiParameters, Hash, keccak256 } from "viem";
import { privateKeyToAccount } from "viem/accounts";

import { supabase } from "../../../db/supabase";

export async function POST(req: NextRequest) {
  const { licenseKey, nonce } = await req.json();

  const { data: licenseEntity } = await supabase //
    .from("license")
    .select()
    .eq("uuid", licenseKey)
    .single();

  if (!licenseEntity) {
    return Response.json({ message: "licenseNotFound" }, { status: 404 });
  }

  const { data: nonceEntity } = await supabase //
    .from("nonce")
    .select()
    .eq("nonce", nonce)
    .single();

  if (nonceEntity) {
    return Response.json({ message: "nonceExpired" }, { status: 400 });
  }

  await supabase //
    .from("nonce")
    .insert({
      nonce,
      license_uuid: licenseEntity.uuid,
    });

  const account = privateKeyToAccount(process.env.PRIVATE_KEY as Hash);

  const payload = encodeAbiParameters(
    [{ type: "bytes32" }, { type: "string" }, { type: "string" }],
    [nonce, licenseKey, licenseEntity.status],
  );

  const signature = await account.signMessage({ message: { raw: keccak256(payload) } });

  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  });

  return Response.json(
    {
      signature,
      nonce,
    },
    { headers },
  );
}
