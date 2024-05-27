import { GetCapacityResponse } from "src/app/capacity/dtos/response/get-capacity.response";

export interface GetBootcampResponse {
  id: number;
  name: string;
  description: string;
  capacities: Array<GetCapacity>;
}

// capacity is equal to GetCapacityResponse, but without the description field
interface GetCapacity extends Omit<GetCapacityResponse, 'description'> {}
