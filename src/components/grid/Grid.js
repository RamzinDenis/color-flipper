import React, { Children, useEffect } from "react";
import styles from "./grid.module.scss";
import Row from "../row";
import Cell from "../cell";
import WinnerModal from "../modal";
import { connect } from "react-redux";
import { createGameBoardAction } from "../../redux/actions";
import PropTypes from "prop-types";
import { getIsSolved } from "../../redux/selectors";

const Grid = ({ createGameBoardAction, isSolved }) => {
	useEffect(() => {
		createGameBoardAction();
	}, [createGameBoardAction]);

	return (
		<>
			<div className={styles.container}>
				{Children.toArray(
					[...Array(4)].map((_, rowIndex) => (
						<Row>
							{Children.toArray(
								[...Array(4)].map((_, colIndex) => (
									<Cell colIndex={colIndex} rowIndex={rowIndex} />
								))
							)}
						</Row>
					))
				)}
			</div>
			<WinnerModal isSolved={isSolved} />
		</>
	);
};

Grid.propTypes = {
	createGameBoardAction: PropTypes.func.isRequired,
	isSolved: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	isSolved: getIsSolved(state),
});

export default connect(mapStateToProps, {
	createGameBoardAction,
})(Grid);
