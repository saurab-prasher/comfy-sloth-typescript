import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// Pages
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';
import Login from './pages/Login';
import SignUpPage from './pages/SignUp';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';

// Private route
import PrivateRouteCheckout from './utils/PrivateRouteCheckout';
import PrivateRouteLogin from './utils/PrivateRouteLogin';

// Redux
import { useActions } from './hooks/useActions';
import { useSelector } from './hooks/useTypedSelector';

const App = () => {
  const {
    fetchProducts,
    loadProducts,
    filterProducts,
    sortProducts,
    countCartTotals,
  } = useActions();

  const allProducts = useSelector((state) => state.allProducts.products);

  const { filters, sort } = useSelector((state) => state.filter);

  const { totalItems, cart } = useSelector((state) => state.cart);

  // Fetch all products
  useEffect(() => {
    fetchProducts(process.env.REACT_APP_PRODUCTS_URL);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [process.env.REACT_APP_PRODUCTS_URL]);

  // Load products to filter list
  useEffect(() => {
    loadProducts(allProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProducts]);

  // Sort and filter products

  useEffect(() => {
    // Order is important here First filter and then sort
    filterProducts();
    sortProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, filters]);

  // Count Cart total amount and set cart to local Storage
  useEffect(() => {
    countCartTotals();
    localStorage.setItem('cart', JSON.stringify(cart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <>
      <Navbar totalItems={totalItems} />
      <Sidebar totalItems={totalItems} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:id'>
          <SingleProduct />
        </Route>
        <Route path='/cart' component={CartPage} />
        <PrivateRouteLogin path='/login' component={Login} />
        <PrivateRouteLogin path='/signup' component={SignUpPage} />
        <PrivateRouteCheckout exact path='/checkout' component={CheckOut} />
        <PrivateRouteLogin path='/forgotpassword' component={ForgotPassword} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
