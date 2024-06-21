import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 550px;
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-top: -20px;
  font-size: 18px;
  background-color: ${({theme}) => theme.COLORS.RED}; 
  border-radius: 10px;
  padding: 10px;
`