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
  Link, Appear, Fill, Layout, Code
} from "spectacle";

export default class Usage extends React.Component {

    part1 = () => {
      return (
        <div>
          <Heading size={1} textSize={"1.4em"} caps bold lineHeight={1} textColor="black">
              Caso queira acessar um guia de git so clicar no link abaixo
          </Heading>
          <Link href="http://rogerdudler.github.io/git-guide/index.pt_BR.html">
            <Text bold caps textColor="white">git - guia prático</Text>
          </Link>
          <Text bold caps textColor="black">
                ou a Documentacão
          </Text>
          <Link href="https://git-scm.com/docs">
            <Text bold caps textColor="white">Clique aqui</Text>
          </Link>
        </div>
      );
    };

    part2 = () => {
      return (
        <div >
          <Text bold caps textColor="black">
                  Antes de mais nada vamos ao básico:
          </Text>
          <List>
              <Appear><ListItem bold textSize={"0.8em"}>git init</ListItem></Appear>
              <Appear><ListItem bold textSize={"0.8em"}>git clone usuário@servidor:/caminho/para/o/repositório</ListItem></Appear>
              <Appear><ListItem bold textSize={"0.8em"}>{"git add <arquivo> "}</ListItem></Appear>
              <Appear><ListItem bold textSize={"0.8em"}>{"git commit -m \"comentários das alterações\"" }</ListItem></Appear>
              <Appear><ListItem bold textSize={"0.8em"}>{"git push origin <branch>"}</ListItem></Appear>
          </List>
        </div>
      );
    };
    part3 = () => {
      return (
        <div >
          <Appear fid="1">
            <div>
              <Text bold caps textColor="black">
                  Acesse o link
              </Text>
              <Link href=" https://github.com/engylemure/jacee-ufes">
                <Text textSize={"1em"} bold caps textColor="white">
                      https://github.com/engylemure/jacee-ufes
                </Text>
              </Link>
            </div>
          </Appear>
          <Appear fid={"2"}>
            <div>
              <Text bold caps textColor="black">
                Obtenha o repositório em sua máquina local com o comando:
              </Text>
              <Layout>
                <Fill>
                  <Heading size={6} textColor="secondary" bgColor="white" margin={10} lineHeight={4} textSize={"0.6em"}>
                    git clone https://github.com/engylemure/jacee-ufes
                  </Heading>
                </Fill>
              </Layout>
            </div>
          </Appear>
        </div>
      );
    };
    render() {
      return this[`part${this.props.part}`]();
    }
}

Usage.defaultProps = {
  part: 1
};
