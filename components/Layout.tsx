import Header from "./Header";
import React from "react";
import { Box, Center } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Center>
                <Box w="100%" maxW="container.lg">
                    <Header />
                    {children}
                </Box>
            </Center>
        </div>
    );
};

export default Layout;
