import { getAuth } from "@clerk/remix/ssr.server";
import { useUser } from "@clerk/remix";
import { ActionArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

import { createUser, getUserByAuthUserId } from "~/models/user.server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  const name = body.get("name")?.toString();
  const email = body.get("email")?.toString();
  const authUserId = body.get("authUserId")?.toString();

  if (!name || !email || !authUserId) {
    return redirect("/profile-setup");
  }
  await createUser(email, authUserId, name);
  return redirect("/");
}

export const loader: LoaderFunction = async (args) => {
  const auth = await getAuth(args);

  if (!auth.userId) {
    return redirect("/sign-in");
  }
  const user = await getUserByAuthUserId(auth.userId);
  return json({ user });
};

export default function ProfileSetupRoute() {
  const data = useLoaderData<typeof loader>();
  const user = useUser();
  const email = user.user?.emailAddresses[0].emailAddress;
  const authUserId = user.user?.id;

  return (
    // a form to set up a user's profile
    <div className="flex flex-col items-center justify-center h-full">
      <Form method="post">
        <div className="flex flex-col items-center justify-center space-y-4">
          <label className="text-lg font-bold text-slate-100" htmlFor="name">
            Name
          </label>
          <input
            className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
          />
          <label className="text-lg font-bold text-slate-100" htmlFor="email">
            Email
          </label>
          <input
            className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            type="email"
            name="email"
            id="email"
            defaultValue={email}
          />
          <input type="hidden" name="authUserId" value={authUserId} />
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-lg" type="submit">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}
