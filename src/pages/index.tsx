import Image from "next/image";
import { Inter } from "next/font/google";
import { Typograpy } from "@/ui/design-system/typography/Typography";
import { Button } from "@/ui/design-system/buttons/Button";

import OffertBoxHorizontal from "@/ui/design-system/box/OffertBoxHorizontal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-5">
      <OffertBoxHorizontal />
    </main>
  );
}
