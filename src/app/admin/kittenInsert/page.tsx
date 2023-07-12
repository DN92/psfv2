import supabase from '@/lib/supabaseConfig';
import { toTitleCase } from '@/lib/functions/toTitleCase';
import { z } from 'zod';
import myConfig from '../_modelData/modelData';

const insertSchema = z.object({
  name: z
    .string().trim().min(2, { message: 'Name must be at least 2 characters.' }),
  breed: z
    .string().trim(),
  gender: z
    .enum(['boy', 'girl', '']),
  mother: z
    .string().trim().toLowerCase(),
  father: z
    .string().trim().toLowerCase(),
  dob: z
    .string().trim().optional(),
  ears: z
    .enum(['FOLD', 'STRAIGHT', 'tbd']),
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
    .number().int().positive(),
  slug: z
    .string().trim().toLowerCase().optional()
    .default('cute-scottish-fold-kitten-from-planet-scottish-fold'),
  status: z
    .enum(['SOLD', 'RESERVED', 'AVAILABLE']),
});

type Insert = {
  name: string | null | undefined,
  breed: string | null | undefined,
  gender: string | null | undefined,
  mother: string | null | undefined,
  father: string | null | undefined,
  dob: string | null | undefined,
  ears: string | null | undefined,
  furColor: string | null | undefined,
  eyeColor: string | null | undefined,
  location: string | null | undefined,
  description: string | null | undefined,
  price: number | null | undefined,
  slug: string | null | undefined,
  status: string | null | undefined,
};

type ValidationResponse = {
  pass: boolean,
  error: string | null,
  errorPerField: Partial<Kitten>,
};

const { genderOptions, earOptions, eyeColorsAdmin, locationOptions } = myConfig;

export default async function KittenInsert(): Promise<JSX.Element> {

  const { data: dams, error: damError } = await supabase.from('mother').select('name');
  const { data: studs, error: studError } = await supabase.from('stud').select('name');

  async function handleSubmit(formData: FormData):Promise<void> {
    'use server';

    function validateInsert(insert: Insert): ValidationResponse {

      const result: ValidationResponse = {
        pass: true,
        error: null,
        errorPerField: {},
      };

      let { name } = insert;
      if (name) {
        name = toTitleCase(name.trim());
        if (name.length < 3) {
          result.pass = false;

        }
      }

    }

    const kittenToInsert = {
      name: String(formData.get('name')),
      breed: String(formData.get('breed')),
      gender: String(formData.get('gender')),
      mother: String(formData.get('mother')),
      father: String(formData.get('father')),
      dob: String(formData.get('dob')),
      ears: String(formData.get('ears')),
      furColor: String(formData.get('furColor')),
      eyeColor: String(formData.get('eyeColor')),
      location: String(formData.get('location')),
      description: String(formData.get('description')),
      price: Number(formData.get('price')) || -1,
      slug: String(formData.get('slug')) || null,
      status: 'Available',
    };

    for (const key in kittenToInsert) {
      if (!key) {
        delete kittenToInsert[key];
      }
    }


    await supabase
      .from('kitten')
      .insert([
        kittenToInsert,
      ])
      .select();
  }

  return (
    <form action={handleSubmit} autoComplete="off">
      <h3>Create A Kitten Model</h3>
      <label htmlFor="catToCreateName">Name</label>
      <input
        id="catToCreateName"
        type="text"
        name="name"
        placeholder="Name"
      />
      <label htmlFor="kittenToCreatePrice">Price</label>
      <input
        type="number"
        name="price"
        placeholder="price"
      />
      <label htmlFor="catToCreateBreed">Breed</label>
      <input
        id="catToCreateBreed"
        type="text"
        name="breed"
        placeholder="Cat Breed"
      />
      <label htmlFor="kittenToCreateGender">Gender</label>
      <select
        id="kittenToCreateGender"
        name="gender"
      >
        <option value={genderOptions[0]}>Boy or Girl</option>
        {genderOptions.map((ear, index) => (
          <option key={index} value={ear}>{ear}</option>
        ))}
      </select>
      <label htmlFor="catToCreateDob">Date of Birth</label>
      <input
        id="catToCreateDob"
        type="text"
        name="dob"
        placeholder="Date of Birth"
      />
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
      <label htmlFor="catToCreate">Ears</label>
      <select
        name="ears"
      >
        <option value={earOptions[0]}>Fold or Straight</option>
        {earOptions.map((ear, index) => (
          <option key={index} value={ear}>{ear}</option>
        ))}
      </select>
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
      <label htmlFor="catToCreateDescription">Description</label>
      <textarea id="catToCreateDescription" name="description" cols={50} rows={8} placeholder="description" />
      <label htmlFor="catToCreateSlug">Seo Slug</label>
      <input
        id="catToCreateName"
        type="text"
        name="slug"
      />
      <div className="buttonsWrapper">
        <button className="buttonStyle2" type="submit">Create</button>
      </div>
    </form>
  );
}
