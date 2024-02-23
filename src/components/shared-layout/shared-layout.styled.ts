import styled from 'styled-components';
import { theme } from '../../styles';

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${theme.fonts.albert};

  margin: 0 auto;
  min-height: 100vh;
  background-color: ${theme.colors.mainBg};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 45px;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media screen and (${theme.media.medium}) {
    gap: 55px;
  }
`;
