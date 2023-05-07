import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <p className="text-3xl text-sky-500">
        Hello Messagner!
        </p>
    </div>
  );
}
