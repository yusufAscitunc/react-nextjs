import { redirect } from "next/navigation";
import React from "react";

function Page() {
  redirect("/about");

  return <div>Info Page</div>;
}

export default Page;
