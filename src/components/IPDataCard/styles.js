import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin: -110px auto 0;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 24px 26px;
  text-align: center;
  gap: 15px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .3);
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  &.display {
    display: flex;
  }

  .data {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

    &:last-child {
      border: none;
    }

    p {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      letter-spacing: 1.46px;
    }

    h2 {
      letter-spacing: -0.18px;
    }
  }

  @media screen and (max-width: 430px) {
    max-width: 330px;
  }

  @media screen and (min-width: 1024px){
    flex-direction: row;
    align-items: flex-start;
    padding: 32px 26px 24px;
    
    .data{
      border-bottom: none;
      text-align: left;
      gap: 10px;
      height: 80px;
      border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
