import React from "react";
import Grid from "../grid";
import styles from "./app.module.scss";
import { Provider } from "react-redux";
import store from "../../redux/store";

const App = () => {
	return (
		<Provider store={store}>
			<h2 className={styles.title}>Color Flipper</h2>
			<div className={styles.wrapper}>
				<Grid />
			</div>
		</Provider>
	);
};

export default App;
