import { HttpPagination } from './http-types';

export type PathListResponse = {
  data: PathListItemResponse[];
  meta: HttpPagination;
};

export type PathListItemResponse = {
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

// ToDO: Definy PathItemResponse type.
export type PathItemResponse = Record<string, unknown>;

// ToDO: Definy PathItemData type.
export type PathItemData = Record<string, unknown>;
