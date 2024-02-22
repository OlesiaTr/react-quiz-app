import { FC, SVGProps } from 'react';

const ArrowLeftIcon: FC<SVGProps<SVGSVGElement>> = ({
  width,
  height,
  stroke,
}) => (
  <svg
    width={width ?? '24'}
    height={height ?? '24'}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6.5L2.5 13L9 19.5"
      stroke={stroke ?? 'white'}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export default ArrowLeftIcon;
