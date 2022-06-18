import React from "react";
import Icon from "./Icon";
import {
	faLinkedin,
	faMedium,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<div className="footer">
			<a href="https://twitter.com/cenwayner">
				<Icon icon={faTwitter} />
			</a>
			<a href="https://medium.com/@wayne.cen">
				<Icon icon={faMedium} />
			</a>
			<a href="https://linkedin.com/in/waynercen">
				<Icon icon={faLinkedin} />
			</a>
		</div>
	);
}
