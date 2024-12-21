import { BaseError } from '@/util/error';

type NetworkErrorNames = 'SYSTEM';

export class NetworkError extends BaseError<NetworkErrorNames> {}
