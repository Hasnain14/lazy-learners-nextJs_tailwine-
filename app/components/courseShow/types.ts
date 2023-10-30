
export interface CourseShowProps{
  courseData:courseType;
}

export interface courseType {
    id: number;
    name: string;
    course_name: string;
    price: number;
    description: string;
    images: string;
  };