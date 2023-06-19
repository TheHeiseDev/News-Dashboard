import "./styles/app.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { SubscribersPage } from "./pages/Subscribers/SubscribersPage";
import { PostsPage } from "./pages/Posts/PostsPage";
import { StatisticsPage } from "./pages/Statistics/StatisticsPage";
import { Authorization } from "./pages/Authorization/Authorization";
import { PrivateRouter } from "./utils/router/privateRouter";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/subsribers" element={<SubscribersPage />} />
      </Route>
      <Route path="/auth" element={<Authorization />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
