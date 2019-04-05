import { configure } from "@storybook/react";

// import JSXAddon from "storybook-addon-jsx";
// import { withKnobs, select } from "@storybook/addon-knobs/react";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  // require("./welcomeStory");
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
