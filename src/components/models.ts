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
  content: string | number | boolean | any;
  type: string;
  label: string;
  hint: string;
}

export interface Form {
  readonly standalone: boolean;
  id: string;
  title: string;
  inputs: Input[]
}
