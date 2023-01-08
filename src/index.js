import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.dark.css";
import "antd/dist/antd.dark.min.css";
import Loader from "./Components/Loader";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Router>
);
