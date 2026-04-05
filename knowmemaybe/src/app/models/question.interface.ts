export type QuestionDepthLevel = 'light' | 'medium' | 'deep';

export interface Question {
  textKey: string;
  depth: QuestionDepthLevel;
}
