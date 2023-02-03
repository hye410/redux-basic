import { BrowserRouter,Routes,Route } from "react-router-dom";
import store from './store';
import Home from './components/Home';
import Cart from './components/Cart';
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
