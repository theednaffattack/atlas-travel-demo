import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Modal from "../modules/discover/Modal/Modal";

class AboutPage extends Component<React.Component> {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  state = {
    showModal: true
  };

  toggleModal() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }
  render() {
    return (
      <Layout title="About | Next.js + TypeScript Example">
        <p>This is the about page</p>
        <p>
          <Link href="/">
            <a>Go home</a>
          </Link>
        </p>
        <p>
          <a onClick={this.toggleModal}>Show Modal</a>
        </p>
        <Modal show={this.state.showModal} toggle={this.toggleModal} />
      </Layout>
    );
  }
}

export default AboutPage;
