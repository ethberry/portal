import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

import { StyledLink, StyledLinksColumnHeader, StyledLinksColumnWrapper } from "../styled";

export const ResourcesColumn: FC = () => {
  const { formatMessage } = useIntl();

  const docs = formatMessage({ id: "components.header.menu.docs" });
  const events = formatMessage({ id: "components.header.menu.events" });
  const articles = formatMessage({ id: "components.header.menu.articles" });

  const items = [
    {
      id: 2,
      link: "https://gemunion.github.io",
      title: docs,
      external: true,
    },
    {
      id: 41,
      link: "/events",
      title: events,
    },
    {
      id: 42,
      link: "/articles",
      title: articles,
    },
  ];
  return (
    <StyledLinksColumnWrapper>
      <StyledLinksColumnHeader>
        <FormattedMessage id="components.footer.resources.title" />
      </StyledLinksColumnHeader>
      {items.map(resource => {
        return (
          <StyledLink key={resource.id} component={Link} href={resource.link!}>
            {resource.title}
          </StyledLink>
        );
      })}
    </StyledLinksColumnWrapper>
  );
};
