import { BaseError } from '@/util/error';

export class AuthError extends BaseError<'UNAUTHORIZED' | 'UNAUTHENTICATED'> {}
