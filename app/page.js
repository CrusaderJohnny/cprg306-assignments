import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div>
      <h1>
        Words go here
      </h1>
      <p>Link to week 2: <Link href="week-2">Week 2</Link> </p>
    </div>
  );
}