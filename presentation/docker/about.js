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
           Caso queira baixar o Docker em sua casa ou computador acesse:
        </Heading>
        <Link href="https://www.docker.com/community-edition">
          <Text bold caps textColor="white">Docker Community Edition</Text>
        </Link>
      </div>
    );
  };

  render() {
    return this.start();
  }
}
