export type AuthResponse = {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
};

export type AuthUser = {
  token: string;
  id: number;
  username: string;
  email: string;
};

export type AuthData = AuthDataNoUser | AuthDataWithUser;

export type AuthDataNoUser = {
  status: 'waiting' | 'not-logged';
};

export type AuthDataWithUser = {
  status: 'logged';
  user: AuthUser;
};
