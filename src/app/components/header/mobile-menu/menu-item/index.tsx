import { FC } from "react";
import { ListItemText, MenuItem as MuiMenuItem } from "@mui/material";
import Link from "next/link";

import type { IMenuItem } from "../../menu/use-menu-items";
import { DropdownMenuItem } from "../../menu/dropdown";
import { StyledLink } from "./styled";

export interface IMenuItemProps {
  menuItem: IMenuItem;
  onClose: () => void;
}

export const MenuItem: FC<IMenuItemProps> = props => {
  const { menuItem, onClose } = props;

  if (!menuItem.link || menuItem.children?.length) {
    return <DropdownMenuItem menuItem={menuItem} />;
  }

  return (
    <MuiMenuItem onClick={onClose} sx={{ borderRadius: 2 }}>
      <ListItemText>
        {menuItem.external ? (
          <StyledLink href={menuItem.link} target="_blank" rel="noreferrer">
            {menuItem.title}
          </StyledLink>
        ) : (
          <StyledLink component={Link} href={menuItem.link}>
            {menuItem.title}
          </StyledLink>
        )}
      </ListItemText>
    </MuiMenuItem>
  );
};
