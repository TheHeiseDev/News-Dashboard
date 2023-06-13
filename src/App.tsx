import "./styles/app.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { SubscribersPage } from "./pages/Subscribers/SubscribersPage";
import { PostsPage } from "./pages/Posts/PostsPage";
import { StatisticsPage } from "./pages/Statistics/StatisticsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/subsribers" element={<SubscribersPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
