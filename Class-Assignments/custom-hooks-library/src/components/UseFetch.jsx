import { useFetch } from "@uidotdev/usehooks";
import { useState } from "react";

function UseFetch() {
  const [count, setCount] = useState(1);

  const { error, data } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${count}`
  );

  return (
    <section>
      <h1>useFetch</h1>
      <button
        disabled={count < 2}
        className="link"
        onClick={() => setCount((c) => c - 1)}
      >
        prev
      </button>
      <button className="link" onClick={() => setCount((c) => c + 1)}>
        Next
      </button>
      <Card loading={!data} error={error} data={data} />
    </section>
  );
}

export default UseFetch;
