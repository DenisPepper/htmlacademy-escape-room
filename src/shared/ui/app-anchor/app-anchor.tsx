import {AnchorHTMLAttributes} from 'react';

interface AppAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  outClassNames?: string;
  callback?: () => void;
}

export default function AppAnchor(props: AppAnchorProps): JSX.Element {
  const {outClassNames, callback ,children, ...restProps} = props;

  return (
    <a className={outClassNames} onClick={callback} {...restProps}>
      {children}
    </a>
  );
}
