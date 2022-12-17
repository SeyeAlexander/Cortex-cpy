import { Box } from "@chakra-ui/react";
import Convex from "./Convex";
import Earn from "./Earn";
import Herosection from "./Herosection";
import Navbar from "./Navbar";
import Protocol from "./Protocol";
import Token from "./Token";

const App = () => {
  return (
    <Box bg='#EFEFEF'>
      <Navbar />
      <Herosection />
      <Protocol />
      <Token />
      <Earn />
      <Convex />
    </Box>
  );
};

export default App;
