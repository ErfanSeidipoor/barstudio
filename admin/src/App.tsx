import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Tags from "./pages/Tags";
import CreateTag from "./pages/CreateTag";
import Tag from "./pages/Tag";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";
import {Layout} from "./components/Layout";
import './App.css';

function App() {
  return (
    <div className="App">
		<Layout>
			<Router>
				<Switch>
					<Route path="/tags/create" exact component={CreateTag}  />
					<Route path="/tags/:tagId" exact component={Tag}  />
					<Route path="/tags" component={Tags} />
					<Route path="/products/create" exact component={CreateProduct}  />
					<Route path="/products/:productId" exact component={Product}  />
					<Route path="/products" exact component={Products}  />
					<Route path="/" exact component={Products} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
		</Layout>
    </div>
  );
}

export default App;
