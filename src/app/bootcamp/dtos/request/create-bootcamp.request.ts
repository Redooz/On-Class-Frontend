import { OnClassItem } from '../../../utils/on-class-item';

export interface CreateBootcampRequest {
  name: string;
  description: string;
  capacities: Array<OnClassItem>;
}
