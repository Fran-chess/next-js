export interface Pokémons {
  count: number;
  next: string;
  previous?: string;
  results: SmallPokemon[];
}

export interface SmallPokemon {
  name: string;
  url: string;
  id: string;
  img?: string;
}
