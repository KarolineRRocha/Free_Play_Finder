import { MinimumSystemRequirements } from "./minimumSystemRequirements";
import { Screenshots } from "./screenshots";

export interface GameDetails {
  id?: string;
  title: string;
  thumbnail: string;
  status: string;
  shortDescription: string;
  description: string;
  gameUrl: string;
  publisher: string;
  developer: string;
  genre:string;
  platform:string;
  releaseDate: string;
  freetogameProfileUrl: string;
  minimumSystemRequirements: MinimumSystemRequirements;
  screenshots: Array<Screenshots>;
}