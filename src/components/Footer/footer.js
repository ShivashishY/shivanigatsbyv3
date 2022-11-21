import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
	<div className={`defaultFooter ${footerClass}`}>
		<p>
			Made in Love with{" "}
			<a
				href="https://www.gatsbyjs.com/"
				target="_blank"
				rel="noreferrer"
			>
				GatsbyJS
			</a>{" "}
			| Designer{" "}
			<a
				href="https://github.com/ShivashishY"
				target="_blank"
				rel="noreferrer"
			>
				Shiva
			</a>
		</p>
	</div>
);
Footer.propTypes = {
	footerClass: PropTypes.string,
};
export default Footer;
