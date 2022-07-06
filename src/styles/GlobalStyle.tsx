import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
font-size: 62.5%;
 }



* {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
 }
 html,
 body,
 fieldset,
 p,
 h1,
 h2,
 h3,
 ul,
 li {

  margin: 0;

  padding: 0;

  border: 0;

 }



 ul {

  list-style: none;

 }

 a {

  color: inherit;

  text-decoration: none;

 }



 img {

  width: inherit;

 }



 button {

 


  color: inherit;

  font-weight: inherit;

  padding: 0;

  border: none;

  background-color: unset;

 }


 button:hover {

  cursor: pointer;

 }


 input {

  border: none;

  color: inherit;

  font-size: inherit;

  font-weight: inherit;

  font-family: inherit;

 }

`;
