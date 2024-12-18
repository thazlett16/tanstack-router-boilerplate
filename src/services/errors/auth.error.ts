import { BaseError } from '@/util/error';

type AuthErrorNames =
    | 'UNAUTHORIZED'
    | 'UNAUTHENTICATED'
    | `UNAUTHORIZED${string}`;

export class AuthError extends BaseError<AuthErrorNames> {}
