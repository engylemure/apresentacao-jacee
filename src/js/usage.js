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
  Fill,
  ComponentPlayground
} from 'spectacle'


const codeExample =`
const olaMundo = "Hello World!";
console.log(olaMundo)
render("Vamos aprender um pouco então!")
`;

export default class Usage extends React.Component {

  part1 = () => {
    return (
      <div>
        <ComponentPlayground
          theme="dark"
          code={codeExample}
        />
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
