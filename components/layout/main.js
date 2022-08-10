import Head from "next/head";
import Navbar from '../navbar.js'
import {Box, Container, Image} from '@chakra-ui/react'
// import banner from '../banner.png'


const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content='width=device-width, initial-scale=1' />
                <title>MPC boys Hostel</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {/* <Image src={banner}/> */}
                {children}
            </Container>
        </Box>
    )
}

export default Main;