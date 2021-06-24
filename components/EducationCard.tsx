import React from "react";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Image from "./Image";

export default function EducationCard(props: any) {
    return (
        <Box h={70} d="flex" flexDirection="row">
            <Image
                src={props.pic}
                width={70}
                height={70}
                alt="Phan Chau Trinh High School - Da Nang city, Vietnam"
                placeholder="blur"
            />

            <Box ml={2}>
                <Heading fontSize="xl" color="green.500">
                    {props.school}
                </Heading>
                <Text color={useColorModeValue("gray.500", "gray.400")}>
                    {props.description}
                </Text>
                <Text color={useColorModeValue("gray.500", "gray.400")}>
                    Vietnam
                </Text>
            </Box>
        </Box>
    );
}
