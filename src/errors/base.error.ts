interface BaseErrorConstructor<T> {
    name: T;
    message: string;
    errorCode?: string;
    cause?: unknown;
}

export class BaseError<T extends string> extends Error {
    name: T;
    message: string;
    errorCode?: string;
    cause?: unknown;

    constructor({ name, message, errorCode, cause }: BaseErrorConstructor<T>) {
        super(message, { cause });
        this.name = name;
        this.message = message;
        this.errorCode = errorCode;
        this.cause = cause;
    }
}
