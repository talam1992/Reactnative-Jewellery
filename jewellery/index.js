/**
 * @format
 */

//import libraries to help create a component
//	npm libraries
import React from 'react';
import {AppRegistry} from 'react-native';

//	app components
import Header from './src/components/header.js';
import JewelleryList from './src/components/JewelleryList';

//Create a component
const App = () => (
	<View>
		<Header headerText={'Jewellery'}/>
<JewelleryList />
	</View>
);
//Render it to the device
AppRegistry.registerComponent('jewellery', () => App);







