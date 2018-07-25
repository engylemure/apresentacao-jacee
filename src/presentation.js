// Import React
import React from "react";

// Import Spectacle Core tags
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
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import CoverPage from "./me/coverPage";
import WhatIsGit from "./git/whatis";
import AboutGit from "./git/about";
import WhatIsDocker from "./docker/whatis";
import UsageGit from "./git/usage";
import AboutDocker from "./docker/about";
import UsageDocker from './docker/usage'
import WhatIsJS from "./js/whatis";
import AboutJS from './js/about'
import UsageJS from './js/usage'
import WhatIsREST from './rest/whatis'
import UsageREST from './rest/usage'
import TheEnd from './assets/the-end.jpg'
// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <CoverPage/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <WhatIsGit info={"git"}/>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <WhatIsGit info={"github"}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" >
          <AboutGit/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" >
          <UsageGit part={1}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" >
          <UsageGit part={2}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" >
          <UsageGit part={3}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="white" >
          <WhatIsDocker/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#0087C9" >
          <AboutDocker/>
        </Slide >
        <Slide transition={["fade"]} bgColor="#0087C9">
          <UsageDocker part={1}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#0087C9">
          <UsageDocker part={2}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#0087C9">
          <UsageDocker part={3}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#0087C9">
          <UsageDocker part={4}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#0087C9">
          <UsageDocker part={5}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#e6e6e6">
          <WhatIsJS />
        </Slide>
        <Slide transition={["fade"]} bgColor="#e6e6e6">
          <AboutJS/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#e6e6e6">
          <UsageJS/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#e6e6e6">
          <WhatIsREST info={'api'}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#e6e6e6">
          <WhatIsREST info={'restful'}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="#e6e6e6">
          <UsageREST />
        </Slide>
        <Slide transition={["slide"]} bgImage={TheEnd} bgDarken={0.5}>
          <Heading size={1} textSize={"2em"} caps lineHeight={1} textColor="#f4429e">Creditos e agradecimentos a:</Heading>
          <List>
            <ListItem bold textSize={"1.2em"} textColor={"white"}>WikiPedia</ListItem>
            <ListItem bold textSize={"1.2em"} textColor={"white"}>GitHub</ListItem>
            <ListItem bold textSize={"1.2em"} textColor={"white"}>StackOverflow</ListItem>
            <ListItem bold textSize={"1.2em"} textColor={"white"}>E alguns outros sites que não lembro o nome</ListItem>
            <ListItem bold textSize={"1.2em"} textColor={"white"}>...</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
