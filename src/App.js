import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputText from "./pages/T_InputStartPage";
import InputSpeech from "./pages/S_InputStartPage";
import OutputText from "./pages/T_InputDestPage";
import OutputSpeech from "./pages/S_InputDestPage";
import InputCheck from "./pages/StartCheck";
import OutputCheck from "./pages/DestCheck";
import ReNavigateCheck from "./pages/ReNavigateCheck";
import ReNavigate from "./pages/ReNavigate";
import SearchArea from "./pages/SearchArea";
import Map from "./pages/Map";
import Practice from "./pages/Practice";

function App() {
  fetch(`http://localhost:3000/health/`).then((response) =>
    console.log(response)
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/health" element={<Practice/>}/>
          <Route path="/InputStart" element={<InputText />} />
          <Route path="/StartCheck" element={<InputCheck />} />
          {/* <Route path= '/DestCheck' element = {<OutputCheck/>}/> */}
          <Route path="/InputDest" element={<OutputText />} />
          <Route path="/InputSpeech" element={<InputSpeech />} />
          <Route path="/OutputSpeech" element={<OutputSpeech />} />
          <Route path="/ReNavigate" element={<ReNavigate />} />
          <Route path="/ReNavigateCheck" element={<ReNavigateCheck />} />
          <Route path="/Map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
