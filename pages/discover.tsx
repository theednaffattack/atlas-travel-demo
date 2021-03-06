import React from "react";

import Layout from "../components/AuthLayoutColorful";
import { HelloWorldComponent } from "../generated/apolloComponents";
import { DiscoverPage } from "../modules/discover/DiscoverPage";

export default function() {
  return (
    <Layout>
      <HelloWorldComponent>
        {data => <DiscoverPage data={data} />}
      </HelloWorldComponent>
    </Layout>
  );
}
