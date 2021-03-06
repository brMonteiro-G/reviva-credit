import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pathsImage } from "./pathImage";
import { ContainerLinks, IconActive, Icons } from "./styles";

export interface PropsImage {
  idx: number;
  genre: {
    id: number;
    url: string;
    description: string;
    path: string;
  };
}

export default function Navigation() {
  const [activeIcon, setActiveIcon] = useState(0);

  const path = useLocation().pathname;

  const activeIconHandler = (genre: PropsImage, path: string) => {
    if (genre.genre.path === path) {
      setActiveIcon(genre.idx);
    }
  };

  useEffect(() => {
    pathsImage.map((genre, idx) => {
      activeIconHandler({ idx, genre }, path);
    });
  }, [path]);

  const CurrentIcon = ({ genre, idx }: PropsImage) => {
    if (idx === activeIcon) {
      return <IconActive src={genre.url} alt={genre.description} />;
    }
    return (
      <Icons
        src={genre.url}
        onClick={() => setActiveIcon(idx)}
        alt={genre.description}
      />
    );
  };
  return (
    <ContainerLinks>
      {pathsImage.map((genre, idx) => (
        <Link to={genre.path} key={idx}>
          <CurrentIcon genre={genre} idx={idx} />
        </Link>
      ))}
    </ContainerLinks>
  );
}
