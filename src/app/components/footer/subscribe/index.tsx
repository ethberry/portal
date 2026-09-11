import { FC } from "react";
import { TextField } from "@mui/material";
import { FormattedMessage, useIntl } from "react-intl";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "notistack";

import { StyledBold } from "../../common/styled";
import { subscribeSchema, SubscribeFormValues } from "./schema";
import { Root, StyledButton, StyledEmailWrapper, StyledForm, StyledHeader, StyledSubmitWrapper } from "./styled";

const defaultValues: SubscribeFormValues = {
  email: "",
};

export const Subscribe: FC = () => {
  const { formatMessage } = useIntl();
  const { enqueueSnackbar } = useSnackbar();
  const {
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    control,
    reset,
  } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<SubscribeFormValues> = async data => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Subscription request failed");
      }

      reset(defaultValues);
      enqueueSnackbar(formatMessage({ id: "snackbar.subscriptionSuccess" }), { variant: "success" });
    } catch {
      enqueueSnackbar(formatMessage({ id: "snackbar.subscriptionError" }), { variant: "error" });
    }
  };

  return (
    <Root>
      <StyledHeader>
        <FormattedMessage
          id="pages.landing.subscribe.title"
          values={{ b: chunks => <StyledBold key={"a"}>{chunks}</StyledBold> }}
        />
      </StyledHeader>
      <StyledForm component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <StyledEmailWrapper sx={{ xs: 12, sm: 6 }}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email?.message}
                label=""
                required
                type="email"
                sx={{ width: "100%" }}
                slotProps={{ htmlInput: { maxLength: 254 } }}
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
