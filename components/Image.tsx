import React from "react";
import { chakra } from "@chakra-ui/system";
import NextImage from "next/image";

const Image = chakra(NextImage, {
    baseStyle: { maxH: 220, maxW: 220 },
    shouldForwardProp: (prop) =>
        ["layout", "width", "height", "src", "alt", "placeholder"].includes(
            prop
        ),
});

export default Image;
