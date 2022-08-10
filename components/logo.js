import Link from 'next/link'
// import Image from 'next/image'
import {Text, useColorModeValue, Image} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {
        transition: 200ms ease;
    }
    &:hover img {
        transformL rotate(20deg);
    }
`

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>
                    <Text
                         color='white'
                         fontFamily=''
                         fontWeight="bold"
                         ml={2}
                         fontSize="3xl"
                        //  bg="black"
                    >
                        🏠 M P C
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo