import {Link, LinkProps, useMatch} from 'react-router-dom';
import {buildNames} from '../../lib/build-names/build-names';
import {useSelector} from 'react-redux';
import {
  getAuthStatus
} from '../../../app/providers/store-provider/slices/auth/selectors/get-auth-status/get-auth-status';

interface AppLinkProps extends LinkProps {
  hidden?: boolean;
}

export default function AppLink(props: AppLinkProps): JSX.Element {
  const { hidden = false, children, to: path, } = props;

  const shouldHidden = useSelector(getAuthStatus) !== 'YES';

  const match = useMatch(path as string);

  const classNames = buildNames(
    ['link'],
    {
      active: Boolean(match),
      'visually-hidden': hidden && shouldHidden,
    }
  );

  // eslint-disable-next-line no-console
  console.log(classNames);

  return (
    <Link className={classNames} to={path}>
      {children}
    </Link>
  );
}
