import { styled } from 'styled-components';
import { theme } from '../../styles';

export const Text = styled.p`
  min-width: 280px;
  max-width: 320px;
  color: ${theme.colors.titleGray};

  text-align: center;
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeights.medium};
  line-height: 150%;

  @media screen and (${theme.media.medium}) {
    font-size: ${theme.fontSizes.s};
  }
`;
