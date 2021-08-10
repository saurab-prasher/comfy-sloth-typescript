import { Route, Redirect } from 'react-router';
import { useUserContext } from '../context/userContext';

interface PrivateRouteProps {
  component: any;
  path:string
  exact?:boolean | undefined
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { state:currentUser } = useUserContext();


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
