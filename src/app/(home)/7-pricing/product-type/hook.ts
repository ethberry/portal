import { Theme } from "@mui/material/styles";
import { useIntl } from "react-intl";

export const useProductTypes = () => {
  const { formatMessage } = useIntl();

  return [
    {
      title: formatMessage({ id: "components.productTypes.saas.title" }),
      text: formatMessage({ id: "components.productTypes.saas.text" }),
      link: "/pricing/saas",
      linkTitle: formatMessage({ id: "components.productTypes.saas.linkTitle" }),
      icons: [
        {
          src: "/landing/pricing/screw-nut-1.png",
          sx: (theme: Theme) => ({
            width: 168,
            height: 156,
            transform: "translateY(-30%)",
            top: 0,
            left: "22%",
            [theme.breakpoints.down("lg")]: {
              width: 126,
              height: 117,
              left: "12%",
              transform: "translateY(-40%)",
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
          }),
        },
        {
          src: "/landing/pricing/screw-nut-2.png",
          sx: (theme: Theme) => ({
            width: 76,
            height: 93,
            transform: "translateY(-10%)",
            top: 0,
            right: "9%",
            [theme.breakpoints.down("lg")]: {
              width: 58,
              height: 71,
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
          }),
        },
      ],
    },
    {
      title: formatMessage({ id: "components.productTypes.selfHosted.title" }),
      text: formatMessage({ id: "components.productTypes.selfHosted.text" }),
      link: "/pricing/self-hosted",
      linkTitle: formatMessage({ id: "components.productTypes.selfHosted.linkTitle" }),
      icons: [
        {
          src: "/landing/pricing/screw-nut-3.png",
          sx: (theme: Theme) => ({
            width: 78,
            height: 91,
            transform: "translateY(5%)",
            top: 0,
            left: "18%",
            [theme.breakpoints.down("lg")]: {
              width: 54,
              height: 63,
              left: "14%",
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
          }),
        },
        {
          src: "/landing/pricing/screw-nut-4.png",
          sx: (theme: Theme) => ({
            width: 166,
            height: 129,
            transform: "translateY(-30%)",
            top: 0,
            right: "12%",
            [theme.breakpoints.down("lg")]: {
              width: 135,
              height: 105,
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
          }),
        },
      ],
    },
    {
      title: formatMessage({ id: "components.productTypes.enterprise.title" }),
      text: formatMessage({ id: "components.productTypes.enterprise.text" }),
      link: "/contact/enterprise",
      linkTitle: formatMessage({ id: "components.productTypes.enterprise.linkTitle" }),
      icons: [
        {
          src: "/landing/pricing/screw-nut-5.png",
          sx: (theme: Theme) => ({
            width: 74,
            height: 84,
            transform: "translateY(5%)",
            top: 0,
            left: "5%",
            [theme.breakpoints.down("lg")]: {
              width: 60,
              height: 68,
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
          }),
        },
        {
          src: "/landing/pricing/screw-nut-6.png",
          sx: (theme: Theme) => ({
            width: 143,
            height: 160,
            transform: "translateY(-44%)",
            top: 0,
            right: "30%",
            [theme.breakpoints.down("lg")]: {
              width: 108,
              height: 121,
              right: "30%",
            },
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
          }),
        },
      ],
    },
  ];
};
