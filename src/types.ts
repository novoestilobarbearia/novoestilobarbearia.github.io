export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}