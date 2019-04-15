### CSS grid with Styled Components - An Example

#### INTRODUCTION

One of the best tutorials to learn CSS Grid is [Wes Bos' CSS Grid course](https://cssgrid.io/). I wanted to experiment one of [his code samples ](https://github.com/wesbos/css-grid/tree/master/24%20-%20Responisve%20Website) using [Styled Components](https://www.styled-components.com/). Here I am with his code converted for styled components. For live code editing, please checkout [this codesandbox](https://codesandbox.io/s/github/elangobharathi/wesbos-css-grid-styled-components).

#### HOW TO RUN

Please clone this repo and run the following commands.

`yarn`

`yarn start`

#### HIGHLIGHTS

Some of the topics in styled components that are covered in this example:

- createGlobalStyle

  *Please refer [/src/GlobalStyles.js](https://github.com/elangobharathi/wesbos-css-grid-styled-components/blob/master/src/GlobalStyles.js#L8)*

- ThemeProvider

  *Please refer [/src/GlobalStyles.js](https://github.com/elangobharathi/wesbos-css-grid-styled-components/blob/master/src/GlobalStyles.js#L3) and [/src/App.js](https://github.com/elangobharathi/wesbos-css-grid-styled-components/blob/master/src/App.js#L11)*

- css helper function

  ```javascript
  ${props =>
      props.open
        ? css`
            max-height: 500px;
            transform: rotateX(0);
          `
        : css`
            max-height: 0;
            transform: rotateX(90deg);
          `}
  ```
    *Please refer [/src/components/MenuList.js](https://github.com/elangobharathi/wesbos-css-grid-styled-components/blob/master/src/components/MenuList.js#L30)*
