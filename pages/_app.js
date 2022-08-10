import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import { AnimatePresence } from "framer-motion";
import theme from "../libs/theme"
// 
const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence>
          <Component {...pageProps}  key={router.route}/>
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
