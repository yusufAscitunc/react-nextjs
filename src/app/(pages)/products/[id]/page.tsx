"use client";
import { useSearchParams } from "next/navigation";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div>
      Page id: {params.id} <p>id: {id}</p>
    </div>
  );
};

export default Page;
