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

import DockerLogo from "../assets/docker.png";

export default class WhatIs extends React.Component {
  docker = () => {
    return (
      <div>
        <Image src={DockerLogo} margin="0px auto 40px" height="200px"/>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
            O docker é uma alternativa de virtualização em que o kernel da máquina hospedeira é compartilhado com a máquina virtualizada ou o software em operação, portanto um desenvolvedor pode agregar a seu software a possibilidade de levar as bibliotecas e outras dependências do seu programa junto ao software com menos perda de desempenho do que a virtualização do hardware de um servidor completo. Assim, o docker torna operações em uma infraestrutura como serviços web mais intercambiável, eficientes e flexíveis.
        </Text>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="black" bold textAlign={"justify"}>
            Segundo uma análise da 451 Research, o "docker é uma ferramenta que pode empacotar um aplicativo e suas dependências em um recipiente virtual que pode ser executado em qualquer servidor Linux. Isso ajuda a permitir flexibilidade e portabilidade de onde o aplicativo pode ser executado, quer nas instalações, nuvem pública, nuvem privada, entre outros."        </Text>
      </div>
    );
  };

  render() {
    return this.docker();
  }
}

