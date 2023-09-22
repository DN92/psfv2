'use client';

import supabase from '@/lib/supabaseConfig';
import { toTitleCase } from '@/lib/functions/toTitleCase';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import myConfig from '../../../_modelData/modelData';

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

type Params = {
  params: {
    uuid: string
  }
};

export default function KittenUpdate( { params: { uuid } }: Params ):React.ReactNode {

  const [kitten, setKitten] = useState<Kitten | undefined>();
  const [pgresError, setPgresError] = useState( '' );

  const [allowChangeName, setAllowChangeName] = useState( false );
  const [allowChangePrice, setAllowChangePrice] = useState( false );
  const [allowChangeBreed, setAllowChangeBreed] = useState( false );
  const [allowChangeGender, setAllowChangeGender] = useState( false );
  const [allowChangeDob, setAllowChangeDob] = useState( false );
  const [allowChangeMother, setAllowChangeMother] = useState( false );
  const [allowChangeFather, setAllowChangeFather] = useState( false );
  const [allowChangeEars, setAllowChangeEars] = useState( false );
  const [allowChangeFurColor, setAllowChangeFurColor] = useState( false );
  const [allowChangeLocation, setAllowChangeLocation] = useState( false );
  const [allowChangeDescription, setAllowChangeDescription] = useState( false );
  const [allowChangeSlug, setAllowChangeSlug] = useState( false );
  const [allowChangeStatus, setAllowChangeStatus] = useState( false );

  const [newName, setNewName] = useState( '' );
  const [newPrice, setNewPrice] = useState( -1 );
  const [newBreed, setNewBreed] = useState( '' );
  const [newGender, setNewGender] = useState( '' );
  const [newDob, setNewDob] = useState( '' );
  const [newMother, setNewMother] = useState( '' );
  const [newFather, setNewFather] = useState( '' );
  const [newEars, setNewEars] = useState( '' );
  const [newFurColor, setNewFurColor] = useState( '' );
  const [newLocation, setNewLocation] = useState( '' );
  const [newDescription, setNewDescription] = useState( '' );
  const [newSlug, setNewSlug] = useState( '' );
  const [newStatus, setNewStatus] = useState( '' );


  useEffect( () => {
    ( async ():Promise<void> => {
      const { data, error } = await supabase.from( 'kitten' ).select( '*' ).match( { uuid: uuid } ).single();
      if ( error ) setPgresError( error.message );
      if ( data ) setKitten( data );
    } )();
  }, [uuid] );

  useEffect( () => {
    console.log( 'item:: ', kitten );
  }, [kitten] );

  useEffect( () => {
    console.log( 'fetchError:: ', pgresError );
  }, [pgresError] );

  return (
    <form action="" autoComplete="off">
      <h3>Update a kitten</h3>
      <div>
        <div>
          <label htmlFor="changeName">Change Name</label>
          <input
            id="changeName"
            type="checkbox"
            checked={allowChangeName}
            onClick={():void => setAllowChangeName( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenName">Name</label>
          <input
            id="kittenName"
            type="text"
            name="name"
            disabled={!allowChangeName}
            value={allowChangeName ? ( newName ) : ( kitten?.name ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeName ) {
                setNewName( e.target.value );
              }
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="changePrice">ChangePrice</label>
          <input
            id="changePrice"
            type="checkbox"
            checked={allowChangePrice}
            onClick={():void => setAllowChangePrice( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenPrice">Price</label>
          <input
            id="kittenPrice"
            type="number"
            name="price"
            disabled
            value={allowChangePrice ? ( newPrice ) : ( kitten?.price ?? -1 )}
            onChange={( e ):void => {
              if ( allowChangePrice ) {
                setNewPrice( Number( e.target.value ) );
              }
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="changeBreed">Change Breed</label>
          <input
            id="changeBreed"
            type="checkbox"
            checked={allowChangeBreed}
            onClick={():void => { setAllowChangeBreed( ( prev ) => !prev ); }}
          />
        </div>
        <div>
          <label htmlFor="kittenBreed">Breed</label>
          <input
            id="kittenBreed"
            type="text"
            name="breed"
            disabled={!allowChangeBreed}
            value={allowChangeBreed ? ( newBreed ) : ( kitten?.breed ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeBreed ) {
                setNewBreed( ( e.target.value ) );
              }
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="kittenGender">Gender</label>
        <input
          id="kittenGender"
          type="text"
          name="gender"
          disabled
          value={kitten?.gender ?? ''}
        />
      </div>
      <div>
        <div>
          <label htmlFor="changeDob">Change date of birth</label>
          <input
            id="changeDob"
            type="checkbox"
            checked={allowChangeDob}
            onClick={():void => setAllowChangeDob( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenDob">Date of Birth</label>
          <input
            id="kittenDob"
            type="text"
            name="dob"
            disabled={allowChangeDob}
            value={allowChangeDob ? ( newDob ) : ( kitten?.dob ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeDob ) {
                setNewDob( e.target.value );
              }
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="kittenMother">Mother</label>
        <input
          id="kittenMother"
          type="text"
          name="mother"
          disabled
          value={kitten?.mother ?? ''}
        />
      </div>
      <div>
        <label htmlFor="kittenFather">Father</label>
        <input
          id="kittenFather"
          type="text"
          name="father"
          disabled
          value={kitten?.father ?? ''}
        />
      </div>
      <div>
        <label htmlFor="kittenEars">Ears</label>
        <input
          id="kittenEars"
          type="text"
          name="ears"
          disabled
          value={kitten?.ears ?? ''}
        />
      </div>
      <div>
        <div>
          <label htmlFor="changeFurColor">Change Fur Color</label>
          <input
            id="changeFurColor"
            type="text"
            checked={allowChangeFurColor}
            onClick={():void => setAllowChangeFurColor( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenFurColor">Fur Color</label>
          <input
            id="kittenFurColor"
            type="text"
            name="furColor"
            disabled={!allowChangeFurColor}
            value={allowChangeFurColor ? ( newFurColor ) : ( kitten?.furColor ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeFurColor ) {
                setNewFurColor( e.target.value );
              }
            }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="kittenEyeColor">Eye Color</label>
        <input
          id="kittenEyeColor"
          type="text"
          name="eyeColor"
          disabled
          value={kitten?.eyeColor ?? ''}
        />
      </div>
      <div>
        <div>
          <label htmlFor="changeLocation">Change Location</label>
          <input
            id="changeLocation"
            type="text"
            checked={allowChangeLocation}
            onClick={():void => setAllowChangeLocation( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenLocation">Location</label>
          <input
            id="kittenLocation"
            type="text"
            name="location"
            disabled={!allowChangeLocation}
            value={allowChangeLocation ? ( newLocation ) : ( kitten?.location ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeLocation ) {
                setNewLocation( e.target.value );
              }
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="changeDescription">Change Description</label>
          <input
            id="changeDescription"
            type="checkbox"
            checked={allowChangeDescription}
            onClick={():void => setAllowChangeDescription( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenDescription">Description</label>
          <input
            id="kittenDescription"
            type="text"
            name="description"
            disabled={!allowChangeDescription}
            value={allowChangeDescription ? ( newDescription ) : ( kitten?.description ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeDescription ) {
                setNewDescription( e.target.value );
              }
            }}
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="changeSlug">Change Slug</label>
          <input
            id="changeSlug"
            type="checkbox"
            checked={allowChangeSlug}
            onClick={():void => setAllowChangeSlug( ( prev ) => !prev )}
          />
        </div>
        <div>
          <label htmlFor="kittenSlug">Slug</label>
          <input
            id="kittenSlug"
            type="text"
            name="slug"
            disabled={!setAllowChangeSlug}
            value={allowChangeSlug ? ( newSlug ) : ( kitten?.slug ?? '' )}
            onChange={( e ):void => {
              if ( allowChangeSlug ) {
                setNewSlug( e.target.value );
              }
            }}
          />
        </div>
      </div>
    </form>

  );
}

