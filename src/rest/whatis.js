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
  Image
} from "spectacle";

import RESTfulLogo from "../assets/restful.png";
import APILogo from "../assets/api.png";

export default class WhatIs extends React.Component {
  api = () => {
    return (
      <div>
        <Image src={APILogo} margin="0px auto 40px" height="200px"/>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
          O acrônimo API que provém do inglês Application Programming Interface,
          trata-se de um conjunto de rotinas e padrões estabelecidos e documentados
          por uma aplicação A, para que outras aplicações consigam utilizar as funcionalidades desta aplicação A,
          sem precisar conhecer detalhes da implementação do software.
        </Text>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
          Desta forma, entendemos que as APIs permitem uma interoperabilidade entre aplicações.
          Em outras palavras, a comunicação entre aplicações e entre os usuários.
        </Text>
      </div>
    );
  };
  restful = () => {
    return (
      <div>
        <Image src={RESTfulLogo} margin="0px auto 40px" height="200px"/>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
          REST significa Representational State Transfer. Em português, Transferência de Estado Representacional.
          Trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints
          que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas.
          Desta forma, permitindo, por exemplo, que aplicações se comuniquem.
        </Text>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
          RESTful é a capacidade de determinado sistema aplicar os princípios de REST.
        </Text>
      </div>
    )
  }

  render() {
    return this[this.props.info]();
  }
}

WhatIs.defaultProps = {
  info: 'api'
}
