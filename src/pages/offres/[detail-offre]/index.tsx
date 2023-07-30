import Layout from "@/ui/components/layout/Layout";
import OffertPageContainer from "@/ui/components/modules/offerts/offertPages/offertPageContainer/OffertPageContainer";
import { Typograpy } from "@/ui/design-system/typography/Typography";
import React from "react";

const DetailOffre = () => {
  return (
    <Layout>
      <div>
        <Typograpy variant="h2">Detail Offre</Typograpy>
        <OffertPageContainer />
      </div>
    </Layout>
  );
};

export default DetailOffre;
