import { useIntl } from "react-intl";

export interface IMenuItem {
  id: number;
  link?: string;
  title: string;
  children?: IMenuItem[];
  external?: boolean;
}

export const useMenuItems = (): IMenuItem[] => {
  const { formatMessage } = useIntl();

  const home = formatMessage({ id: "components.header.menu.home" });
  const company = formatMessage({ id: "components.header.menu.company" });
  const careers = formatMessage({ id: "components.header.menu.careers" });
  const contact = formatMessage({ id: "components.header.menu.contact" });
  const locations = formatMessage({ id: "components.header.menu.locations" });
  const pressKit = formatMessage({ id: "components.header.menu.pressKit" });
  const events = formatMessage({ id: "components.header.menu.events" });

  return [
    {
      id: 1,
      link: "/",
      title: home,
    },
    {
      id: 5,
      title: company,
      children: [
        {
          id: 52,
          link: "/locations",
          title: locations,
        },
        {
          id: 53,
          link: "/events",
          title: events,
        },
        {
          id: 54,
          link: "/press-kit",
          title: pressKit,
        },
      ],
    },
    {
      id: 6,
      link: "/careers",
      title: careers,
    },
    {
      id: 7,
      link: "/contact",
      title: contact,
    },
  ];
};
