import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
//Button receives a function to execute making it highly re-usable
const Button = ({onPress, children2}) =>
{
	const { buttonStyle, textStyle} = styles;		//Destructure style sets
	return (
		<TouchableOpacity onPress = {onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children2}
			</Text>
		</TouchableOpacity>
	)
};
const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600', //boldness of font
		paddingTop: 10,
		paddingBottom: 10
	},
	
	buttonStyle:
	{
		flex: 1, //take up as much content as the component can
		alignSelf: 'stretch',	//Stretch to container limits
		backgroundColor: '#fff',
		borderRadius: 5,	//Rounded corners
		borderWidth: 1, 
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	}
}
export default Button;
