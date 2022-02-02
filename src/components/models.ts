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
  // model: any;
  id: number;
  content: string | number | boolean | any;
  type: string;
  label: string;
  hint: string;
}

export interface Form {
  readonly standalone: boolean;
  title: string;
  inputs: Input[]
}
