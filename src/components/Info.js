import React from "react";
import Button from "./Button";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Info() {
	return (
		<div className="info">
			<h1 className="name">Wayne Cen</h1>
			<h3 className="subtitle">Frontend Developer</h3>
			<a className="link__site" href="https://waynecen.com">
				waynecen.com
			</a>
			<div className="container__button">
				<a href="mailto:waynecen@gmail.com">
					<Button
						buttonStyle="btn--primary"
						text="Email"
						icon={faEnvelope}
					/>
				</a>
				<a href="https://github.com/waynecen">
					<Button
						buttonStyle="btn--accent"
						text="GitHub"
						icon={faGithub}
					/>
				</a>
			</div>
		</div>
	);
}
