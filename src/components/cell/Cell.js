import React from "react";
import PropTypes from "prop-types";
import styles from "./cell.module.scss";
import { connect } from "react-redux";
import { selectFirstTile, selectSecondTile } from "../../redux/actions";
import { getSelected, getBgColor } from "../../redux/selectors";

const Cell = props => {
	const {
		rowIndex,
		colIndex,
		isSelected,
		selectFirstTile,
		selectSecondTile,
		bgColor,
	} = props;
	const handleClick = (rowIndex, colIndex) => {
		if (bgColor) return;
		!isSelected
			? selectFirstTile(rowIndex, colIndex)
			: selectSecondTile(rowIndex, colIndex);
	};
	return (
		<div
			className={styles.cell}
			onClick={() => handleClick(rowIndex, colIndex)}
		>
			<div className={styles.front} style={{ backgroundColor: bgColor }}></div>
			<div className={styles.back} style={{ opacity: bgColor ? 0 : 1 }}></div>
		</div>
	);
};

Cell.propTypes = {
	rowIndex: PropTypes.number.isRequired,
	colIndex: PropTypes.number.isRequired,
	isSelected: PropTypes.bool.isRequired,
	selectFirstTile: PropTypes.func.isRequired,
	selectSecondTile: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
	isSelected: getSelected(state),
	bgColor: getBgColor(state, props),
});

export default connect(mapStateToProps, {
	selectFirstTile,
	selectSecondTile,
})(Cell);
