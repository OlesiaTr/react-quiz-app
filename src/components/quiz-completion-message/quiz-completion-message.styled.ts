import { styled } from 'styled-components';

import { theme } from '../../styles';

export const Title = styled.h1`
  color: ${theme.colors.secondaryWhite};
  text-align: center;
  font-family: ${theme.fonts.cursive};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.normal};
  line-height: normal;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.xxxl};
  }
`;

export const SubTitle = styled.h2`
  color: ${theme.colors.secondaryWhite};
  text-align: center;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights['semi-bold']};
  line-height: 147%;
  letter-spacing: -0.17px;

  margin-bottom: 62px;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.xm};
  }
`;
