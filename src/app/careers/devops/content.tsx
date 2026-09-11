"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../../components/common/styled";
import { applyMailto } from "../apply";
import { StyledApply, StyledBack, StyledHireList, StyledList, StyledMeta, StyledSection } from "../styled";

const TITLE = "Senior DevOps Engineer — AWS, Terraform & ECS/Fargate";

export const DevopsContent: FC = () => {
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
        We are looking for a senior infrastructure engineer to design, provision, deploy, and operate production cloud
        environments for client applications. You will own infrastructure changes from architecture and review through
        delivery, observability, recovery, and operational documentation. The role requires balancing security,
        reliability, delivery speed, and cost while keeping each solution proportionate to the client&apos;s scale,
        operational needs, and risk.
      </Typography>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.youWillDo" />
        </Typography>
        <StyledList>
          <li>Design and evolve secure AWS environments for client products.</li>
          <li>
            Build reusable Terraform modules and maintain safe planning, review, remote-state, and drift workflows.
          </li>
          <li>Package services with Docker and operate them on ECS/Fargate behind ALBs, with images stored in ECR.</li>
          <li>Operate RDS with appropriate backup, upgrade, failover, observability, and recovery procedures.</li>
          <li>
            Design VPC boundaries, routing, security groups, IAM roles, workforce SSO, and secrets management with least
            privilege.
          </li>
          <li>
            Build GitHub Actions pipelines using OIDC, environment approvals, immutable artefacts, and reliable
            rollback.
          </li>
          <li>Establish CloudWatch logs, metrics, dashboards, alarms, and actionable runbooks.</li>
          <li>Improve reliability, security, and AWS cost without introducing unnecessary platform complexity.</li>
          <li>Explain infrastructure trade-offs to engineers and clients and document decisions clearly.</li>
          <li>
            Participate in production support under explicitly agreed engagement terms; no unstated 24/7 availability is
            assumed.
          </li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.lookFor" />
        </Typography>
        <StyledList>
          <li>
            5+ years in DevOps, platform engineering, cloud engineering, or SRE, including ownership of production AWS
            systems.
          </li>
          <li>
            Strong Terraform experience including reusable modules, remote state, review workflows, drift, and
            failed-change recovery.
          </li>
          <li>Production experience with Docker and ECS/Fargate.</li>
          <li>Strong AWS networking and security fundamentals across VPC, ALB, IAM, SSO or federation, and secrets.</li>
          <li>Experience operating relational databases on RDS and designing backup and recovery procedures.</li>
          <li>Ability to build secure CI/CD with GitHub Actions and short-lived AWS credentials through OIDC.</li>
          <li>Practical observability and incident-response experience using CloudWatch or equivalent tools.</li>
          <li>Strong written and spoken English for engineering and client communication.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.useful" />
        </Typography>
        <StyledList>
          <li>AWS Organizations, Control Tower, multi-account landing zones, or IAM Identity Center.</li>
          <li>Blue/green ECS deployments, OpenTelemetry, or practical FinOps.</li>
          <li>Bash, Python, or TypeScript for operational tooling.</li>
          <li>EKS or Kubernetes for client engagements where Fargate is not appropriate.</li>
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
          <li>
            Authority to reject unsafe access practices, including shared accounts and long-lived cloud credentials.
          </li>
          <li>
            No assumed 24/7 availability; any on-call scope and response expectations are agreed separately for the
            engagement.
          </li>
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
            Technical interview — 75 minutes. We discuss one production platform, one incident, one infrastructure
            decision, and the operational trade-offs involved.
          </li>
          <li>
            Unpaid take-home assignment — strictly capped at 4–6 hours. Produce a written design for a NestJS API on
            ECS/Fargate with Terraform and GitHub Actions OIDC, including RDS, IAM boundaries, secrets, deployment and
            rollback, observability, backups, reliability risks, and one cost trade-off. No AWS account, real
            deployment, or candidate-funded resource is required.
          </li>
          <li>
            Assignment review — 75 minutes. You walk through the design and adapt it to one changed client requirement.
          </li>
          <li>Final cultural-fit interview — 30 minutes.</li>
        </StyledHireList>
        <Typography sx={{ mt: 2 }}>
          AI tools are allowed. Their use must be disclosed briefly, and you must be able to explain and defend every
          submitted decision. The assignment is not used in production.
        </Typography>
      </StyledSection>

      <StyledApply variant="contained" href={applyMailto(TITLE)}>
        <FormattedMessage id="pages.careers.apply" />
      </StyledApply>
    </Root>
  );
};
