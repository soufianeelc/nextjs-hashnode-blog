import { Gihtub } from "./icons/Github";
import { LinkedIn } from "./icons/LinkedIn";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="flex items-center  justify-between border-b border-gray-200 py-4">
      <a href="/" className="flex items-center gap-2 text-neutral-800">
        <Image src="/logo.svg" alt="Soufiane's logo" width={30} height={30} />

        <h1 className="text-2xl font-bold ">soufianeelc.</h1>
      </a>

      <div className="flex items-center gap-4">
        <LinkedIn />
        <Gihtub />
      </div>
    </header>
  );
}
