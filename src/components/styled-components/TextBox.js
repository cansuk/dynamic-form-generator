import styledComponents from "styled-components";

export const TextBox = styledComponents.input`
display: block;

padding: 8px 13px;
font-family: inherit;
font-size: 14px;
letter-spacing:inherit;
color: ${props => props.color};
background-color:${props => props.backcolor};
border: 0;
border-radius:14px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
z-index:1;


&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
}
`;