import { FC } from "react";
import { Grid, Link } from "@nextui-org/react";
import FavoriteCardPokemons from "./FavoriteCardPokemons";
import { useRouter } from "next/router";
import NextLink from 'next/link';

interface Props {
  pokemons: number[];
}

export const Favorites: FC<Props> = ({ pokemons }) => {
  
  return (
    
        <Grid.Container gap={2} direction="row" sm={12} justify="flex-start">
          {pokemons.map((id) => (
            <FavoriteCardPokemons key={id} id={id} />
          ))}
        </Grid.Container>
    
  );
};
