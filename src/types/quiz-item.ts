export interface QuizItem {
  order: number;
  title: string;
  type: string;
  answer: string | string[] | null;
}
