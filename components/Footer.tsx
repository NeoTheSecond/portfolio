import React from "react";
import { Flex, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import {
    AiOutlineMail,
    AiOutlineLinkedin,
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineHome,
} from "react-icons/ai";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useToast } from "@chakra-ui/react";

export default function Footer() {
    const toast = useToast();
    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
        >
            <Text color="red.200">© 2021 Man Pham</Text>
            <Text color="yellow.200">Created with Next.js and Chakra UI</Text>
            <div>
                <Icon
                    as={AiOutlineLinkedin}
                    w={[6, 10, 10, 10]}
                    h={[6, 10, 10, 10]}
                    _hover={{
                        cursor: "pointer",
                        color: "blue.200",
                    }}
                />
                <Icon
                    as={AiOutlineFacebook}
                    w={[6, 10, 10, 10]}
                    h={[6, 10, 10, 10]}
                    _hover={{
                        cursor: "pointer",
                        color: "blue.400",
                    }}
                />
                <Icon
                    as={AiOutlineInstagram}
                    w={[6, 10, 10, 10]}
                    h={[6, 10, 10, 10]}
                    _hover={{
                        cursor: "pointer",
                        color: "red.400",
                    }}
                />
                <Icon
                    as={AiOutlineMail}
                    w={[6, 10, 10, 10]}
                    h={[6, 10, 10, 10]}
                    _hover={{
                        cursor: "pointer",
                        color: "yellow.200",
                    }}
                    onClick={() => {
                        navigator.clipboard.writeText("quangman1404@gmail.com");
                        toast({
                            title: "Coppied email to clipboard.",
                            description: "quangman1404@gmail.com",
                            status: "success",
                            duration: 2000,
                            isClosable: true,
                        });
                    }}
                />
            </div>
        </Flex>
    );
}
