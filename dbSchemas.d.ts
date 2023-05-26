declare global {

  interface CatSchema {
    id: number,
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
  }

  interface AdultCatShema extends CatSchema {
    status: 'Active' | 'Retired',
    breed: string,
    mainImageSrcValue: string,
    regNum: number | null | '',
  }
}
