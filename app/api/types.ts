export interface User {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type GetUsers = () => Promise<User[]>;

