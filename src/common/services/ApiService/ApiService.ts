import axios, { AxiosInstance, AxiosResponse } from "axios";
import { TQueryParams } from "./types";

const isDev = process.env.NODE_ENV !== 'production';

class ApiService {
  protected readonly httpService: AxiosInstance;

  constructor() {
    this.httpService = axios.create({ baseURL: '/server' });
  }

  private getQueryString = (params?: TQueryParams): string => {
    if (!params || !Object.keys(params).length) return '';
    return '?' + Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&');
  }

  get = async <T>(path: string, queryParams?: TQueryParams) => {
    const pathWithQuery = path + this.getQueryString(queryParams);
    if (isDev) console.log('%c GET: ', 'color: #29acf2;', pathWithQuery);

    return await this.httpService.get<string, AxiosResponse<T>>(pathWithQuery);
  };
}

export const apiService = new ApiService();
