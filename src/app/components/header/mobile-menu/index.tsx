import { FC, useState } from "react";
import { Box, IconButton, MenuList, SwipeableDrawer } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Localization } from "@ethberry/provider-localization";

import { EnabledLanguages } from "../../../i18n";
import { useMenuItems } from "../menu/use-menu-items";
import { StyledMenuTop, StyledMenuWrapper } from "./styled";
import { DropdownMenuItem } from "./dropdown";
import { MenuItem } from "./menu-item";

export const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = useMenuItems();

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <Box sx={{ mr: 2, display: { xs: "flex", md: "none" } }}>
      <IconButton onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={open}
        anchor="right"
        onOpen={openDrawer}
        onClose={closeDrawer}
        disableBackdropTransition={iOS}
        disableDiscovery={iOS}
      >
        <StyledMenuWrapper>
          <StyledMenuTop>
            <Localization languages={Object.values(EnabledLanguages)} />
          </StyledMenuTop>
          <MenuList>
            {menuLinks.map(item => {
              if (!item.link || item.children?.length) {
                return <DropdownMenuItem key={item.title} menuItem={item} onClose={closeDrawer} />;
              }

              return <MenuItem key={item.title} menuItem={item} onClose={closeDrawer} />;
            })}
          </MenuList>
        </StyledMenuWrapper>
      </SwipeableDrawer>
    </Box>
  );
};
