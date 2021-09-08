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
    HeadingProps,
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
    HStack,
    Accordion,
    AccordionItem
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
import { motion } from 'framer-motion';

const ANIMATION_DURATION = 0.5;

const Image = chakra(NextImage, {
    baseStyle: { maxH: 220, maxW: 220 },
    shouldForwardProp: (prop) =>
        ["layout", "width", "height", "src", "alt", "placeholder"].includes(
            prop
        ),
});

export const MotionHeading = motion<HeadingProps>(Heading);

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
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>

            </Head>
            <Box borderWidth={2} p={5} borderColor={useColorModeValue("gray.300", "purple.400")}>
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
                    <Container ml={[0, 3]} p={0}>
                        <List spacing={3}>
                            <ListItem fontSize={20}>
                                <ListIcon as={AiOutlineHome} color={useColorModeValue("gray.500", "red.400")} />
                                Based in Vietnam
                            </ListItem>
                            <div>
                                <ListItem fontSize={20} role="group" d="inline">
                                    <ListIcon as={AiOutlineMail} _groupHover={{
                                        color: useColorModeValue(
                                            "yellow.500",
                                            "yellow.200"
                                        ),
                                    }} color={useColorModeValue("gray.500", "red.400")} />
                                    <Link
                                        _groupHover={{
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
                            </div>

                            <div>
                                <ListItem fontSize={20} role="group" d="inline">
                                    <ListIcon
                                        as={AiOutlineFacebook}
                                        color={useColorModeValue("gray.500", "red.400")}
                                        _groupHover={{
                                            color: useColorModeValue(
                                                "blue.400",
                                                "blue.400"
                                            ),
                                        }}
                                    />
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
                            </div>
                            <div>
                                <ListItem fontSize={20} role="group" d="inline">
                                    <ListIcon
                                        as={AiOutlineInstagram}
                                        color={useColorModeValue("gray.500", "red.400")}
                                        _groupHover={{
                                            color: useColorModeValue(
                                                "red.400",
                                                "red.400"
                                            ),
                                        }}
                                    />
                                    <Link
                                        href="https://www.instagram.com/manphamquang/"
                                        isExternal
                                        _hover={{
                                            cursor: "pointer",
                                            color: useColorModeValue(
                                                "red.400",
                                                "red.400"
                                            ),
                                            textDecoration: "underline",
                                        }}
                                    >
                                        Instagram profile
                                    </Link>
                                </ListItem>
                            </div>
                            <div>
                                <ListItem fontSize={20} role="group" d="inline">
                                    <ListIcon
                                        as={AiOutlineLinkedin}
                                        color={useColorModeValue("gray.500", "red.400")}
                                        _groupHover={{
                                            color: useColorModeValue(
                                                "blue.300",
                                                "blue.300"
                                            ),
                                        }}
                                    />
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
                            </div>
                        </List>
                    </Container>

                </Flex>

                <Divider mt={3} mb={3} />
                {/* <Container> */}
                <Heading size="lg" color={useColorModeValue("gray.700", "red.400")} d="inline"
                >
                    <motion.p style={{ display: "inline-block" }} animate={{
                        rotate: 15
                    }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: ANIMATION_DURATION

                        }} >👋🏻</motion.p>
                    Hello!
                </Heading>

                <Text
                    align="justify"
                    fontSize={["md", "xl", "xl", "xl"]}
                    fontWeight="normal"
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
                    , a Fullstack Web Developer with over 5 years of experience.
                    I am also an undergraduate enrolled in Bachelor of
                    Information Technology at RMIT University in Vietnam.
                    <br />
                    <br />
                    Aside from the web, I have dabbled in many other tech fields
                    like Machine Learning, Penetration Testing, Video Games,
                    etc. The more about my work can be found in{" "}
                    <NextLink href="/experience" passHref>
                        <Link
                            color={useColorModeValue("blue.400", "red.400")}
                            _hover={{
                                color: useColorModeValue("blue.600", "yellow.200"),
                                textDecoration: "underline",
                            }}
                        >
                            experience
                        </Link>
                    </NextLink>
                    .
                </Text>



                <Divider mt={3} mb={3} />

                <Heading
                    color={useColorModeValue("gray.700", "red.400")}
                    mb={5}
                >
                    Education <Icon as={MdSchool} mb={1} fontSize={"3xl"} />
                </Heading>

                {education.map((school, i) => (
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
                    color={useColorModeValue("gray.700", "red.400")}
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
