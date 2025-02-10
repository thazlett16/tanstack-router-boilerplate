import { z } from 'zod';

export const Common4XXSchema = z.object({
    code: z.string(),
    message: z.string(),
});
export type TCommon4XX = z.infer<typeof Common4XXSchema>;

export const Common5XXSchema = z.object({
    code: z.string(),
    message: z.string(),
});
export type TCommon5XX = z.infer<typeof Common5XXSchema>;
