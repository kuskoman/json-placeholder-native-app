export interface BaseModel {
  key: string;
}

export type CreateModel<T> = Omit<T, "key" | "id">;
