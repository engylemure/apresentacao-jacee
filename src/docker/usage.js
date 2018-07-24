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
  Appear
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
  part3 = () => {
    return (
      <div>

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
