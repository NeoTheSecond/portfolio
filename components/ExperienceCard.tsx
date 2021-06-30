import React from "react";
import { Badge, Box, Heading, Square } from "@chakra-ui/layout";
import {
    Text,
    Collapse,
    Button,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    SlideFade,
    Flex,
    Stack,
    Spacer,
    Icon,
    IconProps,
    BoxProps
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import NextImage from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { BsChevronDown } from 'react-icons/bs'
import { motion } from 'framer-motion';


type jobProps = {
    title: string;
    id: number;
    employmentType: string;
    description: string;
    startDate: string;
    endDate: string;
    image: {
        src: string;
    };
    location: string;
    skills: {
        title: string;
        colorScheme: string;
    }[];
};

export const MotionBox = motion<BoxProps>(Box);

const chevronVariants = {
    rotate: { rotate: -180 },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    initial: { rotate: 0 }
};

export default function ExperienceCard({
    title,
    id,
    employmentType,
    description,
    startDate,
    endDate,
    image,
    location,
    skills,
}: jobProps) {
    let startDateProp = new Date(startDate);
    let endDateProp = new Date(endDate);
    let startDateStr =
        startDateProp.getMonth() + 1 + "/" + startDateProp.getFullYear();
    let endDateStr =
        endDateProp.getMonth() + 1 + "/" + endDateProp.getFullYear();

    const [show, setShow] = React.useState(false)


    const handleToggle = () => setShow(!show)
    return (
        <Box onClick={handleToggle} mb={5} bg={useColorModeValue("gray.100", "gray.700")} p={2} borderWidth="1px" borderRadius="lg">
            <Box d="flex" flexDirection="row">
                <Square h={[55, 70]} w={[55, 70]}>
                    <NextImage
                        src={image.src}
                        height={70}
                        width={70}
                        alt={`${title} - ${location}`}
                    />
                </Square>

                <Box ml={2} mt={-1}>
                    <Flex><Heading fontSize="xl" color="green.500">
                        {title}{" "}
                    </Heading><Spacer /><MotionBox variants={chevronVariants} animate={show ? 'rotate' : 'stop'} h="100%" ><ChevronDownIcon /></MotionBox></Flex>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        {location} - {employmentType} - {startDateStr} -{" "}
                        {endDateStr}
                    </Text>
                    <Box d={["none", "block"]}>
                        <Collapse startingHeight={50} in={show}>
                            <Text>{description}</Text>
                        </Collapse>
                        {/* <Text noOfLines={2}>{description}</Text> */}
                        {skills.map((skill) => (
                            <Badge
                                _hover={{ color: `${skill.colorScheme.toLowerCase()}.300` }}
                                variant="outline"
                                key={skill.title}
                                mr={1}
                            >
                                {skill.title}
                            </Badge>
                        ))}
                    </Box>

                </Box>
            </Box>
            <Box d={["block", "none"]}>
                {/* <Text noOfLines={2}>{description}</Text> */}
                <Collapse startingHeight={45} in={show}>
                    <Text>{description}</Text>
                </Collapse>
                {skills.map((skill) => (
                    <Badge
                        _hover={{ color: `${skill.colorScheme.toLowerCase()}.300` }}
                        variant="outline"
                        key={skill.title}
                        mr={1}
                    >
                        {skill.title}
                    </Badge>
                ))}
            </Box>
        </Box>
    );
}
