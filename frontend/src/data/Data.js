// Sidebar icone Imports
import {TbHome,TbDoorEnter, TbUsers} from 'react-icons/tb';
import { BiNoEntry } from "react-icons/bi";
import { BsEmojiSunglasses } from "react-icons/bs";
import { FcFlowChart,FcDataSheet } from "react-icons/fc";
import { FaBusinessTime } from "react-icons/fa";

//Sidebar menu data
export const MenubarData = [
  {
    icon: TbHome,
    link: '/dashboard',
    heading: "Dashboard"
  },
  {
    icon: FcDataSheet,
    link: '/attendance',
    heading: "Attendance"
  },
  {
    icon: FaBusinessTime,
    link: '/overtimes',
    heading: "Overtimes"
  },
  // {
  //   icon: TbUsers,
  //   link: '/users',
  //   heading: "Users"
  // },
  // {
  //   icon: FcFlowChart,
  //   link: '/workflows',
  //   heading: "Workflows"
  // },
];

export const CardsData = [
  {
    title: "Present",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 84.80,
    count: "39",
    icon: TbDoorEnter,
    series: [
      {
        name: "Present",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Absent",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 8.70,
    count: "4",
    icon: BiNoEntry,
    series: [
      {
        name: "Absent",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "On Leave",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 6.5,
    count: "3",
    icon: BsEmojiSunglasses,
    series: [
      {
        name: "On Leave",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  }
];