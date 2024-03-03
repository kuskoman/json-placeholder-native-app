import { BaseModel } from "@/models/baseModel";
import { API_URL } from "../constants/Api";

type RequestMethods = "GET" | "POST" | "PUT" | "DELETE";

interface ModelWithId {
  id: string | number;
}

export abstract class BaseService<Model extends BaseModel, CreateModel> {
  constructor(protected readonly apiUrl: string = API_URL) {}

  protected async get(path: string): Promise<Model> {
    const response = await this.request<Model>("GET", path);
    return this.appendKey<Model>(response);
  }

  protected async getAll(path: string): Promise<Model[]> {
    const response = await this.request<Model[]>("GET", path);
    const modelsWithKeys = response.map((model) =>
      this.appendKey<Model>(model)
    );
    return modelsWithKeys as unknown as Model[];
  }

  protected async post(path: string, body: CreateModel): Promise<Model> {
    const response = await this.request<Model>("POST", path, body);
    return this.appendKey<Model>(response);
  }

  protected async put(path: string, body: Model): Promise<Model> {
    const response = await this.request<Model>("PUT", path, body);
    return this.appendKey<Model>(response);
  }

  protected async delete(path: string): Promise<void> {
    return this.request("DELETE", path);
  }

  private async request<T>(
    method: RequestMethods,
    path: string,
    body?: any
  ): Promise<T> {
    const options: RequestInit = { method };
    if (body) {
      options.body = JSON.stringify(body);
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    const response = await fetch(`${this.apiUrl}${path}`, options);
    if (!response.ok) {
      throw new Error(`Failed to ${method} ${path}: ${response.statusText}`);
    }
    const responseJson = response.json();
    return responseJson;
  }

  private async appendKey<T>(model: T): Promise<T & { key: string }> {
    const key = this.isModelWithId(model)
      ? model.id.toString()
      : this.generateKey();
    return { ...model, key };
  }

  private isModelWithId(model: unknown): model is ModelWithId {
    return (
      (model as ModelWithId).hasOwnProperty("id") &&
      (typeof (model as ModelWithId)["id"] === "string" ||
        typeof (model as ModelWithId)["id"] === "number")
    );
  }

  private generateKey(): string {
    return Math.random().toString(36).substring(2, 9);
  }
}
