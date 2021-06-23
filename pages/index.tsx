import { InferGetStaticPropsType } from "next";
import NextLink from "next/link";
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { lists } from ".keystone/api";
import { Box, Container, Flex, Spacer } from "@chakra-ui/layout";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import profilePic from "../public/potrait.jpg";
import {
    Circle,
    Square,
    Center,
    Heading,
    Text,
    chakra,
    Link,
    Divider,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const Image = chakra(NextImage, {
    baseStyle: { maxH: 220, maxW: 220 },
    shouldForwardProp: (prop) =>
        ["layout", "width", "height", "src", "alt", "placeholder"].includes(
            prop
        ),
});

export default function Home({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLight = colorMode === "light";
    const profilePicSize = "220px";

    return (
        <Box borderWidth={2} p={5} borderColor="purple.400">
            <Flex
                direction={["column", "row", "row", "row"]}
                alignItems={[
                    "center",
                    "flex-start",
                    "flex-start",
                    "flex-start",
                ]}
            >
                <Box d="flex" flexDirection="column" alignItems="center">
                    <Circle size={profilePicSize}>
                        <Image
                            borderRadius={110}
                            src={profilePic}
                            width={220}
                            height={220}
                            alt="A potrait of Man Pham"
                            placeholder="empty"
                        />
                    </Circle>
                    <Heading mt={1} size="xl">
                        Mẫn Phạm
                    </Heading>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        Fullstack Web Developer
                    </Text>
                </Box>
                <Container>
                    <Heading size="lg" color="red.400">
                        Hello! 👋
                    </Heading>
                    <Text
                        align="justify"
                        fontSize={["md", "xl", "xl", "xl"]}
                        fontWeight="semibold"
                    >
                        My name is{" "}
                        <Link
                            color={useColorModeValue("teal.600", "teal.200")}
                            _hover={{
                                cursor: "default",
                                color: useColorModeValue(
                                    "yellow.500",
                                    "yellow.200"
                                ),
                            }}
                        >
                            Mẫn
                        </Link>
                        , a Fullstack Web Developer with over 5 years of
                        experience. I'm also an undergraduate enrolled in
                        Bachelor of Information Technology at RMIT University in
                        Vietnam.
                        <br />
                        <br />
                        Aside from the web, I have dabbled in many other tech
                        fields like Machine Learning, Penetration Testing, Video
                        Games, etc. The more about my work can be found in{" "}
                        <NextLink href="/experience" passHref>
                            <Link
                                color="red.400"
                                _hover={{
                                    color: "yellow.200",
                                    textDecoration: "underline",
                                }}
                            >
                                experience
                            </Link>
                        </NextLink>
                        .
                    </Text>
                </Container>
            </Flex>

            <Divider mt={3} mb={3} />

            <Heading color={useColorModeValue("orange.500", "orange.300")}>
                Contact Info <InfoIcon mb={1} fontSize={"xl"} />
            </Heading>
            {/* <Divider /> */}

            <Button
                mt={10}
                onClick={toggleColorMode}
                colorScheme="cyan"
                variant={isLight ? "solid" : "outline"}
            >
                Toggle {isLight ? "Dark" : "Light"}
            </Button>
        </Box>
    );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
    const posts = await lists.Post.findMany({ query: "id title slug" });
    return { props: { posts } };
}
