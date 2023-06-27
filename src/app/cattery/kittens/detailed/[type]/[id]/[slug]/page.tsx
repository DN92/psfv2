import DetailedCat from '@/src/app/cattery/_shared_components/DetailedCat';
import supabase from '@/lib/supabaseConfig';

type ParamsObject = {
  type: string,
  id: number,
  slug: string,
};

export async function generateStaticParams():Promise<Array<ParamsObject>> {
  const { data, error } = await supabase.from('kitten').select('id, slug');

  if (!data) return [];
  console.log(data);
  return data.map((ele) => ({
    type: 'kitten',
    id: ele.id,
    slug: ele.slug,
  }));
}

export default DetailedCat;
