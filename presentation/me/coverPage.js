// Import React
import React from "react";

// Import Spectacle Core tags
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
  Image
} from "spectacle";

export default class CoverPage extends React.Component {
  render() {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Introdução ao
        </Heading>
        <Text margin="10px 0 0" size={1} fit lineHeight={1} textColor="secondary">
          GitHub, Docker E RestAPI
        </Text>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          por Jordao Rodrigues Oliveira Rosario
        </Text>
      </div>
    );
  }
}
