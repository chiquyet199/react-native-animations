import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import store from 'configs/store';
import { Root } from 'configs/routes';
import { commonStyle } from 'configs/common-style-variables';

EStyleSheet.build(commonStyle);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Root />
			</Provider>
		);
	}
}

export default App;
