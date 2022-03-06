import { Container, Text, Image } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container
    css={{
      display: "flex",
      flexDirection: "column",
      height: "calc(100hv - 100px)",
      alignItems: "center",
      justifyContent: "center",
      alignSelf:"center"
    }}
  >
    <Text h1>No hay Favoritos</Text>
    <Image
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
    alt='image'
    width={250}
    height={250}
    css={{
      opacity: 0.4
    }}
    />
  </Container>
  )
}
