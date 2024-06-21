import styled from 'styled-components'
import bg from '../../assets/header-bg.svg'

export const Container = styled.header`
  width: 100%;
  height: 300px;
  background-image: url(${bg});
  background-size: cover;
  padding: 26px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.COLORS.WHITE};

  .search-bar{
    width: 100%;
    max-width: 550px;
    height: 58px;
    border-radius: 12px;
    border: none;
    margin: 38px 0 24px;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};

    input{
      width: 100%;
      height: 58px;
      border-radius: 12px 0 0 12px;
      border: none;
      padding: 0 15px;
      font-size: 18px;
      font-weight: bold;

      &::placeholder{
        font-size: 16px;
        font-weight: normal;
      }
    }

    button{
      width: 58px;
      height: 58px;
      background-color: ${({theme}) => theme.COLORS.BLACK};
      color: ${({theme}) => theme.COLORS.WHITE};
      border: none;
      border-radius: 0 12px 12px 0;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover{
        background-color: ${({theme}) => theme.COLORS.GRAY_300};
      }
    }
  }

`