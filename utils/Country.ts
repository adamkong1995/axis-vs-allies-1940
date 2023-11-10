import { Country } from "../components/Types/Country";

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

  static getCountryFlagFilePath(country: Country): string {
    switch (country) {
      case Country.GERMANY:
        return "@/public/flags/germanyFlag.svg";
      case Country.ITALY:
        return "@/public/flags/italyFlag.svg";
      case Country.JAPAN:
        return "@/public/flags/japanFlag.svg";
      case Country.USA:
        return "@/public/flags/usaFlag.svg";
      case Country.UK:
        return "@/public/flags/ukFlag.svg";
      case Country.COMMONWEALTH:
        return "@/public/flags/canadaFlag.svg";
      case Country.FRANCE:
        return "@/public/flags/franceFlag.svg";
      case Country.SOVIETUNION:
        return "@/public/flags/ussrFlag.svg";
      case Country.CHINA:
        return "";
      default:
        return "";
    }
  }
}
export { CountryUtils };
