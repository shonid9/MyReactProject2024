import { ReactNode } from "react";

export type LoginUser = {
  email: string;
  password: string;
};

// type for the object
/*export type RegisterUser = {
  [x: string]: string;
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  image?: {
    url: string;
    alt?: string;
  };
  address: {
    state?: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
  isBusiness: boolean;
};
*/
export type RegisterUser = {
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  image?: {
    url: string;
    alt?: string;
  };
  address: {
    state?: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
  isBusiness: boolean;
};


  export type CardType = {
  "_id": "66018c58b1d4ce9ac54aef6d",
  "title": "dsfs",
  "subtitle": "sdfs",
  "description": "sdfs",
  "phone": "0543111512",
  "email": "sdf@ds.fsd",
  "web": "",
  "image": {
      "url": "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
      "alt": "business card image",
      "_id": "66018c58b1d4ce9ac54aef6e"
  },
  "address": {
      "state": "",
      "country": "dsfdsf",
      "city": "sdfds",
      "street": "sdf",
      "houseNumber": 435,
      "zip": 0,
      "_id": "66018c58b1d4ce9ac54aef6f"
  },
  "bizNumber": 7896158,
  "likes": [
      "65f5597d5aabf0bc85194dce",
      "653a608d1c7cd80c1fd27532"
  ],
  "user_id": "653a608d1c7cd80c1fd27532",
  "createdAt": "2024-03-25T14:38:16.630Z",
  "__v": 28
};


  export type ErrorType = {
    status: number;
    message: string;
    details: string;
  };

  // טיפוס לפונקציה שמקבלת ילדים ומחזירה אלמנט של ראקט
export type FCC = ({ children: ReactNode }) => ReactNode;

export interface User {
 
  email: string;
  password: string;
 role: "regular" | "business" | "admin";
  // Add other properties as needed
}
