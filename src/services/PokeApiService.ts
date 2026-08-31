import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  try {
    const resposta = await fetch(BASE_URL + nomeOuId);

    if (resposta.status === 404) {
      console.log("[ERRO] Pokémon não encontrado.");
      return null;
    }

    const dados = (await resposta.json()) as PokemonApiResponse;

    const tipos = dados.types.map((item) => item.type.name);

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight,
    };

    console.log("[OK] Pokémon encontrado: " + dados.name);
    return pokemon;
  } catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}