import { minimumSystemRequirements } from "./minimumSystemRequirements";
import { screenshots } from "./screenshots";

export interface gameDetails {
  id?: string;
  title: string;
  thumbnail: string;
  status: string;
  shortDescription: string;
  description: string;
  gameUrl: string;
  publisher: string;
  developer: string;
  releaseDate: string;
  freetogameProfileUrl: string;
  minimumSystemRequirements: minimumSystemRequirements;
  screenshots: Array<screenshots>;
}