import NextLink from "next/link";
import { Container, Box, useColorModeValue, Menu, MenuItem, MenuList, MenuButton, IconButton, Flex, Heading, Stack, MenuLink, Link, Button } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo";

const LinkItem = ({href, path, children}) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
    return (
        <NextLink href={href}>
            <Link
                p={3}
                bg={active ? "#B2F5EA" : undefined}
                color={active ? "#202023" : inactiveColor}
                fontWeight={500}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = (props) => {
    const {path} = props;
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style = {{ backdropFilter: "blur(10px)"}}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{base: "column", md:"row"}}
                    display={{base:"none", md:"flex"}}
                    width={{base:"full", md:"auto"}}
                    alignItems="center"
                    glexGrow={1}
                    mt={{base:4, nmd:0}}
                >
                    <LinkItem href="/rooms" path={path}>
                        Rooms and Facilities
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact us
                    </LinkItem>
                    <LinkItem href="/book" path={path}>
                        <Button colorScheme="teal">Book now</Button>
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <Box ml={2} display={{base: "inline-block", md:"none"}}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/rooms" passhref>
                                    <MenuItem as={Link}>Rooms and Facilities</MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passhref>
                                    <MenuItem as={Link}>Contact us</MenuItem>
                                </NextLink>
                                <NextLink href="/book" passhref>
                                    <MenuItem as={Link}>Book Now</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>

            </Container>

        </Box>
    )
}

export default Navbar;