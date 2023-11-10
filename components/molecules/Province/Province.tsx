import { IProvince } from "./Type";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Div from "../../atoms/Div";
import { CountryUtils } from "../../../utils";
import Node from "../../atoms/Node";
import WhiteFlag from "../../../public/flags/whiteFlag.svg";
import Image from "next/image";

const Wrapper = styled(Div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const FlagWrapper = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Province = ({
  owner,
  currentOwner,
  name,
  id,
  isCapital,
  ic,
}: IProvince) => {
  const isOccupied = owner !== currentOwner;
  return (
    <Node id={id} name={name}>
      <Wrapper
        border="1px solid #000000"
        backgroundColor="#6c6a6a"
        padding="5px"
      >
        <Text border="2px solid #ffffff" borderRadius="50%" padding="2px">
          {ic}
        </Text>
        <Text>{name}</Text>
        <Text>{CountryUtils.getCountryName(currentOwner)}</Text>
        <FlagWrapper>
          {CountryUtils.getCountryFlagFilePath(currentOwner)}
          {isOccupied && (
            <Image
              src={WhiteFlag}
              width={30}
              height={30}
              alt={`occupied ${id}`}
            />
          )}
        </FlagWrapper>
      </Wrapper>
    </Node>
  );
};

export default Province;
