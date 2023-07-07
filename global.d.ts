import { StaticImageData } from 'next/image';
import type { Database as DB } from '@/lib/database.types';
import type { User } from '@supabase/auth-helpers-nextjs';

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
    iconSrc: StaticImageData,
  };

  // DATABASE SCHEMAS

  interface ExtendedUser extends User {
    permissions: string
  }

  type Database = DB;
  type Kitten = DB['public']['Tables']['kitten']['Row'];
  type Mother = DB['public']['Tables']['mother']['Row'];
  type Stud = DB['public']['Tables']['stud']['Row'];
  type Cat = Kitten | Mother | Stud | null;

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
