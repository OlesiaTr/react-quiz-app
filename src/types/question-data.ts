import { Option } from './options';

export interface QuestionData {
  id: number;
  type: string;
  title: string;
  'sub-title'?: string;
  options: Option[];
}
