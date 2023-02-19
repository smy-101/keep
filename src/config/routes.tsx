import { RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Fourth } from "../components/welcome/Fourth";
import { Welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      {
        path: "1",
        component: First,
      },
      {
        path: "2",
        component: Second,
      },
      {
        path: "3",
        component: Third,
      },
      {
        path: "3",
        component: Fourth,
      },
    ],
  },
];
