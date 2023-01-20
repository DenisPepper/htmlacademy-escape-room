interface AppQuestCardTagsProps {
  name: string;
  min: number;
  max: number;
}

export default function AppQuestCardTags(props: AppQuestCardTagsProps): JSX.Element {
  const {name, min, max} = props;

  return (
    <ul className="tags quest-card__tags">
      <li className="tags__item">
        <svg width="11" height="14" aria-hidden="true">
          <use xlinkHref="#icon-person"></use>
        </svg>
        {`${min}-${max}`}&nbsp;чел
      </li>
      <li className="tags__item">
        <svg width="14" height="14" aria-hidden="true">
          <use xlinkHref="#icon-level"></use>
        </svg>
        {name}
      </li>
    </ul>
  );
}
