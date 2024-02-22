import { DEFAULT_PAGE_VALUE } from '../constants';

export const getPageNumberFromPath = (pathname: string) => {
  return (pathname.split('/').pop() ?? DEFAULT_PAGE_VALUE) as string;
};
