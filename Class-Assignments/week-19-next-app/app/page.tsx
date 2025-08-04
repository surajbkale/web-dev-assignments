import Link from "next/link";

export default function Home() {
  return (
    <div className="text-4xl w-screen h-screen p-5 flex items-center justify-center">
      <div>
        Todo Application
        <br />
        <br />
        <Link
          className="border text-sm p-4 m-4 rounded-2xl bg-white font-bold text-gray-800"
          href={"/signup"}
        >
          SignUp
        </Link>
        <Link
          className="border text-sm p-4 m-4 rounded-2xl bg-white font-bold text-gray-800"
          href={"/signin"}
        >
          SignIn
        </Link>
      </div>
    </div>
  );
}
