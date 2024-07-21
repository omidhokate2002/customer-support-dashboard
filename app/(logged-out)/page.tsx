import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex items-center gap-2">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-3 items-center">
        <Button className="font-bold" asChild>
          <Link href="/login">Log In</Link>
        </Button>
        <small>||</small>
        <Button className="font-bold" variant="outline" asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
      <Button className="font-bold" variant="secondary" asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </>
  );
}
