import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'; //본부연결
import Home from './components/Home';
import Cart01 from './components/Cart01';
import Cart02 from './components/Cart02';
import Cart03 from './components/Cart03';
import Cart04 from './components/Cart04';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cart01" element={<Cart01 />}/>
              <Route path="/cart02" element={<Cart02 />}/>
              <Route path="/cart03" element={<Cart03 />}/>
              <Route path="/cart04" element={<Cart04 />}/>
            </Routes>
            </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
