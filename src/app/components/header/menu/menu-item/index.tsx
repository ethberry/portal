import { FC, useEffect } from "react";
import Link from "next/link";

import type { IMenuItem } from "../use-menu-items";
import { DropdownMenuItem } from "../dropdown";
import { StyledLink } from "./styled";

export interface IMenuItemProps {
  menuItem: IMenuItem;
  withBackground?: boolean;
}

export const MenuItem: FC<IMenuItemProps> = props => {
  const { menuItem, withBackground } = props;

  useEffect(() => {}, [location.pathname]);

  if (!menuItem.link || menuItem.children?.length) {
    return <DropdownMenuItem menuItem={menuItem} withBackground />;
  }

  if (menuItem.external) {
    return (
      <StyledLink href={menuItem.link} target="_blank" rel="noreferrer" withBackground={withBackground}>
        {menuItem.title}
      </StyledLink>
    );
  }

  return (
    <StyledLink component={Link} href={menuItem.link} withBackground={withBackground}>
      {menuItem.title}
    </StyledLink>
  );
};
