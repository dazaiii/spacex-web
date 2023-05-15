export interface PaginatedResponse<T> {
  totalDocs: number;
  offset: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
  docs: T;
}

export interface SearchBody {
  query: {
    name: {
      $regex: string;
      $options: string;
    };
    image?: {
      $ne: string | null;
    };
  };
  options?: SearchOptions;
}

export interface SearchOptions {
  offset: number | undefined;
  limit: number | undefined;
}
