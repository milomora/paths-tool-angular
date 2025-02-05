import { HttpPagination } from './http-types';

export type PathListResponse = {
  data: PathItemResponse[];
  meta: HttpPagination;
};

export type PathItemResponse = {
  id: number;
  attributes: {
    name: string;
    description: string;
    author: string;
    logo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
  };
};

export type PathListData = {
  data: PathListItem[];
  meta: HttpPagination;
};

export type PathListItem = {
  id: number;
  logo: string;
  name: string;
  description: string;
  author: string;
  date: Date;
  slug: string;
  isFavorite?: boolean;
};
