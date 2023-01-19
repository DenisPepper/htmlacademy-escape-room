interface AppPageHiddenTitleProps {
  textContent?: string;
}

export default function AppPageHiddenTitle(props: AppPageHiddenTitleProps): JSX.Element {
  const { textContent = ''} = props;
  return <h2 className="title visually-hidden">{textContent}</h2>;
}
