import { createGlobalStyle } from 'styled-components'

export const theme = {
  colors: {
    white: '#fff',
    invalid: '#800000',
    primary: '#576f72',
    secondary: '#f0ebe3',
    accent: '#fba1a1',
    dark: '#2d2d2d',
  },
  media: {
    mobile: '(max-width: 576px)',
  },
  gutter: [
    { xs: 8, sm: 16, md: 24, lg: 40 },
    { xs: 8, sm: 16, md: 24, lg: 40 },
  ],
}

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;

    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    color: #fff;
    background-image: url('https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
    background-size: cover;
    background-position: center center;
  }

  a {
    text-decoration: none;

    &,
    &:hover {
      color: inherit;
    }
  }

  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  pre {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`
