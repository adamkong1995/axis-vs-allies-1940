import { INode } from "../../atoms/Node";
import { Country } from "../../Types/Country";

export interface ISeaNode extends INode {
  currentOwner?: Country;
  isConveyPath?: boolean;
}
