import supabase from '@/lib/supabaseConfig';

import { redirect, notFound } from 'next/navigation';

type Params = {
  params: {
    type: 'kitten' | 'mother' | 'stud',
    id: string,
  }
};

export async function generateStaticParams():Promise<Array<Params>> {
  const { data, error } = await supabase.from('stud').select('id, slug');

  if (!data) return [];
  return data.map((ele) => ({
    params: {
      type: 'stud',
      id: String(ele.id),
    },
  }));
}

export default async function RedirectToUrlWithSlug({ params: { type, id } }: Params):Promise<JSX.Element> {

  const { data, error } = await supabase.from('stud').select('id, slug').eq('id', id).single();

  if (!data) notFound();

  if (id && data.slug) {
    redirect(`/cattery/studs/detailed/${type}/${id}/${data.slug}`);
  }
  return (
    <h3>REdirecting</h3>
  );
}
