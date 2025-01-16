import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: 'q0vgokty',
    dataset: 'production',
    title: 'Evelina\'s Website',
    apiVersion: "2025-01-16",
    // the path for where our sanity studio lives
    basePath: '/studio',
    plugins: [ structureTool() ],
    schema: { types: schemas }
})

export default config;