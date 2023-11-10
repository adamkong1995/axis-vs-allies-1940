import { Country } from "../../Types/Country";
import { INode } from "../../atoms/Node";

export interface IProvince extends INode {
  owner: Country;
  currentOwner: Country;
  isCapital?: boolean;
  ic?: number;
}
