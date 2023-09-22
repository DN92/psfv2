import DetailedCat from '@/src/app/cattery/_shared_components/DetailedCat';
import supabase from '@/lib/supabaseConfig';

type ParamsObject = {
  type: 'kitten' | 'mother' | 'stud',
  id: string,
  slug: string,
};

export async function generateStaticParams():Promise<Array<ParamsObject>> {
  const { data, error } = await supabase.from( 'stud' ).select( 'id, slug' );

  if ( !data ) return [];
  return data.map( ( ele ) => ( {
    type: 'stud',
    id: String( ele.id ),
    slug: ele.slug,
  } ) );
}

export default DetailedCat;
