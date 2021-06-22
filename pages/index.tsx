import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { lists } from ".keystone/api";
import { Box } from "@chakra-ui/layout";

export default function Home({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { colorMode, toggleColorMode } = useColorMode();
    const isLight = colorMode === "light";

    return (
        <Box>
            <Button
                onClick={toggleColorMode}
                colorScheme="cyan"
                variant={isLight ? "solid" : "outline"}
            >
                Toggle {isLight ? "Dark" : "Light"}
            </Button>
        </Box>
    );
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
    const posts = await lists.Post.findMany({ query: "id title slug" });
    return { props: { posts } };
}
