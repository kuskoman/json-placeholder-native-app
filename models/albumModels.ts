import { BaseModel, CreateModel } from "./baseModel";

export interface AlbumModel extends BaseModel {
  userId: number;
  id: number;
  title: string;
}

export type AlbumCreateModel = CreateModel<AlbumModel>;
