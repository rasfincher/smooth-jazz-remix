import { SignIn } from "@clerk/remix";
import { WrapperFull } from "~/components/WrapperFull";

export default function SignInPage() {
  return (
    <WrapperFull>
      <SignIn redirectUrl="/test" path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </WrapperFull>
  );
}
