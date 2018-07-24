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

import JSLogo from "../assets/js.png";

export default class WhatIs extends React.Component {
  js = () => {
    return (
      <div>
        <Image src={JSLogo} margin="0px auto 40px" height="200px"/>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
          JavaScript é uma linguagem de programação interpretada. Foi originalmente implementada como parte dos
          navegadores web para que scripts pudessem ser executados do lado do cliente e interagissem com o usuário
          sem a necessidade deste script passar pelo servidor, controlando o navegador,
          realizando comunicação assíncrona e alterando o conteúdo do documento exibido.
        </Text>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
          É atualmente a principal linguagem para programação client-side em navegadores web.
          Começa também a ser bastante utilizada do lado do servidor através de ambientes como o node.js.
          Foi concebida para ser uma linguagem script com orientação a objetos baseada em protótipos,
          tipagem fraca e dinâmica e funções de primeira classe. Possui suporte à programação funcional e
          apresenta recursos como fechamentos e funções de alta ordem comumente indisponíveis em linguagens populares como Java e C++.
          É a linguagem de programação mais utilizada do mundo.
        </Text>
      </div>
    );
  };

  render() {
    return this.js();
  }
}

