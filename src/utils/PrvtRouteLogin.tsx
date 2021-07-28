import { Route, Redirect } from 'react-router';
import { useUserContext } from '../context/userContext';

interface PrivateRouteProps {
  component: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { currentUser } = useUserContext();

  return (
    <Route
      {...rest}
      render={(props) => {
        return !currentUser ? <Component {...props} /> : <Redirect to='/' />;
      }}
    />
  );
};
export default PrivateRoute;
