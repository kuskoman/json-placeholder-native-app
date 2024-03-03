import { BaseModel, CreateModel } from "./baseModel";

export interface PostModel extends BaseModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostCreateModel = CreateModel<PostModel>;
