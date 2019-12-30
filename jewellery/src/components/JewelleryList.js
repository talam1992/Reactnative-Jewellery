import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';

import JewelleryDetail from './JewelleryDetail';  //In the same folder as JewelleryList

class JewelleryList extends Component {
	//Using a 'class level property' the initial componenet state is set to an empty object
	//like a constructor, in this case the empty state is an empty array
	
	state = { jewellery: []};
	
	//This method will run the instant before the component is renderto the screen
	componentWillMount() {
		//Here we take the eventually returned data from the remote server and set it as the state 
		//data was shown in the Chrome console, the empty array will be replaced by a populated array
		axios.get('https://tinyurl.com/y7xqeted/jewelleryfeed.txt')
			.then(response => this.setState({ jewellery: response.data }));
	}
	
	renderJewellery(){
		//Map the title, curly braces means a reference to a javascript variable within JFX
		return this.state.jewellery.map(jewellery => 
			<JewelleryDetail key={jewellery.title} jewellery={jewellery} />);
	}
	
	render () {
		console.log(this.state);
		return (
			<ScrollView>
				{this.renderJewellery()}
			</ScrollView>
			);
			}
}


export default JewelleryList;
