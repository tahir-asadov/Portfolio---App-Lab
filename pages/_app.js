import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  background-color: #fcfdfd;
  font-size: 18px;
  line-height: 28px;
  color: #616368;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  a {
    font-size: 16px;
    line-height: 44px;
    color: #2500f9;
    text-decoration: none;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    color: #616368;
    font-weight: 400;
    margin-top: 0;
  }
  img {
    max-width: 100%;
  }
}
`;
 
const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp
