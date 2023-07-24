import { Inter } from "next/font/google";

import Layout from "@/ui/components/layout/Layout";
import LandingPageContainer from "@/ui/components/modules/landindPage/landingPageContainer/LandingPageContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Layout>
        <LandingPageContainer />
      </Layout>
    </main>
  );
}
