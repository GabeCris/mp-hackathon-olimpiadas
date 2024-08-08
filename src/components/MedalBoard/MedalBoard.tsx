import * as S from "./styles";
import Text from "../Utils/Text";
import Podium from "../Podium";
import { useState } from "react";
import { Button } from "../Button";
import Ranking from "../Ranking";
import { CountryDataProps } from "@src/types/types";
import { useGameContext } from "@src/context/GameContext/GameContext";

const MedalBoard = () => {
  const [seeAll, setSeeAll] = useState(false);
  const { countriesData } = useGameContext();

  return (
    <S.Board>
      <Text isTitle>Quadro de Medalhas</Text>
      <Podium data={countriesData} />
      <Button.Root isLink action={() => setSeeAll(!seeAll)}>
        <Button.Text>{seeAll ? "Ver menos" : "Ver tudo"}</Button.Text>
      </Button.Root>
      {seeAll && <Ranking data={countriesData}></Ranking>}
    </S.Board>
  );
};

export default MedalBoard;
