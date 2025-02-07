import { BaseError } from '@/util/error';

export class NetworkError extends BaseError<`SYSTEM_${string}` | `CLIENT_${string}`> {}
