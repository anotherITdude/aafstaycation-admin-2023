import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/nextjs";


export default function Page() { 

  return (
    <div className="">
      <div className="mb-4">
        Presently not accepting new accounts. Click below to sign in
      </div>
      {/* <SignUp /> */}
      <Button size="sm" variant="outline">
        <a href="/sign-in">Sign In</a>
      </Button>
    </div>
  );

}
