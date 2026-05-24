export interface Exercise {
  question: { "zh-TW": string; en: string };
  hint: { "zh-TW": string; en: string };
  answer: string;
}

export interface Lesson {
  id: string;
  title: { "zh-TW": string; en: string };
  content: { "zh-TW": string; en: string };
  defaultCode: string;
  exercise?: Exercise;
}

export interface Chapter {
  id: string;
  title: { "zh-TW": string; en: string };
  lessons: Lesson[];
}
