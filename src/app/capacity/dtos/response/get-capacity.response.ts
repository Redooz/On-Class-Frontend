import { OnClassItem } from "../../../utils/on-class-item";

export interface GetCapacityResponse {
  id: number;
  name: string;
  description: string;
  technologies: OnClassItem[];
}
