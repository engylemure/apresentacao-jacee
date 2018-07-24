import React from "react";

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link
} from "spectacle";

export default class About extends React.Component {

  start = () => {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
           Vamos comecar
        </Heading>
        <Link href="https://github.com/">
          <Text bold caps textColor="white">Acesse o Github e faça seu cadastro</Text>
        </Link>
      </div>
    );
  };

  render() {
    return this.start();
  }
}
