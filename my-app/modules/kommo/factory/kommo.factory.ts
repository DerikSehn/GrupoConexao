// src/kommo/factory/kommo.factory.ts
import axios, { AxiosError } from 'axios';

export interface KommoRequestParams {
  [key: string]: any;
}

export class KommoError extends Error {
  constructor(message: string, public readonly statusCode: number) {
    super(message);
  }
}

export class Kommo {
  private readonly axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_KOMMO_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_KOMMO_CLIENT_TOKEN}`,
    },
  });

  constructor() {
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          const { status, data } = error.response;
          throw new KommoError((data as {message: string})?.message || 'Unknown error', status);
        }
        return Promise.reject(error);
      }
    );
  }

  private async request<T>(method: 'get' | 'post' | 'put' | 'delete', endpoint: string, params?: KommoRequestParams): Promise<T> {
    if (!endpoint.startsWith('/')) {
      endpoint = '/' + endpoint;
    }
    
    try {
      const response = await this.axiosInstance({
        method,
        url: endpoint,
        data: params,
      });
      return response.data;
    } catch (error) {
      if (error instanceof KommoError) {
        throw error;
      }
      throw new KommoError('Failed to process request', 500);
    }
  }

  public async get<T>(endpoint: string, params?: KommoRequestParams): Promise<T> {
    return this.request<T>('get', endpoint, params);
  }

  public async post<T>(endpoint: string, params?: KommoRequestParams): Promise<T> {
    return this.request<T>('post', endpoint, params);
  }

  public async put<T>(endpoint: string, params?: KommoRequestParams): Promise<T> {
    return this.request<T>('put', endpoint, params);
  }

  public async delete<T>(endpoint: string, params?: KommoRequestParams): Promise<T> {
    return this.request<T>('delete', endpoint, params);
  }
}
