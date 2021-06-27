import React from "react";
import { Badge, Box, Heading, Square } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import NextImage from "next/image";
import { useColorModeValue } from "@chakra-ui/color-mode";

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
    return (
        <Box mb={5} bg={useColorModeValue("gray.100", "gray.700")} p={2} borderWidth="1px" borderRadius="lg">
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
                    <Heading fontSize="xl" color="green.500">
                        {title}{" "}
                    </Heading>
                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                        {location} - {employmentType} - {startDateStr} -{" "}
                        {endDateStr}
                    </Text>
                    <Box d={["none", "block"]}>
                        <Text noOfLines={2}>{description}</Text>
                        {skills.map((skill) => (
                            <Badge
                                colorScheme={skill.colorScheme}
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
                <Text noOfLines={2}>{description}</Text>
                {skills.map((skill) => (
                    <Badge
                        colorScheme={skill.colorScheme}
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
