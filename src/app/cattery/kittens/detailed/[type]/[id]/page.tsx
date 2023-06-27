import supabase from '@/lib/supabaseConfig';
import { redirect, notFound } from 'next/navigation';

type Params = {
  params: {
    type: 'kitten' | 'dam' | 'sire',
    id: string,
  }
};

export async function generateStaticParams():Promise<Array<Params>> {
  const { data, error } = await supabase.from('kitten').select('id, slug');

  if (!data) return [];
  console.log(data);
  return data.map((ele) => ({
    params: {
      type: 'kitten',
      id: String(ele.id),
    },
  }));
}

export default async function RedirectToUrlWithSlug({ params: { type, id } }: Params):Promise<JSX.Element> {

  const { data, error } = await supabase.from('kitten').select('id, slug').eq('id', id).single();

  if (!data) notFound();

  if (id && data.slug) {
    redirect(`/cattery/kittens/detailed/${type}/${id}`);
  }
  return (
    <h3>REdirecting</h3>
  );
}
