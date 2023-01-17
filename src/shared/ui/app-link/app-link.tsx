import {Link, LinkProps} from 'react-router-dom';

type AppLinkProps = LinkProps

export default function AppLink(props: AppLinkProps): JSX.Element {

  const { children, to: path, } = props;

  return (
    <Link className={'link'} to={path}>
      {children}
    </Link>
  );
}
