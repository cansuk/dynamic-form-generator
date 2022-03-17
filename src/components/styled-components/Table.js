import styledComponents from "styled-components";

export const Table = styledComponents.table`
width: 100%;
tbody tr:nth-child(odd) {
background: #82e2a8
};

tbody tr:nth-child(even) {
background: #44d87e
};

border:1 px solid gray;

`;