import React from 'react'

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
  Link,
  Appear,
  Layout,
  Fill
} from 'spectacle'

export default class Usage extends React.Component {

  part1 = () => {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Para o que o Docker é utilizado?
        </Heading>
        <List>
          <Appear><ListItem bold textSize={'0.8em'}>É uma plataforma de containers de software</ListItem></Appear>
          <Appear><ListItem bold textSize={'0.8em'}>Permite de maneira simples o "empacotamento" de software</ListItem></Appear>
          <Appear><ListItem bold textSize={'0.8em'}>Pode ser executado de maneira isolada em relação ao sistema operacional</ListItem></Appear>
        </List>
        <Appear fid="1">
          <Heading textSize={"1.0em"} textAlign={"center"} caps lineHeight={1} textColor="black">
            Utilizamos o Docker para eliminar um famoso problema na computacão:
          </Heading>
        </Appear>
        <Appear fid="2">
          <div>
            <Heading size={1} margin={"20px"} caps fit textColor="primary">
              "funciona na minha máquina"
            </Heading>
            <Text  margin="10px 0 0" size={1} textSize="0.8em" textColor="black" bold textAlign={"justify"}>
              Pois sua execução independe do sistema operacional do usuário, garantindo que o sistema vai ser executado
              de maneira eficiente e da mesma maneira todas as vezes que alguém executá-lo.
            </Text>
          </div>
        </Appear>
      </div>
    )
  }
  part2 = () => {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="#47476b">
          Esclarecendo algumas coisas:
        </Heading>
        <Appear fid="1">
          <div>
            <Heading textSize={"1.0em"} textAlign={"center"} lineHeight={1} textColor="black">
              O que é um Container?
            </Heading>
            <Text  margin="10px 0 0" size={1} textSize="0.8em" textColor="white" bold textAlign={"justify"}>
              O container é inicializado ao se executar uma imagem, sendo assim um container é uma instancia em tempo de execução de
              uma imagem , o que a imagem se torna em memoria ao ser executada ( ou seja, uma imagem com estado, ou um processo de um usuario).
            </Text>
          </div>
        </Appear>
        <Appear fid="2">
          <div>
            <Heading textSize={"1.0em"} textAlign={"center"} lineHeight={1} textColor="black">
              O que é uma Imagem?
            </Heading>
            <Text  margin="10px 0 0" size={1} textSize="0.8em" textColor="white" bold textAlign={"justify"}>
              Uma imagem é um pacote executável que inclui tudo o que é necessário para executar um aplicativo - o código,
              um runtime (descreve o software / instruções que são executadas enquanto o programa está em execução, especialmente
              aquelas que você não escreveu explicitamente, mas são necessárias para a execução adequada do seu código), bibliotecas,
              variáveis de ambiente e arquivos de configuração.
            </Text>
          </div>
        </Appear>
      </div>
    )
  }

  part3 = () => {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Caso queira acessar a documentação:
        </Heading>
        <Link href=" https://docs.docker.com/get-started/">
          <Text textSize={"1.2em"} bold caps textColor="white" margin={"10px"}>
            https://docs.docker.com/get-started/
          </Text>
        </Link>
      </div>
    )
  }
  part4 = () => {
    return (
      <div>
        <Heading size={1} textSize={"1.0em"} caps lineHeight={1} textColor="white">
          Alguns comandos básicos:
        </Heading>
        <List>
          <ListItem textSize={"0.8em"}>
            Caso queira visualizar algumas informações do Docker em seu computador
          </ListItem>
        </List>
        <Layout>
          <Fill>
            <Heading size={3} textColor="secondary" bgColor="white" margin={2} lineHeight={2} textSize={"0.6em"}>
              docker info
            </Heading>
          </Fill>
        </Layout>
        <List>
          <ListItem textSize={"0.8em"}>
            Teste a sua instalação executando uma Imagem simples do Docker
          </ListItem>
        </List>
        <Layout>
          <Fill>
            <Heading size={3} textColor="secondary" bgColor="white" margin={2} lineHeight={2} textSize={"0.6em"}>
              docker run hello-world
            </Heading>
          </Fill>
        </Layout>
        <List>
          <ListItem textSize={"0.8em"}>
            Liste as Imagens baixadas em seu computador
          </ListItem>
        </List>
        <Layout>
          <Fill>
            <Heading size={3} textColor="secondary" bgColor="white" margin={2} lineHeight={2} textSize={"0.6em"}>
              docker image ls
            </Heading>
          </Fill>
        </Layout>
        <List>
          <ListItem textSize={"0.8em"}>
            Liste os Containers em seu computador
          </ListItem>
        </List>
        <Layout>
          <Fill>
            <Heading size={3} textColor="secondary" bgColor="white" margin={2} lineHeight={2} textSize={"0.6em"}>
              docker container ls --all
            </Heading>
          </Fill>
        </Layout>
      </div>
    )
  }

  part5 = () => {
    return (
      <div>
        <Heading size={1} textSize={"1.0em"} lineHeight={1} textColor="black" textAlign={"justify"}>
          Agora que já sabemos um pouco mais sobre Docker, navegue até o diretório em que se encontra
          o repositório que você baixou do jacee-ufes, abra o terminal e execute o comando:
        </Heading>
        <Layout>
          <Fill>
            <Heading size={6} textColor="secondary" bgColor="white" margin={15} lineHeight={3} textSize={"0.8em"}>
              docker-compose up -d
            </Heading>
          </Fill>
        </Layout>
        <Heading size={1} textSize={"1.0em"} lineHeight={1} textColor="black" textAlign={"justify"}>
          Enquanto ele vai sendo baixado e sendo executado em seu computador, vamos ao básico de JavaScript...
        </Heading>
      </div>
    )
  }

  render () {
    return this[`part${this.props.part}`]()
  }
}

Usage.defaultProps = {
  part: 1
}
