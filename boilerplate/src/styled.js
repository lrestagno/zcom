import styled from 'styled-components';
import defaultTheme from './default-theme.styled';

export const Container = styled.div`
  border: solid 2px black;
  padding: 10px;
  background-color: ${props=>props.theme.mainBg}
`

export { defaultTheme };
