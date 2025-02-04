import { FC } from "react";
import Image from "next/image";

import { MenuWrapper, Root, StyledImage } from "./styled";
import { useMenuItems } from "./use-menu-items";
import { MenuItem } from "./menu-item";
import Bars from "./bars.png";

export const Menu: FC = () => {
  const menuLinks = useMenuItems();

  return (
    <Root sx={{ display: { xs: "none", md: "flex" } }}>
      <StyledImage component={Image} src={Bars} alt="EthBerry menu" />
      <MenuWrapper>
        {menuLinks.map(item => {
          return <MenuItem key={item.title} menuItem={item} />;
        })}
      </MenuWrapper>
    </Root>
  );
};
