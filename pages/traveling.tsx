import React from "react";

import Layout from "../components/AuthLayoutPlain";
import {
  HelloWorldComponent,
  MeComponent
} from "../generated/apolloComponents";
import { TravelingPage } from "../modules/traveling/Traveling";
// import { MyContext } from "../interfaces/MyContext";

export default class Traveling extends React.Component {
  // static async getInitialProps({
  //   query: { token },
  //   apolloClient,
  //   ...ctx
  // }: MyContext) {
  //   console.log(Object.keys(ctx));
  //   console.log(Object.keys(apolloClient));
  //   console.log(ctx.req);
  //   return {};
  // }
  render() {
    return (
      <Layout>
        <MeComponent>{data => <TravelingPage data={data} />}</MeComponent>
      </Layout>
    );
  }
}
