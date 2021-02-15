import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyHeader from '../components/MyHeader';

export default class App extends React(){
    render(){
        return(
            <View style = {styles.container}>
                <MyHeader title = "Story Hub"/>
                <View style = {styles.formContainer}>
                    <TextInput
                        style = {styles.title}
                        placeholder = {"title"}/>
                    <TextInput
                        style = {styles.author}
                        placeholder = {"author"}/>
                    <TextInput
                        style = {styles.story}
                        placeholder = {"story"}
                        multiline = {true}/>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        flex:1,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        width: '75%',
        height:35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    author: {
        width: '75%',
        height:35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    story: {
        width: '75%',
        height:35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },
    button: {
        width:'75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FF5722'
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF'
    }
})