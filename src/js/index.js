//import react into the bundle
import React from "react";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import ReactDOM from "react-dom";

//import your own components
import SecondsCounter from "./component/secondscounter.jsx";

//render your react application
ReactDOM.render(
	<SecondsCounter seconds={120} />,
	document.querySelector("#app")
);
