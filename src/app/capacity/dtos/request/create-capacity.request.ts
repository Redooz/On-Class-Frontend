import { OnClassItem } from "../../../utils/on-class-item";

export interface CreateCapacityRequest {
  name: string;
  description: string;
  technologies: Array<OnClassItem>
}
