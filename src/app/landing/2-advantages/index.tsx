"use client";

import { FC } from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import RobotHand from "./images/robot-hand.png";

import MarkerTimeIcon from "./images/marker-time.svg";
import BullseyeIcon from "./images/bullseye-arrow.svg";
import DollarIcon from "./images/badge-dollar.svg";
import ShuttleIcon from "./images/space-shuttle.svg";
import { StyledBold } from "../../components/common/styled";
import {
  Root,
  StyledItems,
  StyledImage,
  StyledItemTop,
  StyledContent,
  StyledIcon,
  StyledIconWrapper,
  StyledItemBottom,
  StyledTextWrapper,
} from "./styled";

export const Advantages: FC = () => {
  return (
    <Root>
      <StyledImage component={Image} src={RobotHand} alt="" />
      <StyledContent>
        <StyledItems>
          <StyledItemTop component={"div"}>
            <StyledIconWrapper>
              <StyledIcon component={MarkerTimeIcon} viewBox="0 0 24 24" />
            </StyledIconWrapper>
            <StyledTextWrapper>
              <FormattedMessage
                id="pages.landing.advantages.items.item1"
                values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold>, br: <br /> }}
              />
            </StyledTextWrapper>
          </StyledItemTop>
          <StyledItemBottom component={"div"}>
            <StyledIconWrapper>
              <StyledIcon component={BullseyeIcon} viewBox="0 0 24 24" />
            </StyledIconWrapper>
            <StyledTextWrapper>
              <FormattedMessage
                id="pages.landing.advantages.items.item2"
                values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold>, br: <br /> }}
              />
            </StyledTextWrapper>
          </StyledItemBottom>
          <StyledItemBottom component={"div"}>
            <StyledIconWrapper>
              <StyledIcon component={DollarIcon} viewBox="0 0 24 24" />
            </StyledIconWrapper>
            <StyledTextWrapper>
              <FormattedMessage
                id="pages.landing.advantages.items.item3"
                values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold>, br: <br /> }}
              />
            </StyledTextWrapper>
          </StyledItemBottom>
          <StyledItemTop component={"div"}>
            <StyledIconWrapper>
              <StyledIcon component={ShuttleIcon} viewBox="0 0 512 512" />
            </StyledIconWrapper>
            <StyledTextWrapper>
              <FormattedMessage
                id="pages.landing.advantages.items.item4"
                values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold>, br: <br /> }}
              />
            </StyledTextWrapper>
          </StyledItemTop>
        </StyledItems>
      </StyledContent>
    </Root>
  );
};
