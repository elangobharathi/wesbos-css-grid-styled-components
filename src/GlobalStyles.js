import { createGlobalStyle } from "styled-components";

export const theme = {
  backgroundColor: "#ffc600",
  fontColor: "#272727"
};

export const GlobalStyles = createGlobalStyle`
    /*
    Oh Hello!

    These are some base styles so that our tutorial looks good.

    Let's go through the important bits real quick
  */
  html {
    /* border-box box model allows us to add padding and border to our elements without increasing their size */
    box-sizing: border-box;
    /* A system font stack so things load nice and quick! */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 900;
    font-size: 15px;
    color: #272727;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  }

  /*
    WAT IS THIS?!
    We inherit box-sizing: border-box; from our <html> selector
    Apparently this is a bit better than applying box-sizing: border-box; directly to the * selector
  */
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-image: url("./images/topography.svg"),
      linear-gradient(110deg, #f93d66, #6d47d9);
    background-size: 340px, auto;
    min-height: calc(100vh - 100px);
    margin: 50px;
    /* background: white; */
    background-attachment: fixed;
    letter-spacing: -1px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 5px 0;
  }

  button {
    background: #ffc600;
    border: 0;
    padding: 10px 20px;
  }

  img {
    max-width: 100%;
  }
`;
