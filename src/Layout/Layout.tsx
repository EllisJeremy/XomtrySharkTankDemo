import Header from "./Header/Header";
import { Children, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
}

export default function Layout((children): LayoutProps)