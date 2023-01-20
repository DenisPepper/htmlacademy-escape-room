import {useParams} from 'react-router-dom';

export default function QuestPage(): JSX.Element {
  const {id = ''} = useParams();

  return (
    <main className={'decorated-page quest-page'}>
      <div className={'container container--size-l'}>
        {id}
      </div>
    </main>
  );
}


/*
<div className={'quest-page__content'}>
 */
