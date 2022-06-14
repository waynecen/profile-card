import React from "react";
import portrait from "../img/portrait.png";
import Button from "./Button";

export default function Info() {
	return (
		<div className="Info">
			<img
				className="Portrait"
				src={portrait}
				alt="portrait of Wayne Cen"
			/>
			<h1 className="Name">Wayne Cen</h1>
			<h2 className="Subtitle">Frontend Developer</h2>
			<a href="https://waynecen.com">
				<h3>waynecen.com</h3>
			</a>
			<div className="flex-row">
				<Button text="Email" />
				<Button text="LinkedIn" />
			</div>
		</div>
	);
}
