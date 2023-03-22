import { ChangeEvent } from "react";

export interface ILayoutheaderContainer {
  OnclickTitle: (event: ChangeEvent<HTMLButtonElement>) => void;
  OnclickLogin: (event: ChangeEvent<HTMLButtonElement>) => void;
  OnclicksignUP: (event: ChangeEvent<HTMLButtonElement>) => void;
}
