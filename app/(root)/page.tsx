"use client";
import { UserButton } from "@clerk/clerk-react";

export default function SetupPage() {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
