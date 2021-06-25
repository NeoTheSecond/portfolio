import { Box, Heading } from "@chakra-ui/layout";
import { Center, useColorModeValue } from "@chakra-ui/react";

export default function Header() {
    const bg = useColorModeValue("green.300", "green.600");
    return (
        <Box bg={bg} h="50px" mt={8} mb={8}>
            <Center>
                <Heading>Navbar coming soon...</Heading>
            </Center>
        </Box>
    );
}
