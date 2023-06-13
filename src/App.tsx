import React from "react";
import "./styles/app.scss";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <div style={{ height: "1000px" }}>
        <h1>Главная</h1>
      </div>
    </MainLayout>
  );
}

export default App;
