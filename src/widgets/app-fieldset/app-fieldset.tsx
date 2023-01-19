interface AppFieldsetProps {
  legendName?: string;
  children: JSX.Element;
}

export default function AppFieldset(props: AppFieldsetProps): JSX.Element {
  const { children, legendName = ''} = props;

  return (
    <fieldset className={'filter__section'}>
      <legend className="visually-hidden">{legendName}</legend>
      {children}
    </fieldset>
  );
}
