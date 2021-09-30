import React from "react";
import Image from "next/image";
import styled from "styled-components";

import photo from "../../../public/images/photo.jpeg";

interface PokeProps {
  name: string;
}

const ImageWrapper = styled(Image)`
  border-radius: 0.5rem;
`;

const CardWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Card: React.FC<PokeProps> = (pokemon: PokeProps) => {
  return (
    <CardWrapper className="card">
      <ImageWrapper
        src={photo}
        alt="test"
        layout="fixed"
        width={150}
        height={150}
      />
      <h3 className="pokemonName">{pokemon.name}</h3>
    </CardWrapper>
  );
};
