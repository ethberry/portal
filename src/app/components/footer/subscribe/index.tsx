import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TextField } from "@mui/material";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { StyledBold } from "../../common/styled";
import { Root, StyledButton, StyledEmailWrapper, StyledForm, StyledHeader, StyledSubmitWrapper } from "./styled";

interface ISubscriptionCreateDto {
  email: string;
}

const schema = z.object({
  email: z.email({ message: "Pattern mismatch" }).or(z.literal("")),
});

export const Subscribe: FC = () => {
  const { formatMessage } = useIntl();

  const {
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    control
  } = useForm<ISubscriptionCreateDto>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: ""
    }
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
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                label=""
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ width: "100%" }}
              />
            )}
          />
        </StyledEmailWrapper>
        <StyledSubmitWrapper sx={{ xs: 12, sm: 6 }}>
          <StyledButton
            variant="contained"
            size="large"
            type="submit"
            color="primary"
            disabled={isSubmitting || !isDirty}
            sx={{ width: "100%" }}
          >
            <FormattedMessage id="form.buttons.submit" />
          </StyledButton>
        </StyledSubmitWrapper>
      </StyledForm>
    </Root>
  );
};
