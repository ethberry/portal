"use client";

import { FC } from "react";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormattedMessage, useIntl } from "react-intl";
import { useSnackbar } from "notistack";

import { Root } from "../components/common/styled";
import { contactSchema, ContactFormValues } from "./schema";
import {
  StyledAction,
  StyledActions,
  StyledFields,
  StyledForm,
  StyledHoneypot,
  StyledLayout,
  StyledSidebar,
  StyledSubmit,
} from "./styled";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
  website: "",
};

export const ContactContent: FC = () => {
  const { formatMessage } = useIntl();
  const { enqueueSnackbar } = useSnackbar();
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async values => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      reset(defaultValues);
      enqueueSnackbar(formatMessage({ id: "pages.contact.success" }), { variant: "success" });
    } catch {
      enqueueSnackbar(formatMessage({ id: "pages.contact.error" }), { variant: "error" });
    }
  };

  return (
    <Root>
      <Typography
        component="h1"
        sx={[
          theme => ({
            ...theme.typography.h4,
            lineHeight: "52px",
          }),
        ]}
      >
        <FormattedMessage id="pages.contact.title" />
      </Typography>
      <Typography sx={{ maxWidth: 720 }}>
        <FormattedMessage id="pages.contact.description" />
      </Typography>

      <StyledLayout>
        <StyledForm component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <StyledFields>
            <TextField
              {...register("name")}
              autoComplete="name"
              error={!!errors.name}
              helperText={errors.name?.message}
              label={formatMessage({ id: "pages.contact.fields.name" })}
              required
              slotProps={{ htmlInput: { maxLength: 100 } }}
            />
            <TextField
              {...register("email")}
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              label={formatMessage({ id: "pages.contact.fields.email" })}
              required
              type="email"
              slotProps={{ htmlInput: { maxLength: 254 } }}
            />
            <TextField
              {...register("company")}
              autoComplete="organization"
              error={!!errors.company}
              helperText={errors.company?.message}
              label={formatMessage({ id: "pages.contact.fields.company" })}
              slotProps={{ htmlInput: { maxLength: 120 } }}
            />
            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <FormControl error={!!errors.budget}>
                  <InputLabel id="contact-budget-label">
                    <FormattedMessage id="pages.contact.fields.budget" />
                  </InputLabel>
                  <Select
                    {...field}
                    labelId="contact-budget-label"
                    label={formatMessage({ id: "pages.contact.fields.budget" })}
                  >
                    <MenuItem value="">
                      <FormattedMessage id="pages.contact.budgets.empty" />
                    </MenuItem>
                    <MenuItem value="under-10k">
                      <FormattedMessage id="pages.contact.budgets.under10k" />
                    </MenuItem>
                    <MenuItem value="10k-25k">
                      <FormattedMessage id="pages.contact.budgets.from10kTo25k" />
                    </MenuItem>
                    <MenuItem value="25k-50k">
                      <FormattedMessage id="pages.contact.budgets.from25kTo50k" />
                    </MenuItem>
                    <MenuItem value="50k-plus">
                      <FormattedMessage id="pages.contact.budgets.from50k" />
                    </MenuItem>
                    <MenuItem value="not-sure">
                      <FormattedMessage id="pages.contact.budgets.notSure" />
                    </MenuItem>
                  </Select>
                  {errors.budget && <FormHelperText>{errors.budget.message}</FormHelperText>}
                </FormControl>
              )}
            />
          </StyledFields>

          <TextField
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            label={formatMessage({ id: "pages.contact.fields.message" })}
            multiline
            minRows={6}
            required
            slotProps={{ htmlInput: { maxLength: 4000 } }}
          />

          <StyledHoneypot aria-hidden="true">
            <label>
              Leave this field empty
              <input {...register("website")} autoComplete="off" tabIndex={-1} />
            </label>
          </StyledHoneypot>

          <StyledSubmit disabled={isSubmitting} size="large" type="submit" variant="contained">
            <FormattedMessage id={isSubmitting ? "pages.contact.submitting" : "pages.contact.submit"} />
          </StyledSubmit>
        </StyledForm>

        <StyledSidebar elevation={0} variant="outlined">
          <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
            <FormattedMessage id="pages.contact.direct.title" />
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            <FormattedMessage id="pages.contact.direct.description" />
          </Typography>
          <StyledActions>
            <StyledAction component="a" href="mailto:sales@ethberry.io" variant="outlined">
              <FormattedMessage id="pages.contact.writeLetter" />
            </StyledAction>
            <StyledAction
              component="a"
              href="https://calendly.com/ethberry/30min"
              rel="noopener noreferrer"
              target="_blank"
              variant="outlined"
            >
              <FormattedMessage id="pages.contact.bookCall" />
            </StyledAction>
          </StyledActions>
        </StyledSidebar>
      </StyledLayout>
    </Root>
  );
};
