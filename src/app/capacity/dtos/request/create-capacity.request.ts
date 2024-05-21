import { TechnologyItem } from "../technology-item";

export interface CreateCapacityRequest {
  name: string;
  description: string;
  technologies: Array<TechnologyItem>
}
