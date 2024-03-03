import { BaseModel, CreateModel } from "./baseModel";

export interface CommentModel extends BaseModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type CommentCreateModel = CreateModel<CommentModel>;
