import supabase from '@/lib/supabaseConfig';
import styles from '../../viewUsers.module.css';

type Params = {
  params: {
    id: string,
  }
};

export const dynamic = 'force-dynamic';

export default async function UserDetails( { params: { id } } ):Promise<JSX.Element> {

  const { data: user_questionaire, error } = await supabase
    .from( 'user_questionaire' )
    .select( '*' )
    .eq( 'id', id )
    .limit( 1 )
    .single();

  if ( !user_questionaire ) return <div>fetch fail</div>;

  const questionAndAnswers = Object.entries( user_questionaire );
  const QAtoStrings = questionAndAnswers.map( ( entry ) => [entry[0], entry[1]?.toString() ?? ''] );

  return (
    <div className={styles.details_wrapper}>
      {QAtoStrings.map( ( entry, idx ) => (
        <div key={idx} className={styles.details_row}>
          <p className={styles.details_row_entry}>{entry[0]}</p>
          <p className={styles.details_row_entry}>{entry[1]}</p>
        </div>
      ) )}
    </div>
  );
}
