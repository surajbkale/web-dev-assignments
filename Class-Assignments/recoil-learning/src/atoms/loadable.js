import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todoSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        // await new Promise((r) => setTimeout(r, 5000));
        const res = await axios.get(`https://dummyjson.com/todos/${id}`);

        return res.data;
      },
  }),
});
