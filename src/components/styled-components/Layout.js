import styledComponents from 'styled-components'

export const Row = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px 4px;
  justify-content:${props => props.justifyContent ? props.justifyContent : "space-between"};
`;
