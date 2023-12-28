import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.scss";

const entryPoint = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(entryPoint).render(<App />)