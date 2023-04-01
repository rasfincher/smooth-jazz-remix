import { SignedIn, SignedOut, useUser } from "@clerk/remix";
import { Link } from "@remix-run/react";

import { WrapperFull } from "~/components/WrapperFull";

export default function Index() {
  const user = useUser();
  return (
    <WrapperFull>
      <div className="pb-10">
        <h1 className="text-shadow-lg text-center text-8xl font-bold uppercase text-slate-50">Smooth Jazz Stack</h1>
        <p className="text-shadow-lg mt-6 text-center text-xl font-bold text-slate-100">
          Minor friction, major performance, diminished complexity, augmented productivity
        </p>
        <SignedOut>
          <div className="mt-6 flex flex-row items-center justify-center space-x-4">
            <Link
              to="/sign-in"
              className="inline-block rounded bg-white px-7 py-3 text-center text-lg font-medium leading-snug text-blue-600 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="inline-block rounded bg-blue-600 px-7 py-3 text-center text-lg font-medium leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
            >
              Sign up
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="mt-6 flex flex-row items-center justify-center space-x-4">
            <p className="px-7 py-3 text-center text-lg font-medium leading-snug text-slate-100">
              You're signed in. Ya dig?
            </p>
          </div>
        </SignedIn>

        <p className="text-shadow-lg mt-6 text-center text-lg font-bold text-slate-100">
          Built with Remix, Tailwind, Clerk, and TypeScript. Deployed on Vercel.
        </p>
      </div>
    </WrapperFull>
  );
}
function useLoaderDate<T>() {
  throw new Error("Function not implemented.");
}
