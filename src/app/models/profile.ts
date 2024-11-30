import { Lists } from "./lists";

export interface Profile {
  id?: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  lists: Array<Lists>;
}