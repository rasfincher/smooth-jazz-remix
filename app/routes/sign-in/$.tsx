import { SignIn } from "@clerk/remix";
import { WrapperFull } from "~/components/WrapperFull";

export default function SignInPage() {
  return (
    <WrapperFull>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </WrapperFull>
  );
}
