import { Box } from "@chakra-ui/react";
import Contribute from "./Contribute";
import Convex from "./Convex";
import Earn from "./Earn";
import EndBanner from "./EndBanner";
import Footer from "./Footer";
import Herosection from "./Herosection";
import Navbar from "./Navbar";
import Protocol from "./Protocol";
import Token from "./Token";
import Tokenomics from "./Tokenomics";
import Trade from "./Trade";

const App = () => {
  return (
    <Box bg='#EFEFEF'>
      <Navbar />
      <Herosection />
      <Protocol />
      <Token />
      <Earn />
      <Convex />
      <Trade />
      <Tokenomics />
      <Contribute />
      <EndBanner />
      <Footer />
    </Box>
  );
};

export default App;
