interface IRequestPagination {
  page: number;
  perPage: number;
}

type TQueryParams = Record<string, string | number>;

export type { IRequestPagination, TQueryParams };
