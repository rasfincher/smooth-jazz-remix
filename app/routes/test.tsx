import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getUserByAuthUserId } from "~/models/user.server";

export const loader: LoaderFunction = async (args) => {
  const auth = await getAuth(args);

  if (!auth.userId) {
    return redirect("/sign-in");
  }
  console.log("Auth user: ", auth.userId);
  const user = await getUserByAuthUserId(auth.userId);
  console.log(user?.name);
  return json({ user });
};

export default function TestRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-2xl font-bold">Test Route - {data.user?.name}</p>
    </div>
  );
}
