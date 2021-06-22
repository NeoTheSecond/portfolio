import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { lists } from ".keystone/api";
import { Box, Container, Flex, Spacer } from "@chakra-ui/layout";
import Image from "next/image";
import profilePic from "../public/potrait.jpg";
import { Square, Heading, Text } from "@chakra-ui/react";

export default function Home({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLight = colorMode === "light";
    const profilePicSize = "220px";

    return (
        <Box borderWidth={2} p={5} borderColor="purple.500">
            <Flex direction="row">
                <Square size={profilePicSize}>
                    <Image
                        src={profilePic}
                        alt="A potrait of Man Pham"
                        width={profilePicSize}
                        height={profilePicSize}
                    />
                </Square>
                <Container maxW="container.xs">
                    <Heading>Hello! 👋</Heading>
                    <Text align="justify" fontWeight="normal">
                        There are many benefits to a joint design and
                        development system. Not only does it bring benefits to
                        the design team, but it also brings benefits to
                        engineering teams. It makes sure that our experiences
                        have a consistent look and feel, not just in our design
                        specs, but in production
                    </Text>
                </Container>
            </Flex>

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
