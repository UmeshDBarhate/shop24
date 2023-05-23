import Header from "./component/Header";

import Footer from "./component/Footer";
import { Container } from "react-bootstrap";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from "./component/Cart";
import Home from "./component/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <div className="App bg-light">
        <Container fluid>
          <Header />
        </Container>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Container>
        <Footer />
      </div>
      
      <ReactQueryDevtools initialIsOpen />
      </BrowserRouter>
    </QueryClientProvider>
    </Provider>
  );
}

export default App;
