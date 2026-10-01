export type CardProductType = {
  titleProduct: string;
  imageCourse: string;
  mentor: string;
  profile: string;
  categorie: string[];
  price: number;
  materi: number;
  id_course: number;
};

export type CourseCategorieType = {
    name: string,
    imageDark: string
    imageLight: string
}

export type ListCourseProductType = {
    id_course: number,
    course: string,
    imageCourse: string,
    mentor: string,
    profile: string,
    categorie: string[],
    price: number,
    materi: number
}

export type MateriCourseIdType = {
    id_course: number,
    id_materi: number,
    materi: string
}