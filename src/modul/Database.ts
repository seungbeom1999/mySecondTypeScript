export type stateobject = Todo[];

export type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type eventChange = React.ChangeEvent<HTMLInputElement>;

export type eventFormChange = React.FormEvent<HTMLFormElement>;
