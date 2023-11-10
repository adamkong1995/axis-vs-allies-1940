import { Country } from "../../Types/Country";

export interface IProvince {
  owner: Country;
  currentOwner?: Country;
  name?: string;
  id: string;
  isCapital?: boolean;
  ic?: number;
}
