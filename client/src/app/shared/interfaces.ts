export interface User {
  email: string;
  password: string;
}

export interface Message {
  message: string;
}
export interface Post {
  title: string;
  text: string;
  url: string;
  imageSrc?: string;
  list?: Array<string>[];
  flag?: Boolean;
  _id?: string;
}

// export interface CategoryPostName {
//  categoryPostName?: string;
//  _id?: string;
// }
