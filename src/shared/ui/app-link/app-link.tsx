import {Link, LinkProps, useMatch} from 'react-router-dom';
import {buildNames} from '../../lib/build-names/build-names';

type AppLinkProps = LinkProps

export default function AppLink(props: AppLinkProps): JSX.Element {
  const { children, to: path, } = props;

  const match = useMatch(path as string);

  const classNames = buildNames(
    ['link'],
    {
      'active': Boolean(match),
    }
  );

  return (
    <Link className={classNames} to={path}>
      {children}
    </Link>
  );
}
