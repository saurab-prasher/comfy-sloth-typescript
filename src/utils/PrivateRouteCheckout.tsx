import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

interface PrivateRouteProps {
  component: any;
  path: string;
  exact?: boolean | undefined;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const {
    state: { currentUser },
  } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        );
      }}
    />
  );
};

export default PrivateRoute;
