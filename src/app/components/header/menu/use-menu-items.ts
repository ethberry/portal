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
  const pressKit = formatMessage({ id: "components.header.menu.pressKit" });

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
          id: 54,
          link: "/press-kit",
          title: pressKit,
        },
      ],
    },
  ];
};
