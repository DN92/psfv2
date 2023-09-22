'use client';

import supabase from '@/lib/supabaseConfig';
import { toTitleCase } from '@/lib/functions/toTitleCase';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import myConfig from '../../_modelData/modelData';

const insertSchema = z.object( {
  name: z
    .string().trim().min( 2, { message: 'Name must be at least 2 characters.' } ),
  breed: z
    .string().trim().min( 2, { message: 'Breed must be at least 2 characters' } ),
  gender: z
    .enum( ['boy', 'girl', ''] ),
  mother: z
    .string().trim().toLowerCase().optional(),
  father: z
    .string().trim().toLowerCase(),
  dob: z
    .string().trim().optional(),
  ears: z
    .enum( ['FOLD', 'STRAIGHT', 'tbd', ''] ),
  furColor: z
    .string().trim().toLowerCase().optional()
    .default( '' ),
  eyeColor: z
    .string().trim().toLowerCase().optional()
    .default( '' ),
  location: z
    .string().trim().toLowerCase(),
  description: z
    .string().trim().optional()
    .default( '' ),
  price: z
    .number().int(),
  slug: z
    .string().trim().toLowerCase().optional()
    .default( 'cute-scottish-fold-kitten-from-planet-scottish-fold' ),
  status: z
    .enum( ['Sold', 'Reserved', 'Available', ''] ),
} );

type FormErrors = {
  name: string,
  breed: string,
  gender: string,
  mother: string,
  father: string,
  dob: string,
  ears: string,
  furColor: string,
  eyeColor: string,
  location: string,
  description: string,
  price: number | null,
  slug: string,
};

type zError = {
  code: string,
  minimum: number,
  type: string,
  inclusive: boolean,
  exact: boolean,
  message: string,
  path: string[],
};

type InsertSchema = z.infer<typeof insertSchema>;

