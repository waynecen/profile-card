import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STYLES = ["btn--primary", "btn--accent"];

export default function Button({ text, icon, buttonStyle }) {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	return (
		<button className={`${checkButtonStyle}`}>
			<FontAwesomeIcon icon={icon} />
			<p>{text}</p>
		</button>
	);
}
