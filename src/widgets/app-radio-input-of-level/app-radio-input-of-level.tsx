interface AppRadioInputOfLevelProps {
  labelName?: string;
  id:string;
}

export default function AppRadioInputOfLevel(props: AppRadioInputOfLevelProps): JSX.Element {
  const {id, labelName = ''} = props;

  return (
    <>
      <input type="radio" name="level" id={id}/>
      <label className="filter__label" htmlFor={id}>
        <span className="filter__label-text">{labelName}</span>
      </label>
    </>
  );
}
