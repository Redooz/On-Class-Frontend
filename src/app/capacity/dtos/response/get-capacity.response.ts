import { TechnologyItem } from "../technology-item";

export interface GetCapacityResponse {
  id: number;
  name: string;
  description: string;
  technologies: TechnologyItem[];
}
