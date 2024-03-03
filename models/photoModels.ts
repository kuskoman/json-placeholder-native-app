import { BaseModel, CreateModel } from "./baseModel";

export interface PhotoModel extends BaseModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type PhotoCreateModel = CreateModel<PhotoModel>;
