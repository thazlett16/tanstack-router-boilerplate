interface BaseErrorConstructor<T> {
    name: T;
    message?: string;
    cause?: unknown;
}

export class BaseError<T extends string> extends Error {
    name: T;

    constructor({ name, message, cause }: BaseErrorConstructor<T>) {
        super(message, { cause });
        this.name = name;
    }
}
