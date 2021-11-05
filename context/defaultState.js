import {
  MdSpaceDashboard,
  MdPeopleAlt,
  MdLock,
  MdStream,
} from "react-icons/md";
import { token } from "./baseUrl";

export const defaultState = {
  isDropdown: true,
  user: {},
  isUser: false,
  token: token,
  asideContents: [
    {
      text: "Dashboard",
      icon: <MdSpaceDashboard />,
      id: 1,
      open: true,
      link: "/",
    },

    {
      id: 2,
      text: "Stakeholders",
      expandable: true,
      icon: <MdPeopleAlt />,
      dropdown: [
        {
          text: "Add New",

          link: "/add-new-stakeholder",
        },
        {
          text: "Members",

          link: "/members",
        },
      ],
      open: true,
    },
    {
      id: 3,
      text: "Pin Management",
      icon: <MdLock />,
      open: true,
      link: "/pin-management",
    },
    {
      id: 4,
      open: true,
      text: "Revenue Streams",
      expandable: true,
      icon: <MdStream />,
      dropdown: [
        { text: "Add New", icons: "", link: "/add-revenue" },
        { text: "All Revenues", icons: "", link: "/all-revenues" },
      ],
    },
  ],
};
