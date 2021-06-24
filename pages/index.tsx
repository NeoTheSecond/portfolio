import { InferGetStaticPropsType } from "next";
import NextLink from "next/link";
import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { lists } from ".keystone/api";
import { Box, Container, Flex, Spacer } from "@chakra-ui/layout";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import profilePic from "../public/potrait.jpg";
import pctPic from "../public/logo-pct.jpg";
import rmitPic from "../public/rmit-logo.png";
import mocPic from "../public/logo-mochouse.png";
import {
    Circle,
    Heading,
    Text,
    chakra,
    Link,
    Divider,
    Icon,
    List,
    ListItem,
    ListIcon,
    useToast,
    Square,
    Badge,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import {
    AiOutlineMail,
    AiOutlineLinkedin,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineHome,
} from "react-icons/ai";

import { MdSchool, MdWork } from "react-icons/md";
import { BsBriefcaseFill } from "react-icons/bs";

const mochouse = {
    skills: [
        { name: "react.js", color: "blue" },
        { name: "html", color: "red" },
        { name: "css", color: "blue" },
        { name: "keystone.js", color: "yellow" },
    ],
};

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
    const toast = useToast();

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
            {/* <faGithub/> */}
            <List spacing={3}>
                <ListItem fontSize={20}>
                    <ListIcon as={AiOutlineHome} color="green.500" />
                    Based in Vietnam
                </ListItem>
                <ListItem fontSize={20}>
                    <ListIcon as={AiOutlineMail} color="green.500" />
                    <Link
                        _hover={{
                            cursor: "pointer",
                            color: useColorModeValue(
                                "yellow.500",
                                "yellow.200"
                            ),
                            textDecoration: "underline",
                        }}
                        onClick={() => {
                            navigator.clipboard.writeText(
                                "quangman1404@gmail.com"
                            );
                            toast({
                                title: "Coppied email to clipboard.",
                                description: "quangman1404@gmail.com",
                                status: "success",
                                duration: 2000,
                                isClosable: true,
                            });
                        }}
                    >
                        quangman1404@gmail.com
                    </Link>
                </ListItem>

                <ListItem fontSize={20}>
                    <ListIcon as={AiOutlineFacebook} color="green.500" />
                    <Link
                        href="https://www.facebook.com/man.phamquang.71"
                        isExternal
                        _hover={{
                            cursor: "pointer",
                            color: useColorModeValue("blue.400", "blue.400"),
                            textDecoration: "underline",
                        }}
                    >
                        Facebook profile
                    </Link>
                </ListItem>
                <ListItem fontSize={20}>
                    <ListIcon as={AiOutlineInstagram} color="green.500" />
                    <Link
                        href="https://www.instagram.com/manphamquang/"
                        isExternal
                        _hover={{
                            cursor: "pointer",
                            color: useColorModeValue("red.400", "red.400"),
                            textDecoration: "underline",
                        }}
                    >
                        Instagram profile
                    </Link>
                </ListItem>
                <ListItem fontSize={20}>
                    <ListIcon as={AiOutlineLinkedin} color="green.500" />
                    <Link
                        href="https://www.linkedin.com/in/m%E1%BA%ABn-ph%E1%BA%A1m-834428b5/"
                        isExternal
                        _hover={{
                            cursor: "pointer",
                            color: useColorModeValue("blue.300", "blue.300"),
                            textDecoration: "underline",
                        }}
                    >
                        Linkedin profile
                    </Link>
                </ListItem>
            </List>

            <Divider mt={3} mb={3} />

            <Heading
                color={useColorModeValue("orange.500", "orange.300")}
                mb={2}
            >
                Education <Icon as={MdSchool} mb={1} fontSize={"3xl"} />
            </Heading>

            <Box h={70} d="flex" flexDirection="row" mb={[8, 4, 4, 4]}>
                <Square h={[55, 70]} w={[55, 70]}>
                    <Image
                        src={pctPic}
                        h={[55, 70]}
                        w={[55, 70]}
                        alt="Phan Chau Trinh High School - Da Nang city, Vietnam"
                        placeholder="blur"
                    />
                </Square>

                <Box ml={2} mt={-1}>
                    <Heading fontSize="xl" color="green.500">
                        Phan Chau Trinh Highschool
                    </Heading>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        Graduated in 2019
                    </Text>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        Vietnam
                    </Text>
                </Box>
            </Box>

            <Box h={70} d="flex" flexDirection="row">
                <Square h={[55, 70]} w={[55, 70]}>
                    <Image
                        src={rmitPic}
                        h={[55, 70]}
                        w={[55, 70]}
                        alt="RMIT - Ho Chi Minh City, Vietnam"
                        placeholder="blur"
                    />
                </Square>

                <Box ml={2} mt={-1}>
                    <Heading fontSize="xl" color="green.500">
                        Royal Melbourne Institute of Technology
                    </Heading>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        Enrolled in 2019
                    </Text>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        Vietnam
                    </Text>
                </Box>
            </Box>

            <Divider mt={[10, 5]} mb={3} />

            <Heading
                color={useColorModeValue("orange.500", "orange.300")}
                mb={2}
            >
                Experience <Icon as={BsBriefcaseFill} mb={1} fontSize={"3xl"} />
            </Heading>

            <Box h={70} d="flex" flexDirection="row" mb={[8, 4, 4, 4]}>
                <Square h={[55, 70]} w={[55, 70]}>
                    <Image
                        src={mocPic}
                        h={[55, 70]}
                        w={[55, 70]}
                        alt="Mochouse DN Homestay - Da Nang city, Vietnam"
                        placeholder="blur"
                    />
                </Square>

                <Box ml={2} mt={-1}>
                    <Heading fontSize="xl" color="green.500">
                        Mochousedn{" "}
                        {mochouse.skills.map((skill) => (
                            <>
                                <Badge
                                    colorScheme={skill.color}
                                    variant="subtle"
                                >
                                    {skill.name}
                                </Badge>{" "}
                            </>
                        ))}
                    </Heading>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        2019-2020
                    </Text>
                    <Text>
                        Fullstack Developer, developed Web based bookings and
                        management system for a Homestay Business in Da Nang,
                        Vietnam.
                    </Text>
                </Box>
            </Box>

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
