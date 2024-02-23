import { styled } from 'styled-components';
import { theme } from '../../styles';

export const Text = styled.h2`
  color: ${theme.colors.subtitleGray};
  text-align: center;
  font-family: ${theme.fonts.nunito};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.normal};
  line-height: 141%;

  margin-bottom: 24px;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.xm};
    margin-bottom: 28px;
  }
`;
