import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Favorites } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokémon - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
