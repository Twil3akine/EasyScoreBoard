import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "@/app/layout"
import "@/global.css";

const Main: React.FC = () => {
	return <Layout />
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />)