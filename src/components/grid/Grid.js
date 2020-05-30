import React, { Children, useEffect } from "react";
import styles from "./grid.module.scss";
import Row from "../row";
import Cell from "../cell";
import { connect } from "react-redux";
import { createGameBoardAction } from "../../redux/actions";
import PropTypes from "prop-types";

const Grid = ({ createGameBoardAction }) => {
	useEffect(() => {
		createGameBoardAction();
	});
	return (
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
	);
};

Grid.propTypes = {
	createGameBoardAction: PropTypes.func.isRequired,
};

export default connect(null, { createGameBoardAction })(Grid);
