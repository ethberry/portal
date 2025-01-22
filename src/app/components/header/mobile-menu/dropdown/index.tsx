import { ListItemText, ListItemIcon, MenuItem as MuiMenuItem } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { FC, useState } from "react";

import type { IMenuItem } from "../../menu/use-menu-items";
import { StyledLink } from "../menu-item/styled";
import { MenuItem } from "../menu-item";
import { StyledAccordion, StyledAccordionDetails, StyledAccordionSummary } from "./styled";

export interface IDropdownMenuItemProps {
  menuItem: IMenuItem;
  onClose: () => void;
}

export const DropdownMenuItem: FC<IDropdownMenuItemProps> = props => {
  const { menuItem, onClose } = props;

  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpanded = () => {
    setExpanded(prev => !prev);
  };

  return (
    <StyledAccordion expanded={expanded} onChange={handleExpanded} disableGutters elevation={0}>
      <StyledAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <MuiMenuItem>
          <ListItemText>
            <StyledLink>{menuItem.title}</StyledLink>
          </ListItemText>
          <ListItemIcon>{expanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</ListItemIcon>
        </MuiMenuItem>
      </StyledAccordionSummary>
      <StyledAccordionDetails>
        {menuItem.children?.map(item => <MenuItem key={item.title} menuItem={item} onClose={onClose} />)}
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
