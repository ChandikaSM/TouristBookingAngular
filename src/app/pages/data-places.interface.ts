export interface Datas {
  placeId: string;
  name: string;
  description: string;
  location: string;
  district: string;
  category: string;
  entry_fee: {
    adult: number;
    child: number;
  };
  visiting_hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  images: Image[];
}

export interface Image {
  fileName: string;
  link: string;
}
