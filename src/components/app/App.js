import React from "react";
import Grid from "../grid";
import "antd/dist/antd.css";
import styles from "./app.module.scss";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Button from "../button";

const App = () => {
	return (
		<Provider store={store}>
			<h2 className={styles.title}>Color Flipper</h2>
			<div className={styles.wrapper}>
				<Button />
				<Grid />
			</div>
		</Provider>
	);
};

export default App;
