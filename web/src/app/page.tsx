import Image from "next/image";
import malphite from "../assets/malphiteVert.png";
import { Input } from "@/components/ui/input";
import LinkInput from "@/components/LinkInput";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-16 items-center mt-32 mx-8">
        <h1 className="text-6xl font-bold max-w-[800px] text-center">
          Best tools to help ou win more games
        </h1>
        <Image src={malphite} className="w-1/2" alt="Malphite aux trèfles" />
        <LinkInput />
      </div>
    </>
  );
}
