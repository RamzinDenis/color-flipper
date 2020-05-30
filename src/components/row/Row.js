import React from "react";
import styles from "./row.module.scss";
import PropTypes from "prop-types";

const Row = ({ children }) => {
	return <div className={styles.row}>{children}</div>;
};

Row.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default Row;
