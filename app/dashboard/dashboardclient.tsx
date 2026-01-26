"use client";

import { useState } from "react";
import Searchsection from "./_components/searchsection";
import Templateslist from "./_components/templateslist";


type User = {
  id: string;
  email: string;
  firstName: string;
};

export default function DashboardClient({ user }: { user: User }) {
  const [userinput, setuserinput] = useState("");

  console.log("User from server:", user);

  return (
    <div>
      {/* Search section */}
      <Searchsection
        onwrite={(value: string) => {
          setuserinput(value);
        }}
      />

      {/* Template list section */}
      <Templateslist passingchild={userinput} />
    </div>
  );
}
