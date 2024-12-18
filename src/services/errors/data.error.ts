import { BaseError } from '@/util/error';

type DataErrorNames = 'NOT_FOUND';

export class DataError extends BaseError<DataErrorNames> {}
