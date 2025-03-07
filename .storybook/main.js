/** @type { import('@storybook/react').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel"
  ],

  framework: {
    name: "@storybook/nextjs", // Use @storybook/react for a default React project
    options: {},
  },

  staticDirs: ["../public"],

  webpackFinal: (config) => {
    // Add or modify Webpack configurations if needed
    config.module.rules.push({
      test: /\.js$/,
      loader: "esbuild-loader",
      options: {
        loader: "jsx", // Handle JSX
        target: "es2015",
      },
    });
    return config;
  },

  docs: {
    autodocs: true
  }
};

export default config;