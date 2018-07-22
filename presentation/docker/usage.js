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

export default class Usage extends React.Component {

    part1 = () => {
      return (
        <div>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
              Caso queira acessar um guia de git so clicar no link abaixo
          </Heading>
          <Link href="http://rogerdudler.github.io/git-guide/index.pt_BR.html">
            <Text bold caps textColor="white">git - guia prático</Text>
          </Link>
        </div>
      );
    };

    part2 = () => {
      return (
          <div >

          </div>
      );
    };
    part3 = () => {
        return (
            <div>

            </div>
        )
    };
    render() {
      return this[`part${this.props.part}`]();
    }
}

Usage.defaultProps = {
  part: 1
};
