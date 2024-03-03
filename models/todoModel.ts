import { BaseModel, CreateModel } from "./baseModel";

export interface TodoModel extends BaseModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TodoCreateModel = CreateModel<TodoModel>;
