import React from "react";

import Layout from "../components/AuthLayoutPlain";
import { MeComponent } from "../generated/apolloComponents";
import MessagesPage from "../modules/messages/MessagesPage";
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
        <MeComponent>{data => <MessagesPage data={data} />}</MeComponent>
      </Layout>
    );
  }
}
