import { createGlobalStyle } from "styled-components";

export default createGlobalStyle<any>`
  * {
    box-sizing: border-box;
  }
  
  html,
  #root {
    height: 100%;
    margin: 0;
  }
  
  body {
    height: 100%;
    margin: 0;
  }
  .App {
    height: 100%;
    
  }
`;
