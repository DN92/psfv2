import Image from 'next/image';
import type { Database as DB } from '@/lib/database.types';

declare global {

  type CatteryMenuSelection = {
    href: string,
    name: string,
    cssClasses?: Array<string>,
  };

  type NavLink = {
    name: string,
    href: string,
  };

  type SocialMediaDatapoint = {
    site: string,
    href: string,
    iconSrc: Image,
  };

}

// DATABASE SCHEMAS

declare global {

  type Database = DB;
  type Kitten = Databse['public']['Tables']['kitten']['Row'];

  interface CatSchema {
    id: number,
    model: 'kitten' | 'dam' | 'sire',
    name: string,
    gender: 'Boy' | 'Girl' | 'TBD' | 'unknown',
    ears: 'Straight' | 'Fold' | 'TBD' | 'unknown',
    furColor: string,
    eyeColor: string,
    dob: string,
    description: string,
    isHidden: boolean,
    isAdminHidden: boolean,
  }

  interface KittenSchema extends CatSchema {
    mother: string,
    father: string,
    status: 'Available' | 'Sold' | 'Reserved',
    breed: string,
    price: number,
  }

  interface AdultCatSchema extends CatSchema {
    status: 'Active' | 'Retired',
    breed: string,
    mainImageSrcValue: string,
    regNum: number | null | '',
  }
}
