 import React, {Component} from 'react';
 import{StyleSheet, View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';

 export default class LoginForm extends Component{

 	onPressButtom(){
 		Alert.alert("Bienvenido Lhyan")
 	}

 	render(){
 		return(
 			<View style={styles.container}>
 				<TextInput
 					placeholder='Username'
 					style={styles.input}
 					placeholderTextColor="rgba(255,255,255,0.7)"
 					/>
 				<TextInput
 					secureTextEntry={true}
 					placeholder='Password'
 					style={styles.input}
 					placeholderTextColor="rgba(255,255,255,0.7)"
 					/>

 				<TouchableOpacity 
 				style={styles.buttonContainer}
 				onPress={this.onPressButtom}
 				>
 					<Text 
 					style={styles.buttonText}>
 						LOGIN
 					</Text>
 				</TouchableOpacity>
 			</View>
 			);
 	}
 }

 const styles = StyleSheet.create({
 	container: {
 		padding: 20

 	},
 	input:{
 		height: 40,
 		backgroundColor: 'rgba(0,0,0,1)',
 		marginBottom:10 ,
 		color: '#FFF',
 		paddingHorizontal: 10
 	},
 	buttonContainer:{
 		backgroundColor: '#2980b9',
 		paddingVertical: 15
 	},
 	buttonText:{
 		textAlign: 'center',
 		color: '#FFFFFF',
 		fontWeight: '700'
 	}
 });