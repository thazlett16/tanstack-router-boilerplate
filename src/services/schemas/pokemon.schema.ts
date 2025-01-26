import { z } from 'zod';

export const NamedAPIResourceSchema = z.object({
    name: z.string(),
    url: z.string().url(),
});
export type TNamedAPIResource = z.infer<typeof NamedAPIResourceSchema>;

export const NamedAPIResourceListSchema = z.object({
    count: z.number(),
    next: z.string().url(),
    previous: z.string().nullable(),
    results: z.array(NamedAPIResourceSchema),
});
export type TNamedAPIResourceList = z.infer<typeof NamedAPIResourceListSchema>;

export const NamedAPIResourceQuerySchema = z.object({
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
});
export type TNamedAPIResourceQuery = z.infer<typeof NamedAPIResourceQuerySchema>;

export const PokemonPathSchema = z.object({
    pokemonID: z.string().or(z.number()),
});
export type TPokemonPath = z.infer<typeof PokemonPathSchema>;

export const PokemonAbilitySchema = z.object({
    is_hidden: z.boolean(),
    slot: z.number(),
    ability: NamedAPIResourceSchema,
});
export type TPokemonAbility = z.infer<typeof PokemonAbilitySchema>;

export const VersionGameIndexSchema = z.object({
    game_index: z.number(),
    version: NamedAPIResourceSchema,
});
export type TVersionGameIndex = z.infer<typeof VersionGameIndexSchema>;

export const PokemonHeldItemVersionSchema = z.object({
    version: NamedAPIResourceSchema,
    rarity: z.number(),
});
export type TPokemonHeldItemVersion = z.infer<typeof PokemonHeldItemVersionSchema>;

export const PokemonHeldItemSchema = z.object({
    item: NamedAPIResourceSchema,
    version_details: z.array(PokemonHeldItemVersionSchema),
});
export type TPokemonHeldItem = z.infer<typeof PokemonHeldItemSchema>;

export const PokemonMoveVersionSchema = z.object({
    move_learn_method: NamedAPIResourceSchema,
    version_group: NamedAPIResourceSchema,
    level_learned_at: z.number(),
});
export type TPokemonMoveVersion = z.infer<typeof PokemonMoveVersionSchema>;

export const PokemonMoveSchema = z.object({
    move: NamedAPIResourceSchema,
    version_group_details: z.array(PokemonMoveVersionSchema),
});
export type TPokemonMove = z.infer<typeof PokemonMoveSchema>;

export const PokemonTypeSchema = z.object({
    slot: z.number(),
    type: NamedAPIResourceSchema,
});
export type TPokemonType = z.infer<typeof PokemonTypeSchema>;

export const PokemonTypePastSchema = z.object({
    generation: NamedAPIResourceSchema,
    types: z.array(PokemonTypeSchema),
});
export type TPokemonTypePast = z.infer<typeof PokemonTypePastSchema>;

export const PokemonSpritesSchema = z.object({
    front_default: z.string(),
    front_shiny: z.string(),
    front_female: z.string().nullable(),
    front_shiny_female: z.string().nullable(),
    back_default: z.string(),
    back_shiny: z.string(),
    back_female: z.string().nullable(),
    back_shiny_female: z.string().nullable(),
});
export type TPokemonSprites = z.infer<typeof PokemonSpritesSchema>;

export const PokemonCriesSchema = z.object({
    latest: z.string(),
    legacy: z.string(),
});
export type TPokemonCries = z.infer<typeof PokemonCriesSchema>;

export const PokemonStatSchema = z.object({
    stat: NamedAPIResourceSchema,
    effort: z.number(),
    base_stat: z.number(),
});
export type TPokemonStat = z.infer<typeof PokemonStatSchema>;

export const PokemonSchema = z.object({
    id: z.number(),
    name: z.string(),
    base_experience: z.number(),
    height: z.number(),
    is_default: z.boolean(),
    order: z.number(),
    weight: z.number(),
    abilities: z.array(PokemonAbilitySchema),
    forms: z.array(NamedAPIResourceSchema),
    game_indices: z.array(VersionGameIndexSchema),
    held_items: z.array(PokemonHeldItemSchema),
    location_area_encounters: z.string(),
    moves: z.array(PokemonMoveSchema),
    past_types: z.array(PokemonTypePastSchema),
    sprites: PokemonSpritesSchema,
    cries: PokemonCriesSchema,
    species: NamedAPIResourceSchema,
    stats: z.array(PokemonStatSchema),
    types: z.array(PokemonTypeSchema),
});
export type TPokemon = z.infer<typeof PokemonSchema>;
