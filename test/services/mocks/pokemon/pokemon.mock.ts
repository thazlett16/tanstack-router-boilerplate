import { TNamedAPIResourceList, TPokemon } from '@/services/schemas/pokemon.schema';

export const pokemonListMock: TNamedAPIResourceList = {
    count: 1304,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=50&limit=50',
    previous: null,
    results: [
        {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
        {
            name: 'ivysaur',
            url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
        {
            name: 'venusaur',
            url: 'https://pokeapi.co/api/v2/pokemon/3/',
        },
        {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
        },
        {
            name: 'charmeleon',
            url: 'https://pokeapi.co/api/v2/pokemon/5/',
        },
        {
            name: 'charizard',
            url: 'https://pokeapi.co/api/v2/pokemon/6/',
        },
        {
            name: 'squirtle',
            url: 'https://pokeapi.co/api/v2/pokemon/7/',
        },
        {
            name: 'wartortle',
            url: 'https://pokeapi.co/api/v2/pokemon/8/',
        },
        {
            name: 'blastoise',
            url: 'https://pokeapi.co/api/v2/pokemon/9/',
        },
        {
            name: 'caterpie',
            url: 'https://pokeapi.co/api/v2/pokemon/10/',
        },
        {
            name: 'metapod',
            url: 'https://pokeapi.co/api/v2/pokemon/11/',
        },
        {
            name: 'butterfree',
            url: 'https://pokeapi.co/api/v2/pokemon/12/',
        },
        {
            name: 'weedle',
            url: 'https://pokeapi.co/api/v2/pokemon/13/',
        },
        {
            name: 'kakuna',
            url: 'https://pokeapi.co/api/v2/pokemon/14/',
        },
        {
            name: 'beedrill',
            url: 'https://pokeapi.co/api/v2/pokemon/15/',
        },
        {
            name: 'pidgey',
            url: 'https://pokeapi.co/api/v2/pokemon/16/',
        },
        {
            name: 'pidgeotto',
            url: 'https://pokeapi.co/api/v2/pokemon/17/',
        },
        {
            name: 'pidgeot',
            url: 'https://pokeapi.co/api/v2/pokemon/18/',
        },
        {
            name: 'rattata',
            url: 'https://pokeapi.co/api/v2/pokemon/19/',
        },
        {
            name: 'raticate',
            url: 'https://pokeapi.co/api/v2/pokemon/20/',
        },
        {
            name: 'spearow',
            url: 'https://pokeapi.co/api/v2/pokemon/21/',
        },
        {
            name: 'fearow',
            url: 'https://pokeapi.co/api/v2/pokemon/22/',
        },
        {
            name: 'ekans',
            url: 'https://pokeapi.co/api/v2/pokemon/23/',
        },
        {
            name: 'arbok',
            url: 'https://pokeapi.co/api/v2/pokemon/24/',
        },
        {
            name: 'pikachu',
            url: 'https://pokeapi.co/api/v2/pokemon/25/',
        },
        {
            name: 'raichu',
            url: 'https://pokeapi.co/api/v2/pokemon/26/',
        },
        {
            name: 'sandshrew',
            url: 'https://pokeapi.co/api/v2/pokemon/27/',
        },
        {
            name: 'sandslash',
            url: 'https://pokeapi.co/api/v2/pokemon/28/',
        },
        {
            name: 'nidoran-f',
            url: 'https://pokeapi.co/api/v2/pokemon/29/',
        },
        {
            name: 'nidorina',
            url: 'https://pokeapi.co/api/v2/pokemon/30/',
        },
        {
            name: 'nidoqueen',
            url: 'https://pokeapi.co/api/v2/pokemon/31/',
        },
        {
            name: 'nidoran-m',
            url: 'https://pokeapi.co/api/v2/pokemon/32/',
        },
        {
            name: 'nidorino',
            url: 'https://pokeapi.co/api/v2/pokemon/33/',
        },
        {
            name: 'nidoking',
            url: 'https://pokeapi.co/api/v2/pokemon/34/',
        },
        {
            name: 'clefairy',
            url: 'https://pokeapi.co/api/v2/pokemon/35/',
        },
        {
            name: 'clefable',
            url: 'https://pokeapi.co/api/v2/pokemon/36/',
        },
        {
            name: 'vulpix',
            url: 'https://pokeapi.co/api/v2/pokemon/37/',
        },
        {
            name: 'ninetales',
            url: 'https://pokeapi.co/api/v2/pokemon/38/',
        },
        {
            name: 'jigglypuff',
            url: 'https://pokeapi.co/api/v2/pokemon/39/',
        },
        {
            name: 'wigglytuff',
            url: 'https://pokeapi.co/api/v2/pokemon/40/',
        },
        {
            name: 'zubat',
            url: 'https://pokeapi.co/api/v2/pokemon/41/',
        },
        {
            name: 'golbat',
            url: 'https://pokeapi.co/api/v2/pokemon/42/',
        },
        {
            name: 'oddish',
            url: 'https://pokeapi.co/api/v2/pokemon/43/',
        },
        {
            name: 'gloom',
            url: 'https://pokeapi.co/api/v2/pokemon/44/',
        },
        {
            name: 'vileplume',
            url: 'https://pokeapi.co/api/v2/pokemon/45/',
        },
        {
            name: 'paras',
            url: 'https://pokeapi.co/api/v2/pokemon/46/',
        },
        {
            name: 'parasect',
            url: 'https://pokeapi.co/api/v2/pokemon/47/',
        },
        {
            name: 'venonat',
            url: 'https://pokeapi.co/api/v2/pokemon/48/',
        },
        {
            name: 'venomoth',
            url: 'https://pokeapi.co/api/v2/pokemon/49/',
        },
        {
            name: 'diglett',
            url: 'https://pokeapi.co/api/v2/pokemon/50/',
        },
    ],
};

export const pokemonByIDMock: TPokemon = {
    abilities: [
        {
            ability: {
                name: 'intimidate',
                url: 'https://pokeapi.co/api/v2/ability/22/',
            },
            is_hidden: false,
            slot: 1,
        },
        {
            ability: {
                name: 'shed-skin',
                url: 'https://pokeapi.co/api/v2/ability/61/',
            },
            is_hidden: false,
            slot: 2,
        },
        {
            ability: {
                name: 'unnerve',
                url: 'https://pokeapi.co/api/v2/ability/127/',
            },
            is_hidden: true,
            slot: 3,
        },
    ],
    base_experience: 157,
    cries: {
        latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg',
        legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/24.ogg',
    },
    forms: [
        {
            name: 'arbok',
            url: 'https://pokeapi.co/api/v2/pokemon-form/24/',
        },
    ],
    game_indices: [
        {
            game_index: 45,
            version: {
                name: 'red',
                url: 'https://pokeapi.co/api/v2/version/1/',
            },
        },
        {
            game_index: 45,
            version: {
                name: 'blue',
                url: 'https://pokeapi.co/api/v2/version/2/',
            },
        },
        {
            game_index: 45,
            version: {
                name: 'yellow',
                url: 'https://pokeapi.co/api/v2/version/3/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'gold',
                url: 'https://pokeapi.co/api/v2/version/4/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'silver',
                url: 'https://pokeapi.co/api/v2/version/5/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'crystal',
                url: 'https://pokeapi.co/api/v2/version/6/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'ruby',
                url: 'https://pokeapi.co/api/v2/version/7/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'sapphire',
                url: 'https://pokeapi.co/api/v2/version/8/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'emerald',
                url: 'https://pokeapi.co/api/v2/version/9/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'firered',
                url: 'https://pokeapi.co/api/v2/version/10/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'leafgreen',
                url: 'https://pokeapi.co/api/v2/version/11/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'diamond',
                url: 'https://pokeapi.co/api/v2/version/12/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'pearl',
                url: 'https://pokeapi.co/api/v2/version/13/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'platinum',
                url: 'https://pokeapi.co/api/v2/version/14/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'heartgold',
                url: 'https://pokeapi.co/api/v2/version/15/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'soulsilver',
                url: 'https://pokeapi.co/api/v2/version/16/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'black',
                url: 'https://pokeapi.co/api/v2/version/17/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'white',
                url: 'https://pokeapi.co/api/v2/version/18/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'black-2',
                url: 'https://pokeapi.co/api/v2/version/21/',
            },
        },
        {
            game_index: 24,
            version: {
                name: 'white-2',
                url: 'https://pokeapi.co/api/v2/version/22/',
            },
        },
    ],
    height: 35,
    held_items: [
        {
            item: {
                name: 'poison-barb',
                url: 'https://pokeapi.co/api/v2/item/222/',
            },
            version_details: [
                {
                    rarity: 5,
                    version: {
                        name: 'firered',
                        url: 'https://pokeapi.co/api/v2/version/10/',
                    },
                },
                {
                    rarity: 5,
                    version: {
                        name: 'leafgreen',
                        url: 'https://pokeapi.co/api/v2/version/11/',
                    },
                },
            ],
        },
    ],
    id: 24,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/24/encounters',
    moves: [
        {
            move: {
                name: 'bind',
                url: 'https://pokeapi.co/api/v2/move/20/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'slam',
                url: 'https://pokeapi.co/api/v2/move/21/',
            },
            version_group_details: [
                {
                    level_learned_at: 36,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'headbutt',
                url: 'https://pokeapi.co/api/v2/move/29/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'body-slam',
                url: 'https://pokeapi.co/api/v2/move/34/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'wrap',
                url: 'https://pokeapi.co/api/v2/move/35/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'take-down',
                url: 'https://pokeapi.co/api/v2/move/36/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'double-edge',
                url: 'https://pokeapi.co/api/v2/move/38/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'poison-sting',
                url: 'https://pokeapi.co/api/v2/move/40/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 10,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 10,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 8,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 8,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 8,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 8,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 8,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'leer',
                url: 'https://pokeapi.co/api/v2/move/43/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 4,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'bite',
                url: 'https://pokeapi.co/api/v2/move/44/',
            },
            version_group_details: [
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 15,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 15,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 13,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 13,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 13,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 13,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 13,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'acid',
                url: 'https://pokeapi.co/api/v2/move/51/',
            },
            version_group_details: [
                {
                    level_learned_at: 47,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 47,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 43,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 43,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 38,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 38,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 38,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 38,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 38,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 9,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'hyper-beam',
                url: 'https://pokeapi.co/api/v2/move/63/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'strength',
                url: 'https://pokeapi.co/api/v2/move/70/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'mega-drain',
                url: 'https://pokeapi.co/api/v2/move/72/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'earthquake',
                url: 'https://pokeapi.co/api/v2/move/89/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'fissure',
                url: 'https://pokeapi.co/api/v2/move/90/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'dig',
                url: 'https://pokeapi.co/api/v2/move/91/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'toxic',
                url: 'https://pokeapi.co/api/v2/move/92/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 52,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'rage',
                url: 'https://pokeapi.co/api/v2/move/99/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'mimic',
                url: 'https://pokeapi.co/api/v2/move/102/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'screech',
                url: 'https://pokeapi.co/api/v2/move/103/',
            },
            version_group_details: [
                {
                    level_learned_at: 36,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 36,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 33,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 33,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 17,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'double-team',
                url: 'https://pokeapi.co/api/v2/move/104/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'haze',
                url: 'https://pokeapi.co/api/v2/move/114/',
            },
            version_group_details: [
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 16,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 51,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'bide',
                url: 'https://pokeapi.co/api/v2/move/117/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'skull-bash',
                url: 'https://pokeapi.co/api/v2/move/130/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'glare',
                url: 'https://pokeapi.co/api/v2/move/137/',
            },
            version_group_details: [
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 25,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 25,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 20,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 12,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'leech-life',
                url: 'https://pokeapi.co/api/v2/move/141/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'rest',
                url: 'https://pokeapi.co/api/v2/move/156/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'rock-slide',
                url: 'https://pokeapi.co/api/v2/move/157/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'substitute',
                url: 'https://pokeapi.co/api/v2/move/164/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'red-blue',
                        url: 'https://pokeapi.co/api/v2/version-group/1/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'yellow',
                        url: 'https://pokeapi.co/api/v2/version-group/2/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'thief',
                url: 'https://pokeapi.co/api/v2/move/168/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'snore',
                url: 'https://pokeapi.co/api/v2/move/173/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'curse',
                url: 'https://pokeapi.co/api/v2/move/174/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'spite',
                url: 'https://pokeapi.co/api/v2/move/180/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'egg',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'protect',
                url: 'https://pokeapi.co/api/v2/move/182/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'scary-face',
                url: 'https://pokeapi.co/api/v2/move/184/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'egg',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'sludge-bomb',
                url: 'https://pokeapi.co/api/v2/move/188/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'mud-slap',
                url: 'https://pokeapi.co/api/v2/move/189/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'giga-drain',
                url: 'https://pokeapi.co/api/v2/move/202/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'endure',
                url: 'https://pokeapi.co/api/v2/move/203/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'swagger',
                url: 'https://pokeapi.co/api/v2/move/207/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'attract',
                url: 'https://pokeapi.co/api/v2/move/213/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'sleep-talk',
                url: 'https://pokeapi.co/api/v2/move/214/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'return',
                url: 'https://pokeapi.co/api/v2/move/216/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'frustration',
                url: 'https://pokeapi.co/api/v2/move/218/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'pain-split',
                url: 'https://pokeapi.co/api/v2/move/220/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'iron-tail',
                url: 'https://pokeapi.co/api/v2/move/231/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'hidden-power',
                url: 'https://pokeapi.co/api/v2/move/237/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'rain-dance',
                url: 'https://pokeapi.co/api/v2/move/240/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'sunny-day',
                url: 'https://pokeapi.co/api/v2/move/241/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'gold-silver',
                        url: 'https://pokeapi.co/api/v2/version-group/3/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'crystal',
                        url: 'https://pokeapi.co/api/v2/version-group/4/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'crunch',
                url: 'https://pokeapi.co/api/v2/move/242/',
            },
            version_group_details: [
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 22,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'stockpile',
                url: 'https://pokeapi.co/api/v2/move/254/',
            },
            version_group_details: [
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'spit-up',
                url: 'https://pokeapi.co/api/v2/move/255/',
            },
            version_group_details: [
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'swallow',
                url: 'https://pokeapi.co/api/v2/move/256/',
            },
            version_group_details: [
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 46,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 27,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'torment',
                url: 'https://pokeapi.co/api/v2/move/259/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'facade',
                url: 'https://pokeapi.co/api/v2/move/263/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'knock-off',
                url: 'https://pokeapi.co/api/v2/move/282/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'snatch',
                url: 'https://pokeapi.co/api/v2/move/289/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'secret-power',
                url: 'https://pokeapi.co/api/v2/move/290/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ruby-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/5/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'emerald',
                        url: 'https://pokeapi.co/api/v2/version-group/6/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'firered-leafgreen',
                        url: 'https://pokeapi.co/api/v2/version-group/7/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'colosseum',
                        url: 'https://pokeapi.co/api/v2/version-group/12/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'xd',
                        url: 'https://pokeapi.co/api/v2/version-group/13/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'poison-fang',
                url: 'https://pokeapi.co/api/v2/move/305/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'egg',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'rock-tomb',
                url: 'https://pokeapi.co/api/v2/move/317/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'mud-shot',
                url: 'https://pokeapi.co/api/v2/move/341/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'poison-tail',
                url: 'https://pokeapi.co/api/v2/move/342/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'egg',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'natural-gift',
                url: 'https://pokeapi.co/api/v2/move/363/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'payback',
                url: 'https://pokeapi.co/api/v2/move/371/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'gastro-acid',
                url: 'https://pokeapi.co/api/v2/move/380/',
            },
            version_group_details: [
                {
                    level_learned_at: 42,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 42,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 42,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 44,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'sucker-punch',
                url: 'https://pokeapi.co/api/v2/move/389/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'egg',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'toxic-spikes',
                url: 'https://pokeapi.co/api/v2/move/390/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'poison-jab',
                url: 'https://pokeapi.co/api/v2/move/398/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 28,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'dark-pulse',
                url: 'https://pokeapi.co/api/v2/move/399/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'aqua-tail',
                url: 'https://pokeapi.co/api/v2/move/401/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'seed-bomb',
                url: 'https://pokeapi.co/api/v2/move/402/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'switcheroo',
                url: 'https://pokeapi.co/api/v2/move/415/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'egg',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'giga-impact',
                url: 'https://pokeapi.co/api/v2/move/416/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'thunder-fang',
                url: 'https://pokeapi.co/api/v2/move/422/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'ice-fang',
                url: 'https://pokeapi.co/api/v2/move/423/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'fire-fang',
                url: 'https://pokeapi.co/api/v2/move/424/',
            },
            version_group_details: [
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 1,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'mud-bomb',
                url: 'https://pokeapi.co/api/v2/move/426/',
            },
            version_group_details: [
                {
                    level_learned_at: 34,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 34,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 34,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 39,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'gunk-shot',
                url: 'https://pokeapi.co/api/v2/move/441/',
            },
            version_group_details: [
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 63,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'captivate',
                url: 'https://pokeapi.co/api/v2/move/445/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'diamond-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/8/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'platinum',
                        url: 'https://pokeapi.co/api/v2/version-group/9/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'heartgold-soulsilver',
                        url: 'https://pokeapi.co/api/v2/version-group/10/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'venoshock',
                url: 'https://pokeapi.co/api/v2/move/474/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'sludge-wave',
                url: 'https://pokeapi.co/api/v2/move/482/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'coil',
                url: 'https://pokeapi.co/api/v2/move/489/',
            },
            version_group_details: [
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 56,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'acid-spray',
                url: 'https://pokeapi.co/api/v2/move/491/',
            },
            version_group_details: [
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 32,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'round',
                url: 'https://pokeapi.co/api/v2/move/496/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'bulldoze',
                url: 'https://pokeapi.co/api/v2/move/523/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'dragon-tail',
                url: 'https://pokeapi.co/api/v2/move/525/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-white',
                        url: 'https://pokeapi.co/api/v2/version-group/11/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'black-2-white-2',
                        url: 'https://pokeapi.co/api/v2/version-group/14/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'lets-go-pikachu-lets-go-eevee',
                        url: 'https://pokeapi.co/api/v2/version-group/19/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'snarl',
                url: 'https://pokeapi.co/api/v2/move/555/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'belch',
                url: 'https://pokeapi.co/api/v2/move/562/',
            },
            version_group_details: [
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'brilliant-diamond-and-shining-pearl',
                        url: 'https://pokeapi.co/api/v2/version-group/23/',
                    },
                },
                {
                    level_learned_at: 48,
                    move_learn_method: {
                        name: 'level-up',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'confide',
                url: 'https://pokeapi.co/api/v2/move/590/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'infestation',
                url: 'https://pokeapi.co/api/v2/move/611/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'x-y',
                        url: 'https://pokeapi.co/api/v2/version-group/15/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'omega-ruby-alpha-sapphire',
                        url: 'https://pokeapi.co/api/v2/version-group/16/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'throat-chop',
                url: 'https://pokeapi.co/api/v2/move/675/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'brutal-swing',
                url: 'https://pokeapi.co/api/v2/move/693/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'sun-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/17/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'psychic-fangs',
                url: 'https://pokeapi.co/api/v2/move/706/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'stomping-tantrum',
                url: 'https://pokeapi.co/api/v2/move/707/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'tutor',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/3/',
                    },
                    version_group: {
                        name: 'ultra-sun-ultra-moon',
                        url: 'https://pokeapi.co/api/v2/version-group/18/',
                    },
                },
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'breaking-swipe',
                url: 'https://pokeapi.co/api/v2/move/784/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'scale-shot',
                url: 'https://pokeapi.co/api/v2/move/799/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'skitter-smack',
                url: 'https://pokeapi.co/api/v2/move/806/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'lash-out',
                url: 'https://pokeapi.co/api/v2/move/808/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'tera-blast',
                url: 'https://pokeapi.co/api/v2/move/851/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
        {
            move: {
                name: 'trailblaze',
                url: 'https://pokeapi.co/api/v2/move/885/',
            },
            version_group_details: [
                {
                    level_learned_at: 0,
                    move_learn_method: {
                        name: 'machine',
                        url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
                    },
                    version_group: {
                        name: 'scarlet-violet',
                        url: 'https://pokeapi.co/api/v2/version-group/25/',
                    },
                },
            ],
        },
    ],
    name: 'arbok',
    order: 33,
    past_types: [],
    species: {
        name: 'arbok',
        url: 'https://pokeapi.co/api/v2/pokemon-species/24/',
    },
    sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png',
        back_female: null,
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/24.png',
        back_shiny_female: null,
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png',
        front_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png',
        front_shiny_female: null,
    },
    stats: [
        {
            base_stat: 60,
            effort: 0,
            stat: {
                name: 'hp',
                url: 'https://pokeapi.co/api/v2/stat/1/',
            },
        },
        {
            base_stat: 95,
            effort: 2,
            stat: {
                name: 'attack',
                url: 'https://pokeapi.co/api/v2/stat/2/',
            },
        },
        {
            base_stat: 69,
            effort: 0,
            stat: {
                name: 'defense',
                url: 'https://pokeapi.co/api/v2/stat/3/',
            },
        },
        {
            base_stat: 65,
            effort: 0,
            stat: {
                name: 'special-attack',
                url: 'https://pokeapi.co/api/v2/stat/4/',
            },
        },
        {
            base_stat: 79,
            effort: 0,
            stat: {
                name: 'special-defense',
                url: 'https://pokeapi.co/api/v2/stat/5/',
            },
        },
        {
            base_stat: 80,
            effort: 0,
            stat: {
                name: 'speed',
                url: 'https://pokeapi.co/api/v2/stat/6/',
            },
        },
    ],
    types: [
        {
            slot: 1,
            type: {
                name: 'poison',
                url: 'https://pokeapi.co/api/v2/type/4/',
            },
        },
    ],
    weight: 650,
};
