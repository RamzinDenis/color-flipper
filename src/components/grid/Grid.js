import React, { Children } from "react";
import styles from "./grid.module.scss";
import Row from "../row";
import Cell from "../cell";

const Grid = () => {
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

export default Grid;
