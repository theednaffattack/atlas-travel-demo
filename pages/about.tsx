import React, { Component } from "react";
import Link from "next/link";
import { Text } from "rebass";
import Layout from "../components/Layout";
import Modal from "../modules/discover/Modal/Modal";
import { hotel } from "../mockData/hotel/hotel";
import { NewMessageComponent } from "../generated/apolloComponents";
import { newMessageSub } from "../graphql/message/subscriptions/NewMessage";
import Tabs from "../modules/explore/Tabs/Tabs";

const fakeAmenities = [
  "wifi",
  "pool",
  "hotelRestaurant",
  "innBar",
  "parking",
  "nightClub"
];
class AboutPage extends Component<React.Component> {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  state = {
    showModal: false
  };

  toggleModal() {
    console.log("toggle modal clicked");
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }
  render() {
    return (
      <Layout title="About | Next.js + TypeScript Example">
        {this.state.showModal.toString().toUpperCase()}
        <p>This is the about page</p>
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
        <p>
          <a onClick={this.toggleModal} style={{ cursor: "pointer" }}>
            Show Modal
          </a>
        </p>
        <Modal
          fakeAmenities={fakeAmenities}
          requestor="00840864-fa70-4b19-968a-0421b77b2074"
          data={hotel}
          show={this.state.showModal}
          toggle={this.toggleModal}
        />
        <NewMessageComponent>
          {(newMessageSub: any) => (
            <div>Some more stuff {Object.keys(newMessageSub)}</div>
          )}
        </NewMessageComponent>
        <Tabs>
          <div label="Activities">
            <Text>Nature's Light</Text>
            <Text>Cultural</Text>
            <Text>Popularity</Text>
            <Text>Modern Life</Text>
            <Text>Sun & Sand</Text>
          </div>
          <div label="Explore">Buncha weird stuff</div>
        </Tabs>
      </Layout>
    );
  }
}

export default AboutPage;
