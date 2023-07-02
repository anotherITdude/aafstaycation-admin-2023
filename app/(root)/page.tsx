'use client'
import { useClerk, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";


export default function SetupPage() {
  const { signOut } = useClerk();
  return (
    <div className="p-4">
      {/* <Button onClick={() => signOut()} size="sm" variant="default">
        Sign Out
      </Button> */}
      This is a protected route!
      <UserButton />
    </div>
  );
}
