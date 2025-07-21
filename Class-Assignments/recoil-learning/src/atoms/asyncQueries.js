import { atom, selector } from "recoil";
import axios from "axios";

// Asynchronous data queries
export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get("https://dummyjson.com/todos");
      return res.data;
    },
  }),
});
