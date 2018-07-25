import React from "react";

import {
  Layout,
  Fill,
  Heading,
  Link,
  Text
} from "spectacle";

export default class About extends React.Component {

  start = () => {
    return (
      <div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
           Caso queira acesar um site com alguns tutoriais:
        </Heading>
        <Layout>
          <Fill>
            <Link href="https://www.javascript.com/">
              <Text bold textColor="black" bgColor="yellow" padding={"20px 0px 20px 0px"} margin={"10px 6em 10px 6em"}>
                JavaScript
              </Text>
            </Link>
          </Fill>
        </Layout>
      </div>
    );
  };

  render() {
    return this.start();
  }
}
