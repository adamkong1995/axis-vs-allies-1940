import { IText } from "./Type";
import styled from "styled-components";

const StyledText = styled.div<IText>``;

const Text = ({ children, ...props }: IText) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
