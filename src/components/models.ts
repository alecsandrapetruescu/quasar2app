export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface PageMeta {
  isHomePage: boolean;
  domain: string;
  title: string;
  description: string;
}

export interface Input {
  id: number;
  component: string;
  isDynamic: boolean;
  content: string | number | boolean | undefined;
  type: string;
  label: string;
  hint: string;
}

export interface Form {
  readonly isStandalone: boolean;
  id: string;
  title: string;
  inputs: Input[];
  hasEmail?: boolean;
  emailTo?: string;
  hasReCaptcha?: boolean;
}

export enum InputComponents {
  Input = 'q-input',
  Checkbox = 'q-checkbox'
}
