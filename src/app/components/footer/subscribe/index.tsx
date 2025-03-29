import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { StyledBold } from "../../common/styled";
import { Root, StyledButton, StyledEmailWrapper, StyledForm, StyledHeader, StyledSubmitWrapper } from "./styled";

interface ISubscriptionCreateDto {
  email: string;
}

const schema = z.object({
  email: z.string().email({ message: "Pattern mismatch" }),
});

export const Subscribe: FC = () => {
  const { formatMessage } = useIntl();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, isValid },
  } = useForm<ISubscriptionCreateDto>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ISubscriptionCreateDto> = async data => {
    return fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      alert(formatMessage({ id: "snackbar.subscriptionSuccess" }));
    });
  };

  return (
    <Root>
      <StyledHeader>
        <FormattedMessage
          id="pages.landing.subscribe.title"
          values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
        />
      </StyledHeader>
      <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
        <StyledEmailWrapper sx={{ xs: 12, sm: 6 }}>
          <TextField
            defaultValue=""
            label=""
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ width: "100%" }}
          />
        </StyledEmailWrapper>
        <StyledSubmitWrapper sx={{ xs: 12, sm: 6 }}>
          <StyledButton
            variant="contained"
            size="large"
            type="submit"
            color="primary"
            disabled={isSubmitting || !(isValid && isDirty)}
            sx={{ width: "100%" }}
          >
            <FormattedMessage id="form.buttons.submit" />
          </StyledButton>
        </StyledSubmitWrapper>
      </StyledForm>
    </Root>
  );
};
