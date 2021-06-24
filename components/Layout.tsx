import Header from "./Header";
import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Center>
                <Box w="100%" maxW="container.md">
                    <Header />
                    {children}
                    <Footer />
                </Box>
            </Center>
        </div>
    );
};

export default Layout;
