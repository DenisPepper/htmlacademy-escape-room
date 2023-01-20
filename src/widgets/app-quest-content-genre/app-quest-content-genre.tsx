interface AppQuestContentGenreProps {
  typeName: string;
}

export default function AppQuestContentGenre(props: AppQuestContentGenreProps): JSX.Element {
  const {typeName} = props;

  return (
    <>
      <span className="visually-hidden">Жанр:</span>{typeName}
    </>
  );
}
