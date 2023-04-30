import { motion } from "framer-motion";
import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{ height: "80vh", }}
        animate={{ translateY: "20px", }}
        transition={{
          duration: "2",
          repeat: "infinity",
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          m={"auto"}
          objectFit={"contain"}
          filter={"grayscale(1)"}
          src="https://www.freepnglogos.com/uploads/bitcoin-png/bitcoinpaygate-bitcoin-payment-gateway-payment-processor-7.png"
          width="200"
          alt="bitcoinpaygate bitcoin payment gateway payment processor"
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        XCrypto
      </Text>
    </Box>
  );
};

export default Home;
