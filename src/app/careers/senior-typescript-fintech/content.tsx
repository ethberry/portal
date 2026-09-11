"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../../components/common/styled";
import { applyMailto } from "../apply";
import { StyledApply, StyledBack, StyledHireList, StyledList, StyledMeta, StyledSection } from "../styled";

const TITLE = "Senior TypeScript Engineer — Fintech";

export const SeniorTypescriptFintechContent: FC = () => {
  return (
    <Root>
      <StyledBack href="/careers">
        <FormattedMessage id="pages.careers.back" />
      </StyledBack>
      <Typography
        component="h2"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        {TITLE}
      </Typography>
      <StyledMeta>
        <FormattedMessage id="pages.careers.remote" />
        {" · "}
        <FormattedMessage id="pages.careers.fullTime" />
        {" · "}
        <FormattedMessage id="pages.careers.contractor" />
      </StyledMeta>
      <Typography sx={{ mb: 2 }}>
        We are looking for a senior engineer to design and deliver production financial systems covering ledgers,
        payments, provider integrations, reconciliation, and operational workflows. This is a backend-heavy role that
        also includes the interfaces used to investigate and resolve financial events. You will own the complete
        engineering lifecycle and model money, state transitions, retries, auditability, and partial failures as
        explicit domain concerns. The work involves direct collaboration with delivery specialists, engineers, clients,
        and their product, operations, finance, and compliance stakeholders.
      </Typography>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.youWillDo" />
        </Typography>
        <StyledList>
          <li>
            Design and deliver payment, ledger, wallet, payout, billing, or settlement services in TypeScript and
            Node.js.
          </li>
          <li>
            Model money using integer minor units, explicit currencies, rounding rules, value dates, and immutable
            postings.
          </li>
          <li>Implement idempotent APIs and effectively-once financial effects under retries and duplicate events.</li>
          <li>
            Integrate payment providers and banks through signed webhooks, asynchronous workflows, correlation
            identifiers, and recovery paths.
          </li>
          <li>Build reconciliation processes that identify matched, missing, duplicate, and mismatched records.</li>
          <li>
            Implement explicit lifecycle states for authorisation, capture, settlement, holds, fees, refunds, reversals,
            and disputes where relevant.
          </li>
          <li>Develop React and Next.js operational interfaces for investigation and controlled manual resolution.</li>
          <li>
            Write automated integration tests around transaction boundaries, concurrency, retries, and failure recovery.
          </li>
          <li>Establish observability and audit trails suitable for production financial operations.</li>
          <li>
            Participate in client discovery, explain trade-offs, estimate work, and review human- and AI-generated code.
          </li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.lookFor" />
        </Typography>
        <StyledList>
          <li>5+ years building and operating production backend or full-stack software.</li>
          <li>
            Strong TypeScript and Node.js, including API design, asynchronous programming, testing, and production
            debugging.
          </li>
          <li>
            Production experience with at least one genuine money path: ledger, wallet, acquiring, payouts, payment
            infrastructure, financial billing, or settlement.
          </li>
          <li>Strong PostgreSQL, SQL, data-modelling, and transactional-consistency skills.</li>
          <li>
            Practical understanding of idempotency, concurrency, webhooks, asynchronous processing, and partial-failure
            recovery.
          </li>
          <li>Experience building or maintaining React and Next.js applications.</li>
          <li>Production ownership including CI/CD, monitoring, incident investigation, and incremental delivery.</li>
          <li>Strong written and spoken English for client and team communication.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.useful" />
        </Typography>
        <StyledList>
          <li>Double-entry accounting and derived-balance models.</li>
          <li>FX, multi-currency, card acquiring, PCI DSS, 3DS, or SCA.</li>
          <li>Transactional outbox, queues, workflow engines, or event-driven systems.</li>
          <li>High-volume reconciliation and settlement-file processing.</li>
          <li>Previous consultancy, outsourcing, or direct client-facing delivery.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.offer" />
        </Typography>
        <StyledList>
          <li>Full-remote work with a flexible schedule outside agreed client and team overlap.</li>
          <li>Full-time independent-contractor engagement.</li>
          <li>14 paid vacation days and 7 paid sick days per year.</li>
          <li>Official public holidays in your country of residence in addition to the paid days above.</li>
          <li>
            Work from your own laptop; EthBerry provides the project accounts and paid software licences required for
            the engagement.
          </li>
          <li>Compensation agreed individually based on relevant experience.</li>
          <li>Direct participation in architecture and technical decisions on client projects.</li>
          <li>The contract does not include health insurance, company hardware, or office-based benefits.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.howWeHire" />
        </Typography>
        <StyledHireList>
          <li>Application review.</li>
          <li>HR screening — 30 minutes.</li>
          <li>
            Technical and domain interview — 90 minutes. We discuss one production system and a real issue involving
            retries, balances, provider events, or reconciliation.
          </li>
          <li>
            Unpaid take-home assignment — strictly capped at 4–6 hours. Implement a small NestJS and PostgreSQL payment
            flow with idempotent payment creation, immutable debit and credit postings, duplicate or out-of-order
            provider webhooks, and a reconciliation result for matched, missing, and mismatched records.
          </li>
          <li>
            Assignment review — 75 minutes. You explain transaction boundaries, invariants, failure handling, tests, and
            trade-offs.
          </li>
          <li>Final cultural-fit interview — 30 minutes.</li>
        </StyledHireList>
        <Typography sx={{ mt: 2 }}>
          AI coding tools are allowed. Their use must be disclosed briefly, and you must be able to explain and defend
          every submitted decision. The assignment is not used in production.
        </Typography>
      </StyledSection>

      <StyledApply variant="contained" href={applyMailto(TITLE)}>
        <FormattedMessage id="pages.careers.apply" />
      </StyledApply>
    </Root>
  );
};
