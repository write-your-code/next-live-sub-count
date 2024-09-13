import Image from "next/image";

export default function Home() {
  return <div className="container">{layout === 5 && <RonaldovsBeast />}</div>;
}
