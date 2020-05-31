import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createGameBoardAction } from "../../redux/actions";

const RestartBtn = ({ createGameBoardAction, classN }) => {
	return (
		<Button
			className={classN}
			onClick={() => createGameBoardAction()}
			size={"large"}
			type={"ghost"}
		>
			Restart Game
		</Button>
	);
};

Button.propTypes = {
	createGameBoardAction: PropTypes.func,
	classN: PropTypes.string,
};

export default connect(null, { createGameBoardAction })(RestartBtn);
