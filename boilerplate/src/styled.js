import styled from 'styled-components';

export const  Container = styled.div`
  border: solid 2px black;
  padding: 10px;
  background-color: ${props=>props.theme.mainBg}
`

export const defaultTheme = {
  mainBg: '#0f0', //in some cases: mainTheme.colors.brand
}
