import { IText } from "./Type";
import styled from "styled-components";
import Div from "../Div";

const StyledText = styled(Div)<IText>``;

const Text = ({ children, ...props }: IText) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
