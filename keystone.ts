import { config, list } from "@keystone-next/keystone/schema";
import {
    text,
    select,
    timestamp,
    image,
    relationship,
} from "@keystone-next/fields";

const Post = list({
    fields: {
        title: text({ isRequired: true }),
        slug: text(),
        content: text(),
    },
});

const Experience = list({
    fields: {
        title: text({ isRequired: true }),
        employmentType: select({
            options: [
                { label: "Full-time", value: "Full-time" },
                { label: "Part-time", value: "Part-time" },
                { label: "Freelance", value: "Freelance" },
                { label: "Personal Project", value: "Personal Project" },
                { label: "School Project", value: "School Project" },
            ],
        }),
        location: text({ isRequired: true, defaultValue: "Vietnam" }),
        startDate: timestamp({ isRequired: true }),
        endDate: timestamp({ isRequired: true }),
        description: text({ ui: { displayMode: "textarea" } }),
        image: image({ isRequired: true }),
        skills: relationship({ ref: "Skill", many: true }),
    },
});

const colorsArray = [
    "Black",
    "White",
    "Gray",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Teal",
    "Blue",
    "Cyan",
    "Purple",
    "Pink",
];

const Skill = list({
    fields: {
        title: text({ isRequired: true }),
        colorScheme: select({
            options: colorsArray.map((color) => ({
                label: color,
                value: color.toLocaleLowerCase(),
            })),
        }),
    },
});

export default config({
    db: { provider: "sqlite", url: "file:./app.db" },
    experimental: {
        generateNextGraphqlAPI: true,
        generateNodeAPI: true,
    },
    lists: { Post, Experience, Skill },
    images: {
        upload: "local",
        local: {
            storagePath: "public/images",
            baseUrl: "/images",
        },
    },
});
