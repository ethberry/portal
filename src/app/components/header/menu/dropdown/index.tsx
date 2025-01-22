import { FC, MouseEvent, useState } from "react";
import { Fade, Menu, MenuItem as MuiMenuItem, ListItemText } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

import type { IMenuItem } from "../use-menu-items";
import { StyledLink } from "../menu-item/styled";
import { MenuItem } from "../menu-item";

export interface IDropdownMenuItemProps {
  menuItem: IMenuItem;
  withBackground?: boolean;
}

export const DropdownMenuItem: FC<IDropdownMenuItemProps> = props => {
  const { menuItem } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledLink
        aria-controls={open ? "menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpen}
      >
        {menuItem.title}
        <KeyboardArrowDown />
      </StyledLink>
      <Menu
        id="menu"
        aria-labelledby="button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        elevation={1}
        TransitionComponent={Fade}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          onMouseLeave: handleClose,
          disablePadding: true,
        }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            padding: 1,
            border: "1px solid #ebebeb",
          },
        }}
      >
        {menuItem.children?.map(item => (
          <MuiMenuItem key={item.title} sx={{ borderRadius: 2 }}>
            <ListItemText>
              <MenuItem menuItem={item} />
            </ListItemText>
          </MuiMenuItem>
        ))}
      </Menu>
    </>
  );
};
