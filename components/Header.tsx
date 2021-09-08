import { Box, Heading, Link, Spacer } from "@chakra-ui/layout";
import { Center, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { Button, IconButton } from "@chakra-ui/button";
import { CgDarkMode } from "react-icons/cg"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AiFillGithub } from "react-icons/ai"
import { SiGithub } from "react-icons/si"
import NextLink from 'next/link'

export default function Header() {
    const bg = useColorModeValue("gray.200", "green.600");
    const { colorMode, toggleColorMode } = useColorMode();
    const isLight = colorMode === "light";
    return (
        <Box borderColor={bg} borderWidth={2} h="50px" mt={8} mb={8}>
            <Center h="100%" px={2}>
                <NextLink href="/">
                    <Button variant="ghost">Home</Button>
                </NextLink>
                <Spacer />
                <Link href="https://github.com/NeoTheSecond/portfolio" isExternal>
                    <IconButton _focus={{ outline: "none" }} variant="ghost" aria-label="Github Repo button" icon={<SiGithub />} />
                </Link>
                <IconButton _focus={{ outline: "none" }} variant="ghost" aria-label="Toggle light/dark mode button" onClick={toggleColorMode} icon={isLight ? <MoonIcon /> : <SunIcon />} />
            </Center>
        </Box>
    );
}
