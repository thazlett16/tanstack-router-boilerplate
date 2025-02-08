import { BaseError } from '@/errors/base.error';

export class AuthError extends BaseError<'UNAUTHORIZED' | 'UNAUTHENTICATED'> {}
