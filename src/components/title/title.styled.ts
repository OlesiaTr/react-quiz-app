import { styled } from 'styled-components';
import { theme } from '../../styles';

export const Text = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights['extra-bold']};
  line-height: 127%;
  letter-spacing: -0.6px;

  margin-bottom: 16px;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.xxl};
    margin-bottom: 20px;
  }
`;
