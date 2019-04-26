import React from "react";

import Layout from "../components/AuthLayoutPlain";
import { HelloWorldComponent } from "../generated/apolloComponents";
import { TravelingPage } from "../modules/traveling/Traveling";

export default function() {
  return (
    <Layout>
      <HelloWorldComponent>
        {data => <TravelingPage data={data} />}
      </HelloWorldComponent>
    </Layout>
  );
}
