export interface CreateBootcampVersionRequest {
  startDate: Date;
  endDate: Date;
  maxNumOfStudents: number;
  bootcamp : {
    id: number;
  }
}

