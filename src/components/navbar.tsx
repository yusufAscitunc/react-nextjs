import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <Link href="/"> ToDo</Link>
      <Link href="/products"> Products</Link>
      <Link href="/about"> About</Link>
      <Link href="/info"> Info</Link>
    </div>
  );
};
