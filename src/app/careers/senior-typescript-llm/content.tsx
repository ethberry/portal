"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../../components/common/styled";
import { applyMailto } from "../apply";
import { StyledApply, StyledBack, StyledHireList, StyledList, StyledMeta, StyledSection } from "../styled";

const TITLE = "Senior TypeScript Engineer — LLM Agents";

export const SeniorTypescriptLlmContent: FC = () => {
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
        We are looking for a senior backend engineer to design and deliver production AI-agent and retrieval systems.
        The role covers the complete engineering lifecycle: clarifying client workflows, defining system boundaries,
        implementing reliable orchestration and integrations, establishing evaluation and observability, and improving
        behaviour after release. This is production software engineering rather than model research or prompt-only
        prototyping. You will work directly with delivery specialists, engineers, and clients to turn ambiguous
        processes into reliable, measurable, and maintainable products.
      </Typography>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.youWillDo" />
        </Typography>
        <StyledList>
          <li>Design and deliver production agents and multi-step LLM workflows in TypeScript and Node.js.</li>
          <li>
            Define reliable tool contracts, structured outputs, retries, timeouts, approval boundaries, and human
            escalation.
          </li>
          <li>
            Build retrieval pipelines covering ingestion, chunking, embeddings, indexing, retrieval, reranking,
            grounding, and citations.
          </li>
          <li>Develop backend APIs and services with NestJS and PostgreSQL.</li>
          <li>
            Create evaluation datasets and automated checks for correctness, tool use, retrieval quality, latency, and
            cost.
          </li>
          <li>Instrument traces, logs, metrics, token usage, and model costs.</li>
          <li>
            Investigate production failures and improve prompts, retrieval, tools, and orchestration using evidence.
          </li>
          <li>Integrate model providers behind stable application interfaces and support provider or model changes.</li>
          <li>
            Participate in client discovery, explain trade-offs, estimate work, and deliver in reviewable increments.
          </li>
          <li>Review human- and AI-generated code to the same engineering standard.</li>
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
            At least one substantial LLM, agent, tool-calling, or production RAG system delivered beyond the prototype
            stage.
          </li>
          <li>Practical experience with tool/function calling and either agent orchestration or retrieval.</li>
          <li>Strong PostgreSQL, SQL, and data-modelling skills.</li>
          <li>
            Ability to explain real failure modes including hallucination, poor grounding, brittle tools, loops,
            latency, cost, and security.
          </li>
          <li>Production ownership including CI/CD, monitoring, incident investigation, and incremental delivery.</li>
          <li>Strong written and spoken English for client and team communication.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.useful" />
        </Typography>
        <StyledList>
          <li>NestJS.</li>
          <li>LangGraph, Vercel AI SDK, Mastra, OpenAI Agents SDK, or custom orchestration.</li>
          <li>LangSmith, Langfuse, OpenTelemetry, or equivalent evaluation and tracing tools.</li>
          <li>Qdrant, pgvector, Pinecone, Weaviate, or another vector store.</li>
          <li>MCP client or server integrations.</li>
          <li>Python for experiments and data-processing tasks.</li>
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
            Work from your own laptop; EthBerry provides the project accounts, model access, and paid software licences
            required for the engagement.
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
            Technical interview — 75 minutes. We discuss one production system, its architecture, failures, evaluation
            strategy, retrieval quality, and operational trade-offs.
          </li>
          <li>
            Unpaid take-home assignment — strictly capped at 4–6 hours. Build a small TypeScript agent with two tools,
            retrieval over supplied fixtures, one malformed tool response, one no-answer case, a compact evaluation set,
            and structured logs. No deployment, frontend, personal API spending, or production-ready polish is required.
          </li>
          <li>Assignment review — 75 minutes. You explain decisions and respond to one changed requirement.</li>
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
