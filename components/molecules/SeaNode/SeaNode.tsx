import { ISeaNode } from "./Type";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Div from "../../atoms/Div";
import { CountryUtils } from "../../../utils";
import Node from "../../atoms/Node";
import ConvoyIcon from "../../../public/units/convoyIcon.svg";
import Image from "next/image";

const Wrapper = styled(Div)`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 5px;
`;

const SeaNode = ({ children, id, name, isConveyPath }: ISeaNode) => {
  return (
    <Node id={id} name={name}>
      <Wrapper
        border="1px solid #ffffff"
        backgroundColor="#3f8ad4"
        padding="10px"
      >
        <Text>{id}</Text>
        {isConveyPath && (
          <Image src={ConvoyIcon} alt="Convoy Icon" width={40} height={40} />
        )}
      </Wrapper>
    </Node>
  );
};

export default SeaNode;
