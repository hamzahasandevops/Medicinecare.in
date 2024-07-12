import { Container, Typography } from "@mui/material";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/MainPart/Header";
import HeroicSection from "./Components/MainPart/HeroicSection";
import MainSection from "./Components/MainPart/MainSection";
import HeroicDescription from "./Components/MainPart/HeroicDescription";
import Medicine from "./Components/MainPart/Medicine";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>

      <Container maxWidth="xl">
        <Header />
        <HeroicSection />
        <MainSection />
        <HeroicDescription />

        <Medicine />
      </Container>
      <h1>hamza hasan</h1>
    </>
  );
}

export default App;
