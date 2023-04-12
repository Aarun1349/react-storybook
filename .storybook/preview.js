import React from "react";
import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ThemeProvider, theme, Box, ChakraProvider } from "@chakra-ui/react";
import { CSSReset } from "@chakra-ui/counter";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { witha11y } from "@storybook/addon-a11y";
import { INITIAL_VIEWPORTS} from "@storybook/addon-viewport"

// Global Decorators
addDecorator((story, context) => (
  <ChakraProvider theme={theme}>
    {/* <CSSReset> */}
    <Box m="4">{story()}</Box>
    {/* <Center>{story()}</Center> */}
    {/* </CSSReset> */}
  </ChakraProvider>
));
addDecorator(withKnobs)
addDecorator(witha11y)

addParameters({
  viewport:{
    viewport:INITIAL_VIEWPORTS
  }
})
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kid
  //       ? 0
  //       : a[1].id.localCompare(b[1].id, undefined, { numeric: true }),
  // },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
