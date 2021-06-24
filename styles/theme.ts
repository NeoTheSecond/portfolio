import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

const styles = {
    global: (props: any) => ({
        body: {
            // color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("white", "gray.800")(props),
        },
    }),
};

// 3. extend the theme
const theme = extendTheme({
    config,
    styles,
});

export default theme;
