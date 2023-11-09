import { IDiv } from "./Type";
import styled from "styled-components";

const StyledDiv = styled.div<IDiv>`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  border: ${(props) => props.border || "none"};
`;

const Div = ({ padding, margin, children, border }: IDiv) => {
  return (
    <StyledDiv padding={padding} margin={margin} border={border}>
      {children}
    </StyledDiv>
  );
};

export default Div;
