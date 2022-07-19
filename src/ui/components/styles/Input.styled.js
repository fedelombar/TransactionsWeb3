import styled from "styled-components";


export const Input = styled.input`
padding: 1em;
margin: 0.5em;
color: ${props => props.inputColor || "palevioletred"};
background: papayawhip;
border: none;
border-radius: 12px;
width: 50%;
`;