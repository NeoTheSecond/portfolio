import React from "react";
import { Box, Heading, Text, Square } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "./Image";
import NextImage from "next/image";

interface educationProp {
    id: number;
    title: string;
    enrollmentYear: string;
    graduationYear: string;
    location: string;
    image: {
        src: string;
    };
}

export default function EducationCard({
    title,
    enrollmentYear,
    graduationYear,
    image,
    location,
}: educationProp) {
    return (
        <Box h={70} d="flex" flexDirection="row" mb={[8, 4, 4, 4]}>
            <Square h={[55, 70]} w={[55, 70]}>
                <NextImage
                    src={image.src}
                    width={70}
                    height={70}
                    alt={`${title} - ${location}`}
                />
            </Square>

            <Box ml={2} mt={-1}>
                <Heading fontSize="xl" color="green.500">
                    {title}
                </Heading>
                <Text color={useColorModeValue("gray.500", "gray.400")}>
                    {enrollmentYear}{" "}
                    {graduationYear ? `- ${graduationYear}` : ""}
                </Text>
                <Text color={useColorModeValue("gray.500", "gray.400")}>
                    {location}
                </Text>
            </Box>
        </Box>
    );
}