export default function KittenInsert(): React.ReactNode {

  const { genderOptions, earOptions, eyeColorsAdmin, locationOptions } = myConfig;

  const [dams, setDams] = useState<Array<Mother>>( [] );
  const [studs, setStuds] = useState<Array<Stud>>( [] );
  const [formErrors, setFormErrors] = useState<Partial<FormErrors>>( {
    name: '',
    breed: '',
    gender: '',
    mother: '',
    father: '',
    dob: '',
    ears: '',
    furColor: '',
    eyeColor: '',
    location: '',
    description: '',
    price: null,
    slug: '',
  } );
  const [pgresError, setPgresError] = useState( '' );

  useEffect( () => {
    ( async (): Promise<void> => {
      const [res1, res2] = await Promise.all( [
        supabase.from( 'mother' ).select( 'name' ),
        supabase.from( 'stud' ).select( 'name' ),
      ] );
      if ( res1?.data ) {

        setDams( res1.data as Mother[] );
      }
      if ( res2?.data ) setStuds( res2?.data as Stud[] );
    } )();
  }, [] );

  useEffect( () => {
    // TODO HANDLE POSTGRES ERROR
    console.log( 'postgrestError:: ', pgresError );
  }, [pgresError] );

  function handleSubmit( formData: FormData ):void {

    const itemToInsert = {
      name: String( formData.get( 'name' ) ),
      breed: String( formData.get( 'breed' ) ),
      gender: String( formData.get( 'gender' ) ),
      mother: toTitleCase( String( formData.get( 'mother' ) ) ),
      father: toTitleCase( String( formData.get( 'father' ) ) ),
      dob: String( formData.get( 'dob' ) ),
      ears: String( formData.get( 'ears' ) ),
      furColor: String( formData.get( 'furColor' ) ),
      eyeColor: String( formData.get( 'eyeColor' ) ),
      location: String( formData.get( 'location' ) ),
      description: String( formData.get( 'description' ) ),
      price: Number( formData.get( 'price' ) ) || -1,
      slug: String( formData.get( 'slug' ) ),
      status: 'Available',
    };

    async function insertItem( item: KittenInsert ): Promise<Kitten | PostgrestError | undefined> {
      console.log( 'attempting to insert new item:: ', item );
      const { data, error } = await supabase.from( 'kitten' ).insert( [item] ).select();
      if ( error ) {
        setPgresError( error.message ?? '' );
      }
      if ( data ) {
        console.log( 'insert success', data );
        // @ts-ignore
        return data;
      }
    }

    try {
      const data = insertSchema.parse( itemToInsert );
      console.log( 'success:: ', data );
      insertItem( data );
    } catch ( zodError ) {

      const updatedErrors: { [key:string]:string } = {};
      // @ts-ignore
      if ( !zodError.issues ) return;
      // @ts-ignore
      zodError.issues.forEach( ( error: zError ) => {
        const key = error.path[0];
        updatedErrors[key] = error.message;
      } );

      console.log( updatedErrors );

      setFormErrors( { ...updatedErrors } );
    }
  }

  return (
    <form action={handleSubmit} autoComplete="off">
      <h3>Create A Kitten Model</h3>
      <div>
        <p>{formErrors.name ?? ''}</p>
        <label htmlFor="catToCreateName">Name</label>
        <input
          id="catToCreateName"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div>
        <p>{formErrors.price ?? ''}</p>
        <label htmlFor="kittenToCreatePrice">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
        />
      </div>
      <div>
        <p>{formErrors.breed ?? ''}</p>
        <label htmlFor="catToCreateBreed">Breed</label>
        <input
          id="catToCreateBreed"
          type="text"
          name="breed"
          placeholder="Cat Breed"
        />
      </div>
      <div>
        <p>{formErrors.gender ?? ''}</p>
        <label htmlFor="kittenToCreateGender">Gender</label>
        <select
          id="kittenToCreateGender"
          name="gender"
        >
          <option value={genderOptions[0]}>Boy or Girl</option>
          {genderOptions.map( ( gender, index ) => (
            <option key={index} value={gender}>{gender}</option>
          ) )}
        </select>
      </div>
      <div>
        <p>{formErrors.dob ?? ''}</p>
        <label htmlFor="catToCreateDob">Date of Birth</label>
        <input
          id="catToCreateDob"
          type="text"
          name="dob"
          placeholder="Date of Birth"
        />
      </div>
      <div>
        <p>{formErrors.mother ?? ''}</p>
        <label htmlFor="kittenToCreateMother">Mother</label>
        <select
          id="kittenToCreateMother"
          name="mother"
        >
          <option value="">Select Dam</option>
          {dams.map( ( dam, index ) => (
            <option key={`${dam.name}${index}`} value={dam.name}>{dam.name}</option>
          ) )}
        </select>
      </div>
      <div>
        <p>{formErrors.father ?? ''}</p>
        <label htmlFor="kittenToCreate">Father</label>
        <select
          id="kittenToCreateFather"
          name="father"
        >
          <option value="">Select Stud</option>
          {studs.map( ( stud, index ) => (
            <option key={index} value={stud.name}>{stud.name}</option>
          ) )}
        </select>
      </div>
      <div>
        <p>{formErrors.ears ?? ''}</p>
        <label htmlFor="catToCreate">Ears</label>
        <select
          name="ears"
        >
          <option value={earOptions[0]}>Fold or Straight</option>
          {earOptions.map( ( ear, index ) => (
            <option key={index} value={ear}>{ear}</option>
          ) )}
        </select>
      </div>
      <div>
        <p>{formErrors.furColor ?? ''}</p>
        <label htmlFor="catToCreateFur">Fur Color</label>
        <input
          id="catToCreateFur"
          type="text"
          name="furColor"
          placeholder="Fur Color"
        />
        <label htmlFor="catToCreateEyes">Eye Color</label>
        <select
          id="catToCreateEyes"
          name="eyeColor"
        >
          <option value="">Eye Color</option>
          {eyeColorsAdmin.map( ( color, index ) => (
            <option key={index} value={color}>{color}</option>
          ) )}
        </select>
      </div>
      <div>
        <p>{formErrors.location ?? ''}</p>
        <label htmlFor="catToCreateLocation">Location</label>
        <select
          id="catToCreateLocation"
          name="location"
          placeholder="Location"
        >
          {locationOptions.map( ( loc, idx ) => (
            <option key={idx + loc} value={loc}>{loc}</option>
          ) )}
        </select>
      </div>
      <div>
        <p>{formErrors.description ?? ''}</p>
        <label htmlFor="catToCreateDescription">Description</label>
        <textarea id="catToCreateDescription" name="description" cols={50} rows={8} placeholder="Description" />
      </div>
      <div>
        <p>{formErrors.slug ?? ''}</p>
        <label htmlFor="catToCreateSlug">Seo Slug</label>
        <input
          id="catToCreateName"
          type="text"
          name="slug"
        />
      </div>
      <div className="buttonsWrapper">
        <button className="buttonStyle2" type="submit">Create</button>
      </div>
    </form>

  );
}
