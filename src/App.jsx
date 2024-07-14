import { Container, Typography } from "@mui/material";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/MainPart/Header";
import HeroicSection from "./Components/MainPart/HeroicSection";
import MainSection from "./Components/MainPart/MainSection";
import HeroicDescription from "./Components/MainPart/HeroicDescription";
import Medicine from "./Components/MainPart/Medicine";
import Cart from "./Components/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForm from "./Components/Form/ProductForm";


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signup" element={<Form />}></Route>
          <Route path="/product" element={<ProductForm />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>

        <Container maxWidth="xl">
          <HeroicSection />
          <MainSection />
          <HeroicDescription />

          <Medicine />
        </Container>
      </BrowserRouter>

    
    </>
  );
}

export default App;
