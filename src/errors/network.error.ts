import { BaseError } from '@/errors/base.error';

export class NetworkError extends BaseError<`SYSTEM_${string}` | `CLIENT_${string}`> {}
