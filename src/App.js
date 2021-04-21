import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Shopping from './pages/Shopping';
import Error404 from './pages/Error404';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/shoppingReducer';

function App() {
    const [cart, setCart] = useState([]);

	const onAdd = (product) => {
		const exist = cart.find((item) => item.id === product.id);

		if(exist) {
			setCart(
				cart.map(item => 
					item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item
				)
			);
		} else {
			setCart([...cart, {...product, quantity: 1}]);
		}
	}

	const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return (
		<Provider store={store}>
			<Container>
				<Menu>
					<NavLink to="/" exact>Home</NavLink>
					<NavLink to="/blog">Blog</NavLink>
					<NavLink to="shopping">Shopping</NavLink>
				</Menu>
				<main>
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/blog" component={Blog}/>
						<Route path="/shopping">
							<Shopping onAdd={onAdd}/>
						</Route>
						<Route component={Error404}/>
					</Switch>
				</main>
				<aside>
					<Cart cart={cart}/>
				</aside>
			</Container>
		</Provider>
    );
}

const Container = styled.div`
	background: #fff;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
	display: grid;
	gap: 20px;
	grid-template-columns: 2fr 1fr;
	margin: 40px 0;
	max-width: 1000px;
	padding: 40px;
	width: 90%;
`;

const Menu = styled.nav`
	background: #092c4c;
	border-radius: 3px;
	grid-column: span 2;
	text-align: center;
	width: 100%;

	a {
		color: #fff;
		display: inline-block;
		padding: 15px 20px;
	}

	a:hover {
		background: #1d85e8;
		text-decoration: none;
	}
`;

export default App;