import Layout from "@/ui/components/layout/Layout";
import OffertPageContainer from "@/ui/components/modules/offerts/offertPages/offertPageContainer/OffertPageContainer";
import { Typograpy } from "@/ui/design-system/typography/Typography";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <Layout>
      <div>
        <Typograpy variant="h2">
          Liste des Offres doit etre affiché ici
        </Typograpy>
      </div>
    </Layout>
  );
};

export default index;
