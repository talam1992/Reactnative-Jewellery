import React, {Component} from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection.js';
import Button from './Button';



//This is a presentational component, so a functional component is all that is needed

const JewelleryDetail = ({ jewellery }) => {
	const  	{title, artist, thumbnail_image, image, url} = jewellery;
	const	{thumbnailContainerStyle, thumbnailStyle, headerContentStyle, headerTextStyle, imageStyle} = styles;
	
	return (
		<Card>
			<CardSection>
				<View style = {thumbnailContainerStyle}>
					<Image style = {thumbnailStyle} source = { {uri: thumbnail_image}} /></View>
				<View style = {headerContentStyle}>
					<Text style = {headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
					<Image style = {imageStyle} source = { {uri: image}} />
			</CardSection>
	
			<CardSection>
				{/* pass a prop to Button component */}
				<Button onPress={() => Linking.openURL(url)}> 
					Buy Me
				</Button> 
			</CardSection> 
		
		</Card>
	);
}

const styles= {
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	thumbnailStyle: {
		height: 50,
		width:50
	},
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
}

export default JewelleryDetail;