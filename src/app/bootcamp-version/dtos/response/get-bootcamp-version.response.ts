export interface GetBootcampVersionResponse {
  id: number;
  startDate: string;
  endDate: string;
  maxNumOfStudents: number;
  bootcamp: {
    id: number;
    name: string;
  };
}
