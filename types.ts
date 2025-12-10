export interface Testimonial {
  content: string;
  author: string;
}

export interface Location {
  id: string;
  name: string;
  spots: string[];
}

export interface PackageItem {
  text: string;
  highlight?: boolean;
}