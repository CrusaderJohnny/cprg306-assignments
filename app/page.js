import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div>
      <h1>
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p>Link to week 2: <Link href="week-2">Week 2</Link> </p>
      <p>Link to week 3: <Link href="week-3">Week 3</Link></p>
    </div>
  );
}