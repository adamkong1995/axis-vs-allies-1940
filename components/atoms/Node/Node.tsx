import { INode } from "./Type";
import styled from "styled-components";
import Div from "../Div";

const StyledNode = styled(Div)``;

const Node = ({ name, id, children }: INode) => {
  return <StyledNode>{children}</StyledNode>;
};

export default Node;
