'use client';

import supabase from '@/lib/supabaseConfig';
import { toTitleCase } from '@/lib/functions/toTitleCase';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import myConfig from '../_modelData/modelData';

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

const insertSchema = z.object({
  name: z
    .string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  breed: z
    .string().trim().min(2, { message: 'Breed must be at least 2 characters' }),
  gender: z
    .enum(['boy', 'girl', '']),
  mother: z
    .string().trim().toLowerCase().optional(),
  father: z
    .string().trim().toLowerCase(),
  dob: z
    .string().trim().optional(),
  ears: z
    .enum(['FOLD', 'STRAIGHT', 'tbd', '']),
  furColor: z
    .string().trim().toLowerCase().optional()
    .default(''),
  eyeColor: z
    .string().trim().toLowerCase().optional()
    .default(''),
  location: z
    .string().trim().toLowerCase(),
  description: z
    .string().trim().optional()
    .default(''),
  price: z
    .number().int(),
  slug: z
    .string().trim().toLowerCase().optional()
    .default('cute-scottish-fold-kitten-from-planet-scottish-fold'),
  status: z
    .enum(['Sold', 'Reserved', 'Available', '']),
});

  type InsertSchema = z.infer<typeof insertSchema>;

export default function KittenInsert(): React.ReactNode {

  const { genderOptions, earOptions, eyeColorsAdmin, locationOptions } = myConfig;

  const [dams, setDams] = useState([]);
  const [studs, setStuds] = useState([]);
  const [attemptInsert, setAttemptInsert] = useState(false);


  useEffect(() => {
    (async (): Promise<void> => {
      const [res1, res2] = await Promise.all([
        await supabase.from('mother').select('name'),
        await supabase.from('stud').select('name'),
      ]);
      if (res1.data) setDams(res1.data);
      if (res2.data) setStuds(res2.data);
    })();
  }, []);

  const [firstFormAttempt, setFirstFormAttempt] = useState(true);
  const [formErrors, setFormErrors] = useState<Partial<FormErrors>>({
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
  });

  function handleSubmit(formData: FormData):void {

    const itemToInsert = {
      name: String(formData.get('name')),
      breed: String(formData.get('breed')),
      gender: String(formData.get('gender')),
      mother: toTitleCase(String(formData.get('mother'))),
      father: toTitleCase(String(formData.get('father'))),
      dob: String(formData.get('dob')),
      ears: String(formData.get('ears')),
      furColor: String(formData.get('furColor')),
      eyeColor: String(formData.get('eyeColor')),
      location: String(formData.get('location')),
      description: String(formData.get('description')),
      price: Number(formData.get('price')) || -1,
      slug: String(formData.get('slug')),
      status: 'Available',
    };

    async function insertItem(item: KittenInsert): Promise<Kitten | PostgrestError> {
      console.log('attempting to insert new item:: ', item);
      const { data, error } = await supabase.from('kitten').insert([item]).select();
      if (data) {
        console.log('insert success', data);
        // @ts-ignore
        return data;
      }
      console.log('insert failure', error);
      return error;
    }

    try {
      const data = insertSchema.parse(itemToInsert);
      console.log('success:: ', data);
      insertItem(data);
    } catch (zodError) {

      const updatedErrors: Partial<FormErrors> = {};

      zodError.issues.forEach((error: zError) => {
        const key = error.path[0];
        updatedErrors[key] = error.message;
      });

      console.log(updatedErrors);

      setFormErrors({ ...updatedErrors });
    }

    // setFirstFormAttempt(false);

    // const updatedErrors: FormErrors = {
    //   // @ts-ignore next-line
    //   name: insertSchema.shape.name.safeParse(String(formData.get('name'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   breed: insertSchema.shape.breed.safeParse(String(formData.get('breed'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   gender: insertSchema.shape.gender.safeParse(String(formData.get('gender'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   mother: insertSchema.shape.mother.safeParse(toTitleCase(String(formData.get('mother')))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   father: insertSchema.shape.father.safeParse(toTitleCase(String(formData.get('father')))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   dob: insertSchema.shape.dob.safeParse(String(formData.get('dob'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   ears: insertSchema.shape.ears.safeParse(String(formData.get('ears'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   furColor: insertSchema.shape.furColor.safeParse(String(formData.get('furColor'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   eyeColor: insertSchema.shape.eyeColor.safeParse(String(formData.get('eyeColor'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   location: insertSchema.shape.location.safeParse(String(formData.get('location'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   description: insertSchema.shape.description.safeParse(String(formData.get('description'))).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   price: insertSchema.shape.price.safeParse(Number(formData.get('price') || -1)).error?.issues[0]?.message ?? '',
    //   // @ts-ignore next-line
    //   slug: insertSchema.shape.slug.safeParse(String(formData.get('slug'))).error?.issues[0]?.message ?? '',
    // };

    // setFormErrors(updatedErrors);


    // let attempInsert = true;

    // for (const key in formErrors) {
    //   if (formErrors[key]) {
    //     attempInsert = false;
    //   }
    // }


    // if (attempInsert) {
    //   insertItem(itemToInsert);
    // }

  }

  useEffect(() => {
    if (attemptInsert) {
      for (const key in formErrors) {
        if (formErrors[key]) {
          setAttemptInsert(false);
          return;
        }
      }
    }
  }, [attemptInsert]);

  return (
    <form action={handleSubmit} autoComplete="off">
      <h3>Create A Kitten Model</h3>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.name ?? ''}</p>
        }
        <label htmlFor="catToCreateName">Name</label>
        <input
          id="catToCreateName"
          type="text"
          name="name"
          placeholder="Name"
        />
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.price ?? ''}</p>
        }
        <label htmlFor="kittenToCreatePrice">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
        />
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.breed ?? ''}</p>
        }
        <label htmlFor="catToCreateBreed">Breed</label>
        <input
          id="catToCreateBreed"
          type="text"
          name="breed"
          placeholder="Cat Breed"
        />
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.gender ?? ''}</p>
        }
        <label htmlFor="kittenToCreateGender">Gender</label>
        <select
          id="kittenToCreateGender"
          name="gender"
        >
          <option value={genderOptions[0]}>Boy or Girl</option>
          {genderOptions.map((gender, index) => (
            <option key={index} value={gender}>{gender}</option>
          ))}
        </select>
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.dob ?? ''}</p>
        }
        <label htmlFor="catToCreateDob">Date of Birth</label>
        <input
          id="catToCreateDob"
          type="text"
          name="dob"
          placeholder="Date of Birth"
        />
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.mother ?? ''}</p>
        }
        <label htmlFor="kittenToCreateMother">Mother</label>
        <select
          id="kittenToCreateMother"
          name="mother"
        >
          <option value="">Select Dam</option>
          {dams.map((dam, index) => (
            <option key={index} value={dam.name}>{dam.name}</option>
          ))}
        </select>
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.father ?? ''}</p>
        }
        <label htmlFor="kittenToCreate">Father</label>
        <select
          id="kittenToCreateFather"
          name="father"
        >
          <option value="">Select Stud</option>
          {studs.map((stud, index) => (
            <option key={index} value={stud.name}>{stud.name}</option>
          ))}
        </select>
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.ears ?? ''}</p>
        }
        <label htmlFor="catToCreate">Ears</label>
        <select
          name="ears"
        >
          <option value={earOptions[0]}>Fold or Straight</option>
          {earOptions.map((ear, index) => (
            <option key={index} value={ear}>{ear}</option>
          ))}
        </select>
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.furColor ?? ''}</p>
        }
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
          {eyeColorsAdmin.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.location ?? ''}</p>
        }
        <label htmlFor="catToCreateLocation">Location</label>
        <select
          id="catToCreateLocation"
          name="location"
          placeholder="Location"
        >
          {locationOptions.map((loc, idx) => (
            <option key={idx + loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.description ?? ''}</p>
        }
        <label htmlFor="catToCreateDescription">Description</label>
        <textarea id="catToCreateDescription" name="description" cols={50} rows={8} placeholder="Description" />
      </div>
      <div>
        {
          !firstFormAttempt && <p>{formErrors.slug ?? ''}</p>
        }
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
