import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(`https://dummyjson.com/todos/${id}`);
        return res.data.todo;
      },
  }),
});
