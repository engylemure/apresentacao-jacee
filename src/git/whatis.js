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
  Image, Appear
} from "spectacle";

import GitLogo from "../assets/git.png";
import GitHubLogo from "../assets/github.png";

export default class WhatIs extends React.Component {
  git = () => {
    return (
      <div>
        <Image src={GitLogo} margin="0px auto 40px" height="200px"/>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="secondary" bold textAlign={"justify"}>
            Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. O Git foi inicialmente projetado e desenvolvido por Linus Torvalds para o desenvolvimento do kernel Linux, mas foi adotado por muitos outros projetos.
        </Text>
        <Text margin="10px 0 0" textColor="secondary" size={1} textSize="0.6em" bold textAlign={"justify"}>
          Cada diretório de trabalho do Git é um repositório com um histórico completo e habilidade total de acompanhamento das revisões, não dependente de acesso a uma rede ou a um servidor central. O Git também facilita a reprodutibilidade científica em uma ampla gama de disciplinas, da ecologia à bioinformática, arqueologia à zoologia.
        </Text>
      </div>
    );
  };

  github = () => {
    return (
      <div>
        <Image src={GitHubLogo} margin="0px auto 40px" height="200px"/>
        <Text margin="10px 0 0" size={1} textSize="1em" textColor="secondary" bold>
          GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git.
        </Text>
        <List>
          <Appear><ListItem textSize="0.6em">Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.</ListItem></Appear>
          <Appear><ListItem textSize="0.6em">GitHub é amplamente utilizado por programadores para divulgação de seus trabalhos ou para que outros programadores contribuam com o projeto.</ListItem></Appear>
          <Appear><ListItem textSize="0.6em">Promove fácil comunicação através de recursos que relatam problemas ou mesclam repositórios remotos (issues, pull request).</ListItem></Appear>
        </List>
        <Text margin="10px 0 0" size={1} textSize="0.6em" textColor="secondary" bold textAlign={"justify"}>
          O GitHub é mundialmente usado e chega a ter mais de 3 milhões de usuários ativos mundialmente contribuindo em projetos comercias ou pessoais. Hoje o GitHub abriga mais de 65 milhões de projetos, alguns deles que são conhecidos mundialmente. WordPress, GNU/Linux, Atom, Electron. GitHub também oferece suporte ao recurso de organizacão que é amplamente utilizado por aqueles que querem uma escala maior para seus projetos. Na maioria das vezes, o recurso é usado por empresas já existentes como a Google, Microsoft e WordPress.
        </Text>
      </div>
    );
  };

  render() {
    const { info } = this.props;
    return this[info]();
  }
}

WhatIs.defaultProps = {
  info: "git"
};
