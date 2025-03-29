import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

import { StyledLink, StyledLinksColumnHeader, StyledLinksColumnWrapper } from "../styled";

export const CompanyColumn: FC = () => {
  const { formatMessage } = useIntl();

  const ourTeam = formatMessage({ id: "components.header.menu.ourTeam" });
  const technicalStack = formatMessage({ id: "components.header.menu.technicalStack" });
  const partnership = formatMessage({ id: "components.header.menu.partnership" });
  const pressKit = formatMessage({ id: "components.header.menu.pressKit" });

  const items = [
    {
      id: 51,
      link: "/our-team",
      title: ourTeam,
    },
    {
      id: 52,
      link: "/technical-stack",
      title: technicalStack,
    },
    {
      id: 53,
      link: "/contact/partnership",
      title: partnership,
    },
    {
      id: 54,
      link: "/press-kit",
      title: pressKit,
    },
  ];

  return (
    <StyledLinksColumnWrapper>
      <StyledLinksColumnHeader>
        <FormattedMessage id="components.footer.company.title" />
      </StyledLinksColumnHeader>
      {items.map(item => {
        return (
          <StyledLink key={item.id} component={Link} href={item.link}>
            {item.title}
          </StyledLink>
        );
      })}
    </StyledLinksColumnWrapper>
  );
};
