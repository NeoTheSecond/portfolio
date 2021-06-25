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
import ykhoaPic from "../public/logo-3dykhoa.png";
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
    useBreakpointValue,
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
import Head from "next/head";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";

const mochouse = {
    skills: [
        { name: "react.js", color: "blue" },
        { name: "html", color: "red" },
        { name: "css", color: "blue" },
        { name: "keystone.js (version 5)", color: "yellow" },
    ],
};

const vay24h = {
    skills: [
        { name: "Html", color: "blue" },
        { name: "CSS", color: "blue" },
        { name: "DevOps", color: "blue" },
        { name: "Keystone.js (version 4)", color: "blue" },
    ],
};

const ykhoa = {
    skills: [
        { name: "Html", color: "red" },
        { name: "CSS", color: "blue" },
        { name: "DevOps", color: "yellow" },
        { name: "Keystone.js (version 4)", color: "green" },
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
    experience,
    education,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLight = colorMode === "light";
    const profilePicSize = "220px";
    const toast = useToast();
    const imageSize = useBreakpointValue([55, 70]);

    return (
        <>
            <Head>
                <title>{"Mẫn Phạm's Portfolio"}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mẫn Phạm's Portfolio" />
                <meta
                    property="og:description"
                    content="My name is Mẫn, a Fullstack Web Developer with over 5 years of experience. I am also an undergraduate enrolled in Bachelor of Information Technology at RMIT University in Vietnam."
                />
                <meta property="og:site_name" content="Mẫn Phạm's Portfolio" />
                <meta
                    property="og:image"
                    content="https://manphamquang.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fpotrait.4de7d651975530c2f1e97f8a9a905d52.jpg&w=256&q=75"
                />
                <meta
                    property="og:url"
                    content="https://manphamquang.vercel.app"
                />
                <meta
                    name="description"
                    content="My name is Mẫn, a Fullstack Web Developer with over 5 years of experience. I am also an undergraduate enrolled in Bachelor of Information Technology at RMIT University in Vietnam."
                />
            </Head>
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
                                color={useColorModeValue(
                                    "teal.600",
                                    "teal.200"
                                )}
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
                            experience. I am also an undergraduate enrolled in
                            Bachelor of Information Technology at RMIT
                            University in Vietnam.
                            <br />
                            <br />
                            Aside from the web, I have dabbled in many other
                            tech fields like Machine Learning, Penetration
                            Testing, Video Games, etc. The more about my work
                            can be found in{" "}
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

                <Heading
                    mb={2}
                    color={useColorModeValue("orange.500", "red.400")}
                >
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
                                color: useColorModeValue(
                                    "blue.400",
                                    "blue.400"
                                ),
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
                                color: useColorModeValue(
                                    "blue.300",
                                    "blue.300"
                                ),
                                textDecoration: "underline",
                            }}
                        >
                            Linkedin profile
                        </Link>
                    </ListItem>
                </List>

                <Divider mt={3} mb={3} />

                <Heading
                    color={useColorModeValue("orange.500", "red.400")}
                    mb={5}
                >
                    Education <Icon as={MdSchool} mb={1} fontSize={"3xl"} />
                </Heading>

                {education.map((school) => (
                    <EducationCard
                        id={school.id}
                        key={school.id}
                        title={school.title}
                        enrollmentYear={school.enrollmentYear}
                        graduationYear={school.graduationYear}
                        image={school.image}
                        location={school.location}
                    />
                ))}

                <Divider mt={[10, 5]} mb={3} />

                <Heading
                    color={useColorModeValue("orange.500", "red.400")}
                    mb={5}
                >
                    Experience{" "}
                    <Icon as={BsBriefcaseFill} mb={1} fontSize={"3xl"} />
                </Heading>

                {experience.map((job) => (
                    <ExperienceCard
                        key={job.id}
                        title={job.title}
                        id={job.id}
                        employmentType={job.employmentType}
                        description={job.description}
                        startDate={job.startDate}
                        endDate={job.endDate}
                        image={job.image}
                        location={job.location}
                        skills={job.skills}
                    />
                ))}

                <Button
                    onClick={toggleColorMode}
                    colorScheme="cyan"
                    variant={isLight ? "solid" : "outline"}
                >
                    Toggle {isLight ? "Dark" : "Light"}
                </Button>
            </Box>
        </>
    );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
    const posts = await lists.Post.findMany({ query: "id title slug" });
    const experience = await lists.Experience.findMany({
        query: "id title employmentType location startDate endDate description image{ src } skills{ title, colorScheme }",
        orderBy: [{ startDate: "desc" }],
    });
    const education = await lists.Education.findMany({
        query: "id title enrollmentYear graduationYear location image{ src }",
    });
    return { props: { posts, experience, education } };
}
