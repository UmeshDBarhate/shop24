import Header from "./component/Header";
import Product from "./component/Product";
import Filter from "./component/Filter";
import Footer from "./component/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-light">
        <Container fluid>
          <Header />
        </Container>
        <Container fluid className="p-3  d-flex align-items-stretch">
          <Row>
            <Col xs lg="2">
              <Filter />
            </Col>
            <Col xs lg="10" >
              <Product />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
