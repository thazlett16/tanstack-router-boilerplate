import { faker } from '@faker-js/faker/locale/en_US';

import type { TUser } from '@/services/schemas/user.schema';

export const currentUserMock: TUser = {
    firstName: 'Tim',
    lastName: 'Hazlett',
    roles: [
        {
            name: 'user',
            type: 'view',
        },
    ],
};

export const createRandomUserFactory = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        roles: [],
    } satisfies TUser;
};
