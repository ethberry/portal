import { styled } from "@mui/material/styles";
import { Box, BoxProps, IconButton, Link, SvgIcon, Typography } from "@mui/material";

export const Root = styled(Box, { shouldForwardProp: prop => prop !== "show" })<BoxProps & { show?: boolean }>(
  ({ show, theme }) => ({
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(-8),
    marginRight: theme.spacing(-8),
    paddingBottom: theme.spacing(2),
    transition: "opacity 0.5s linear",
    opacity: show ? 1 : 0,
    background: "linear-gradient(to bottom, #4286f5 50%, #F5F5F5 50%)",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(-3),
      marginRight: theme.spacing(-3),
    },
  }),
);

export const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: 56,
  fontWeight: 400,
  margin: theme.spacing(10, 10, 6),
  width: "auto",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: 42,
    margin: theme.spacing(4, 10),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
    margin: theme.spacing(3, 10),
  },
}));

export const StyledTestimonialsWrapper = styled(Box)({
  "& .testimonials-slider .slick-track": {
    display: "flex",
    "& .slick-slide": {
      display: "flex",
      justifyContent: "center",
      height: "auto",
      "& > div": {
        height: "auto",
      },
    },
  },
}) as typeof Box;

export const StyledTestimonialWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex!important",
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(10),
})) as typeof Box;

export const StyledSelectedTestimonial = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 32,
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  maxWidth: 1000,
  margin: theme.spacing(2, "auto", 0),
  overflow: "visible",
  height: "auto",
  border: `1px solid #F5F5F5`,
  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.25)",
  background: theme.palette.background.paper,
  borderRadius: theme.spacing(3),
  position: "relative",
  zIndex: 100,
  "& p": {
    color: theme.palette.common.black,
  },
  [theme.breakpoints.down("lg")]: {
    height: "auto",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    gap: 24,
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.25)",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 16,
    justifyContent: "flex-start",
  },
}));

export const StyledAvatarWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  paddingLeft: theme.spacing(3),
  display: "flex",
  alignItems: "flex-end",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    paddingLeft: theme.spacing(1),
    marginBottom: 0,
    height: 200,
    marginTop: -32,
  },
})) as typeof Box;

export const StyledAvatar = styled(Box)(({ theme }) => ({
  height: 400,
  marginLeft: "auto",
  marginTop: -32,
  flexShrink: 0,
  [theme.breakpoints.down("sm")]: {
    height: 200,
    marginTop: 0,
  },
})) as typeof Box;

export const StyledContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(5, 4),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(0, 4, 4),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0, 2, 2),
  },
}));

export const StyledAuthorWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0, 0, 2),
  textDecoration: "none",
  alignItems: "center",
  "&:hover": {
    textDecoration: "none",
  },
  [theme.breakpoints.down("lg")]: {
    margin: theme.spacing(0, "auto", 2),
    padding: 0,
    flexDirection: "column",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0, "auto"),
  },
}));

export const StyledAuthor = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    marginBottom: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

export const StyledAuthorTitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.text.primary,
  fontSize: 28,
  fontWeight: 600,
  paddingBottom: 0,
  marginBottom: 0,
  lineHeight: 1.2,
  [theme.breakpoints.down("sm")]: {
    fontSize: 21,
  },
}));

export const StyledAuthorPosition = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: "#6a6a6a!important",
  fontSize: 16,
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1),
    fontSize: 14,
  },
}));

export const StyledTestimonialText = styled(Typography)(({ theme }) => ({
  color: "#6a6a6a!important",
  fontSize: 14,
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledLogo = styled(SvgIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  opacity: 0.8,
  color: "#4189f7",
  "&:hover": {
    opacity: 1,
    color: theme.palette.primary.main,
  },
})) as any;

export const StyledLink = styled(Link)(({ theme }) => ({
  width: 30,
  height: 30,
  marginTop: theme.spacing(2),
  display: "flex",
})) as typeof Link;

export const StyledControls = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 24,
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
  paddingLeft: theme.spacing(13),
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    paddingLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    gap: 16,
  },
}));

export const StyledControl = styled(IconButton)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: "0 0 16px 1px rgba(0, 0, 0, 0.1)",
  border: "1px solid #FFF",
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  zIndex: 1000,
  transition: "background 0.1s linear",
  "&:hover": {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
})) as typeof IconButton;

export const StyledActiveSlideWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  gap: 6,
  lineHeight: 1,
  fontSize: 16,
  color: "#bababa",
}));

export const StyledActiveSlide = styled(Typography)(({ theme }) => ({
  fontSize: 32,
  color: "#bababa",
  fontWeight: 500,
  lineHeight: 1,
  marginBottom: -4,
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
    marginBottom: 0,
  },
}));

export const StyledTotalSlides = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  color: "#bababa",
  fontWeight: 400,
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
