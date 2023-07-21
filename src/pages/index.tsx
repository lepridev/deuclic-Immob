import Image from "next/image";
import { Inter } from "next/font/google";
import { Typograpy } from "@/ui/design-system/typography/Typography";
import { Button } from "@/ui/design-system/buttons/Button";
import { AiFillGithub } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Typograpy variant="h1" component="div">
        Hello !
      </Typograpy>
      <Button
        variant="ico"
        icoTheme="accent"
        size="large"
        icoPosition="right"
        icon={{ icon: AiFillGithub }}
      >
        HELLO
      </Button>
    </main>
  );
}
