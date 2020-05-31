import React, { Children } from "react";
import { Modal, Button } from "antd";
import RestartBtn from "../restart-btn";
import PropTypes from "prop-types";
import { TrophyOutlined } from "@ant-design/icons";
import styles from "./winner-modal.module.scss";
import { connect } from "react-redux";
import { seeResult } from "../../redux/actions";

const WinnerModal = ({ isSolved, seeResult }) => {
	const icons = Children.toArray(
		[...Array(3)].map(item => <TrophyOutlined className={styles.icons} />)
	);
	const Title = (
		<h2>
			Hooray! <span>{icons}</span>
		</h2>
	);
	const handleSubmit = () => {
		seeResult();
	};
	return (
		<Modal
			title={Title}
			footer={[
				<RestartBtn />,
				<Button className={styles.submit_btn} onClick={handleSubmit}>
					See Result
				</Button>,
			]}
			visible={isSolved}
		>
			<h2>Congratulation you have solved the puzzle!</h2>
		</Modal>
	);
};

WinnerModal.propTypes = {
	isSolved: PropTypes.bool.isRequired,
	seeResult: PropTypes.func.isRequired,
};

export default connect(null, { seeResult })(WinnerModal);
