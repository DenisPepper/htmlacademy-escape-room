import React from 'react';

interface AppRadioInputOfGenreProps {
  labelName?: string;
  iconPath?: string;
  iconWidth:string;
  iconHeight:string;
  id:string;
}

export default function AppRadioInputOfGenre(props:AppRadioInputOfGenreProps): JSX.Element {
  const {
    id,
    labelName = '',
    iconPath = '',
    iconWidth = '',
    iconHeight = '',
  } = props;

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line no-console
    //console.log(evt.currentTarget);
  };

  return (
    <>
      <input
        type="radio"
        name="type"
        id={id}
        onChange={handleOnChange}
      />

      <label className="filter__label" htmlFor={id}>
        <svg
          className="filter__icon"
          width={iconWidth}
          height={iconHeight}
          aria-hidden="true"
        >
          <use xlinkHref={`#${iconPath}`} />
        </svg>
        <span className="filter__label-text">{labelName}</span>
      </label>
    </>
  );
}
