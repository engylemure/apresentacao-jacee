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
  Text
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
      </Deck>
    );
  }
}
