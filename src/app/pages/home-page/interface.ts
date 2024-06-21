export interface Interface {
    name: string,
    description: string,
    location: string,
    district: string,
    category: string,
    entry_fee?: {
      adult: number,
      child: number
    };
    visiting_hours?: {
      monday: string,
      tuesday: string,
      wednesday: string,
      thursday: string,
      friday: string,
      saturday: string,
      sunday: string
    };
    photos?: {
      photo1: string,
      photo2: string,
      photo3: string
    };
  
  
  }
