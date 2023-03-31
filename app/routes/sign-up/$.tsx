import { SignUp } from "@clerk/remix";
import { WrapperFull } from "~/components/WrapperFull";

export default function SignUpPage() {
  return (
    <WrapperFull>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </WrapperFull>
  );
}
