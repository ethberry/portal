"use client";

import { FC } from "react";
import { Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

import { Root } from "../../components/common/styled";
import { applyMailto } from "../apply";
import { StyledApply, StyledBack, StyledHireList, StyledList, StyledMeta, StyledSection } from "../styled";

const TITLE = "Senior Flutter Developer";

export const SeniorFlutterDeveloperContent: FC = () => {
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
        We are looking for a senior mobile engineer to build and maintain production applications for iOS and Android.
        You will own features from product refinement and API contract through implementation, store release, and
        post-release monitoring. Working in a small cross-functional delivery team, you will collaborate directly with
        backend engineers and clients and make practical decisions about architecture, state management, failure
        handling, performance, and release quality. The role includes maintaining applications after launch, not only
        implementing screens from designs.
      </Typography>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.youWillDo" />
        </Typography>
        <StyledList>
          <li>Build and maintain Flutter applications for iOS and Android.</li>
          <li>
            Own features from product refinement and API contract through implementation, store release, and monitoring.
          </li>
          <li>Model loading, empty, partial, offline, timeout, authorisation, and recoverable error states.</li>
          <li>
            Collaborate with backend engineers on schemas, pagination, versioning, idempotency, and error contracts.
          </li>
          <li>Select maintainable architecture and state boundaries appropriate to each product.</li>
          <li>Write focused unit, widget, and integration tests around important behaviour.</li>
          <li>Profile startup, rendering, memory, networking, and mid-range-device performance.</li>
          <li>Maintain signing, CI/CD, TestFlight, Play tracks, phased rollout, and store submissions.</li>
          <li>Use crash reporting and analytics to investigate regressions after release.</li>
          <li>Review human- and AI-generated code and communicate directly with clients.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.lookFor" />
        </Typography>
        <StyledList>
          <li>
            5+ years of professional mobile or software development, including 3+ years of production Flutter and Dart.
          </li>
          <li>At least one Flutter application shipped and maintained on both the App Store and Google Play.</li>
          <li>
            Strong asynchronous programming and deep experience with at least one production state-management approach.
          </li>
          <li>
            Experience integrating REST or GraphQL APIs with explicit failure handling and local persistence or caching.
          </li>
          <li>Practical automated-testing experience across unit, widget, or integration levels.</li>
          <li>Store signing, release, and post-release monitoring experience.</li>
          <li>Ability to profile and diagnose performance problems and crashes.</li>
          <li>Strong written and spoken English for client calls, reviews, and specifications.</li>
        </StyledList>
      </StyledSection>

      <StyledSection>
        <Typography variant="h5" sx={{ mb: 1.5 }}>
          <FormattedMessage id="pages.careers.useful" />
        </Typography>
        <StyledList>
          <li>Swift or Kotlin and platform channels or plugins.</li>
          <li>Offline-first synchronisation or conflict resolution.</li>
          <li>Fastlane, GitHub Actions, Firebase, Sentry, or equivalent tooling.</li>
          <li>Payments, fintech, healthcare, IoT, or other regulated products.</li>
          <li>Accessibility, localisation, deep links, notifications, or secure storage.</li>
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
          <li>Ownership of mobile engineering decisions from API contract through store release.</li>
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
            Technical interview — 75 minutes. We discuss a production application, architecture, API failures, offline
            behaviour, tests, release incidents, and performance diagnosis.
          </li>
          <li>
            Unpaid take-home assignment — strictly capped at 4–6 hours. Build a small paginated list and detail flow
            using a supplied mock API, with loading, empty, malformed-response, timeout, retry, session-expiry, caching
            or explicit offline behaviour, and focused tests.
          </li>
          <li>
            Assignment review — 60 minutes. You explain decisions and respond to one changed API or product requirement.
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
