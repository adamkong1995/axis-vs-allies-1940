import { IDiv } from "./Type";
import styled from "styled-components";

const StyledDiv = styled.div<IDiv>`
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  border: ${(props) => props.border || "none"};
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`};
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.alignContent && `align-content: ${props.alignContent};`}
`;

const Div = ({ children, ...props }: IDiv) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Div;
