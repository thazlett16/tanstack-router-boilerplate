import { z } from 'zod';

export const RoleSchema = z.object({
    name: z.string(),
    type: z.enum(['create', 'read', 'update', 'delete', 'view']),
});
export type TRole = z.infer<typeof RoleSchema>;

export const UserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    roles: z.array(RoleSchema),
});
export type TUser = z.infer<typeof UserSchema>;

export const UserIsAuthenticated = z.discriminatedUnion('isAuthenticated', [
    z.object({
        isAuthenticated: z.literal(false),
    }),
    z.object({
        isAuthenticated: z.literal(true),
        currentUser: UserSchema,
    }),
]);
export type TUserIsAuthenticated = z.infer<typeof UserIsAuthenticated>;
