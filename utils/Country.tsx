import { Country } from "../components/Types/Country";
import Image from "next/image";
import CanadaFlag from "../public/flags/canadaFlag.svg";
import FranceFlag from "../public/flags/franceFlag.svg";
import GermanyFlag from "../public/flags/germanyFlag.svg";
import ItalyFlag from "../public/flags/italyFlag.svg";
import JapanFlag from "../public/flags/japanFlag.svg";
import UkFlag from "../public/flags/ukFlag.svg";
import UsaFlag from "../public/flags/usaFlag.svg";
import UssrFlag from "../public/flags/ussrFlag.svg";
class CountryUtils {
  static getCountryName(country: Country): string {
    switch (country) {
      case Country.GERMANY:
        return "Germany";
      case Country.ITALY:
        return "Italy";
      case Country.JAPAN:
        return "Japan";
      case Country.USA:
        return "United States";
      case Country.UK:
        return "United Kingdom";
      case Country.COMMONWEALTH:
        return "The Commonwealth";
      case Country.FRANCE:
        return "France";
      case Country.SOVIETUNION:
        return "Soviet Union";
      case Country.CHINA:
        return "China";
      default:
        return "";
    }
  }

  static getCountryFlagFilePath(
    country: Country,
    height?: number,
    width?: number
  ): React.ReactNode | null {
    let svg;
    switch (country) {
      case Country.GERMANY:
        svg = GermanyFlag;
        break;
      case Country.ITALY:
        svg = ItalyFlag;
        break;
      case Country.JAPAN:
        svg = JapanFlag;
        break;
      case Country.USA:
        svg = UsaFlag;
        break;
      case Country.UK:
        svg = UkFlag;
        break;
      case Country.COMMONWEALTH:
        svg = CanadaFlag;
        break;
      case Country.FRANCE:
        svg = FranceFlag;
        break;
      case Country.SOVIETUNION:
        svg = UssrFlag;
        break;
      case Country.CHINA:
        break;
    }

    return (
      svg && (
        <Image
          src={svg}
          alt={CountryUtils.getCountryName(country)}
          width={width || 30}
          height={height || 30}
        />
      )
    );
  }
}
export { CountryUtils };
