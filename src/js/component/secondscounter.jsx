import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const SecondsCounter = props => {
	const [maxCount, setMaxCount] = useState(props.seconds);
	const [count, setCount] = useState(0);
	const [one, setOne] = useState(0);
	const [two, setTwo] = useState(0);
	const [three, setThree] = useState(0);
	const [four, setFour] = useState(0);
	const [continuar, setContinuar] = useState(true);

	function empezar() {
		if (document.getElementById("seconds").value != "") {
			setCount(0);
			setContinuar(true);
		} else {
			alert("Definir segundos");
		}
	}

	function pausar() {
		if (continuar) {
			setContinuar(false);
		} else {
			setContinuar(true);
		}
	}

	function terminar() {
		setCount(maxCount);
		document.getElementById("seconds").value = "";
	}

	function initialize() {
		setOne(0);
		setTwo(0);
		setThree(0);
		setFour(0);
		setContinuar(false);
	}

	useEffect(() => {
		let myInterval = setInterval(() => {
			if (count < maxCount && continuar) {
				setCount(prevCount => prevCount + 1);
				setOne(prevOne => Math.floor(count / 1));
				setTwo(prevTwo => Math.floor(count / 10));
				setThree(prevThree => Math.floor(count / 100));
				setFour(prevFour => Math.floor(count / 1000));
			}
			if (count === maxCount) {
				//clearInterval(myInterval);
				initialize();
			}
		}, 500);
		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<div className="main">
			<div className="bigCounter">
				<p>Max: {maxCount}</p>
			</div>
			<div className="bigCounter">
				<div className="calendar">
					<i className="far fa-clock"></i>
				</div>
				<div id="four">{four % 10}</div>
				<div id="three">{three % 10}</div>
				<div id="two">{two % 10}</div>
				<div id="one">{one % 10}</div>
			</div>
			<div className="bigCounter">
				<input
					type="numberr"
					id="seconds"
					placeholder="Definir segundos"
					onChange={event => {
						setMaxCount(event.target.value);
						if (continuar) initialize();
					}}
				/>
				<button id="start" onClick={empezar}>
					Empezar
				</button>
				<button id="pause" onClick={pausar}>
					Pausar
				</button>
				<button id="end" onClick={terminar}>
					Terminar
				</button>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};

export default SecondsCounter;
