import React from "react";
import Icon from "./Icon";

const STYLES = ["btn--primary", "btn--accent"];

export default function Button({ text, icon, buttonStyle }) {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	return (
		<button className={`${checkButtonStyle}`}>
			<Icon icon={icon} />
			<p>{text}</p>
		</button>
	);
}
