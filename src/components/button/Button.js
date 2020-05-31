import React from "react";
import styles from "./button.module.scss";
import { Button } from "antd";
import { connect } from "react-redux";
import { createGameBoardAction } from "../../redux/actions";

const RestartBtn = ({ createGameBoardAction }) => {
	return (
		<Button
			className={styles.button}
			onClick={() => createGameBoardAction()}
			size={"large"}
			type={"ghost"}
		>
			Restart Game
		</Button>
	);
};

export default connect(null, { createGameBoardAction })(RestartBtn);
