import styled from 'styled-components';
import { theme } from '../../styles';

export const Container = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

export const Background = styled.circle`
  fill: none;
  stroke: ${theme.colors.white};
  stroke-width: 6;
`;

export const Circle = styled.circle`
  fill: none;
  stroke: ${theme.colors.secondaryPink};
  stroke-width: 6;
  stroke-linecap: round;

  transition: ${theme.transition.main};
`;

export const Text = styled.text`
  text-anchor: middle;
  dominant-baseline: central;
  font-size: ${theme.fontSizes.m};

  fill: ${theme.colors.white};
`;
