import supabase from '@/lib/supabaseConfig';
import KittenSingleton from '@/src/app/cattery/_cattery_subcomponents/KittenSingleton';

export default async function KittenUpdateList():Promise<JSX.Element> {

  const { data: kittens, error } = await supabase.from('kitten').select('*');

  if (error) {
    console.log(error);
    return (
      <div>{`something went wrong:: ${error.message}`}</div>
    );
  }

  console.log('kittens:: ', kittens);

  return (
    <div>
      <h3>Update a Kitten</h3>
      {kittens.map((kitten:Kitten) => (
        <KittenSingleton
          key={kitten.uuid}
          kitten={kitten}
          wrapperClasses={['background100']}
          asAdmin
        />
      ))}
    </div>
  );
}
