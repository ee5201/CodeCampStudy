import { atom } from "recoil";

const isEditState = atom({
  key: "isEditStae",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const vistedPageState = atom({
  key: "visitedPageState",
  default: "",
});
