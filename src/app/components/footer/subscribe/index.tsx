import { FC } from "react";
import { FormattedMessage } from "react-intl";
import { TextField, Button } from "@mui/material";

import { StyledBold } from "@/app/components/common/styled";

import { Root, StyledEmailWrapper, StyledForm, StyledHeader, StyledSubmitWrapper } from "./styled";

export const Subscribe: FC = () => {
  return (
    <Root>
      <form>
        <StyledHeader>
          <FormattedMessage
            id="pages.landing.subscribe.title"
            values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
          />
        </StyledHeader>
        <StyledForm>
          <StyledEmailWrapper>
            <TextField name="email" label="" />
          </StyledEmailWrapper>
          <StyledSubmitWrapper>
            <Button />
          </StyledSubmitWrapper>
        </StyledForm>
      </form>
    </Root>
  );
};
