import React from "react";
import { Badge, Text, Box, Heading, Square } from "@chakra-ui/layout";
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
        <Box h={70} d="flex" flexDirection="row" mb={[32, 20, 10, 10]}>
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
                </Heading>
                <Text color={useColorModeValue("gray.500", "gray.400")}>
                    {location} - {employmentType} - {startDateStr} -{" "}
                    {endDateStr}
                </Text>
                <Text>{description}</Text>
            </Box>
        </Box>
    );
}
