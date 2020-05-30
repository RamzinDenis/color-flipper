import React from "react";
import PropTypes from "prop-types";
import styles from "./cell.module.scss";

const Cell = ({ rowIndex, colIndex }) => {
	return (
		<div className={styles.cell}>
			<div className={styles.front}></div>
			<div className={styles.back}></div>
		</div>
	);
};

Cell.propTypes = {
	rowIndex: PropTypes.number.isRequired,
	colIndex: PropTypes.number.isRequired,
};

export default Cell;
