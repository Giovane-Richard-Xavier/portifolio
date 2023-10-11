import { ReactNode } from "react";
import { IHeaderProps } from "./components/Header/types";

export interface IMainLayoutProps {
  children?: ReactNode;
  headerProps?: IHeaderProps;
}
