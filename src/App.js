import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindRoute from "./pages/FindRoute";
import ChooseVehicle from "./pages/ChooseVehicle";
import ChooseInput from "./pages/ChooseInput";
import InputText from "./pages/StartInput";
import InputCheck from "./pages/StartCheck";
import OutputText from "./pages/DestInput";
import OutputCheck from "./pages/DestCheck";
import OptimalWalk from "./pages/OptimalWalk";
import OptimalTransport from "./pages/OptimalTransport";
import ReNavigateCheck from "./pages/ReNavigateCheck";
import ReNavigate from "./pages/ReNavigate";
import SearchArea from "./pages/SearchArea";
import Map from "./pages/Map";
import Photo from "./pages/Photo";
import Practice from "./pages/Practice";
import Report from "./pages/Report";

function App() {
  fetch(`http://localhost:3000/health/`).then((response) =>
    console.log(response)
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/health" element={<Practice/>}/>
          <Route path="/FindRoute" element={<FindRoute/>}/>
          <Route path="/ChooseVehicle" element={<ChooseVehicle/>}/>
          <Route path="/ChooseInput" element={<ChooseInput/>}/>
          <Route path="/StartInput" element={<InputText />} />
          <Route path="/StartCheck" element={<InputCheck />} />
          <Route path="/DestInput" element={<OutputText />} />
          <Route path= '/DestCheck' element = {<OutputCheck/>}/>
          <Route path= '/OptimalWalk' element = {<OptimalWalk/>}/>
          <Route path= '/OptimalTransport' element = {<OptimalTransport/>}/>
          <Route path="/ReNavigate" element={<ReNavigate />} />
          <Route path="/ReNavigateCheck" element={<ReNavigateCheck />} />
          <Route path="/Map" element={<Map />} />
          <Route path='/Photo' element={<Photo />}/>
          <Route path='/SearchArea' element={<SearchArea />}/>
          <Route path='/Report' element={<Report/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
