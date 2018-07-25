import React from 'react'

import {
  Heading,
  Text,
  Link,
  Layout,
  Fill
} from 'spectacle'

export default class Usage extends React.Component {
  constructor (){
    super();
    this.state = {
      dataBaseType: 'sql',
      dbTypeSelected: false
    };
  }

  handleChoice = (dbType) => {
    return () => {
      this.setState({
        dataBaseType: dbType,
        dbTypeSelected: true
      })
    }
  }

  part1 = () => {
    return (
      <div>
        <Heading size={1} textSize={'1em'} lineHeight={1} textColor="black">
          Levando em consideração tudo o que vimos até agora iremos desenvolver uma pequena API aplicando alguns dos princípios REST
          com algumas ferramentas e tecnologias aqui listadas
        </Heading>
        {this.state.dbTypeSelected ? this.frameworksList() : this.selectDbType()}
      </div>
    )
  }

  selectDbType = () => {
    return (
      <div>
        <Layout>
          <Fill>
            <button style={buttonStyle} type="button" onClick={this.handleChoice('sql')}>SQL</button>
          </Fill>
          <Fill>
            <button style={buttonStyle} type="button" onClick={this.handleChoice('nosql')}>NoSQL</button>
          </Fill>
        </Layout>
      </div>
    )
  }

  frameworksList = () => {
    return(
      <div>
        <Text bold textSize={'1.5em'} margin={10} textColor={"#47476b"} textAlign={"justify"}>Framework de Servidor Web para NodeJs:</Text>
        <Link href="http://expressjs.com/">
          <Text bold textSize={'1.2em'} margin={10} textColor={"#4286f4"} >ExpressJS</Text>
        </Link>
        <Text bold textSize={'1.5em'} margin={10} textColor={"#47476b"} textAlign={"justify"}>Banco de dados:</Text>
        <Link href={this.state.dataBaseType === "sql" ? "https://www.mysql.com/" : "https://www.mongodb.com/"}>
          <Text bold textSize={'1.2em'} margin={10} textColor={"#4286f4"} >{this.state.dataBaseType === "sql" ? "MySQL" : "MongoDB"  } </Text>
        </Link>
        <Text bold textSize={'1.5em'} margin={10} textColor={"#47476b"} textAlign={"justify"}>Framework ORM(Object Relational Mapping ou Mapeamento Objeto Relacional):</Text>
        <Link href={this.state.dataBaseType === "sql" ? "http://docs.sequelizejs.com/" : "http://mongoosejs.com/"}>
          <Text bold textSize={'1.2em'} margin={10} textColor={"#4286f4"} >{this.state.dataBaseType === "sql" ? "Sequelize" : "Mongoose"  }</Text>
        </Link>
        <Text bold textSize={'1.5em'} margin={10} textColor={"#47476b"} textAlign={"justify"}>Já sabemos pro que usar né?</Text>
        <Link href="https://www.docker.com/">
          <Text bold textSize={'1.2em'} margin={10} textColor={"#4286f4"} >Docker</Text>
        </Link>
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

const buttonStyle = {
  padding: 20,
  background: "black",
  minWidth: 300,
  marginTop: 20,
  textTransform: "uppercase",
  border: "none",
  color: "white",
  outline: "none",
  fontWeight: "bold",
  fontSize: "1.5em"
};