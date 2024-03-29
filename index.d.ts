export type Language = {
  code: string;
  text: string;
};

export type Question = {
  domain: string;
  facet: number;
  id: string;
  keyed: string;
  num: number;
  text: string;
  choices: Choice[];
};

export type Choice = {
  color: number;
  score: number;
  text: string;
};

export type Item = {
  lang: string;
  shuffle: boolean;
};

export type Info = {
  name: string;
  id: string;
  shortId: string;
  time: number;
  questions: number;
  note: string;
  languages: Language[];
};

export function getItems(lang?: string, shuffle?: boolean): Question[];

export function getInfo(): Info;

export function getChoices(lang?: string): Record<string, string[]>;

export function getQuestions(lang?: string): Question[];
