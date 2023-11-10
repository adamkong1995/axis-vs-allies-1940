import { IProvince } from "./Type";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Div from "../../atoms/Div";

const Wrapper = styled(Div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

const Province = ({
  owner,
  currentOwner,
  name,
  id,
  isCapital,
  ic,
}: IProvince) => {
  return (
    <Wrapper border="1px solid #000000" backgroundColor="#6c6a6a" padding="5px">
      <Text border="2px solid #ffffff" borderRadius="50%" padding="2px">
        {ic}
      </Text>
      <Text>{name}</Text>
      <Text>{owner}</Text>
    </Wrapper>
  );
};

export default Province;
