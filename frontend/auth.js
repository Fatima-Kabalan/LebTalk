import decodeJWT from "jwt-decode";
import * as SecureStore from 'expo-secure-store';
const secure_token = "token";

export function getApiToken(){

    const setToken = (token) => {
        return SecureStore.setItemAsync('secure_token', token);
    };
    
    const getToken = () => {
        return SecureStore.getItemAsync('secure_token');
    };
    
    setToken('#your_secret_token');
    getToken().then(token => console.log(token)); // output '#your_secret_token'

}

export function getUser(){
    const token = SecureStore.getItemAsync(secure_token);
    if(!token){
        return null;
    }
    try{
        const decodedToken = decodeJWT(token);
        return{
            email: decodedToken.email,
            organization_id: decodedToken.organization_id? decodedToken.organization_id:null,
            onboarded: decodedToken.onboarded,
            c_token:decodedToken.c_token,profile_id,
            profile_type:decodedToken.profile_type
        };
    }catch(error){
        console.error(error);
        return null;
    }
}

export function setUser({token}){
    SecureStore.setItemAsync('secure_token', token);
}

export async function logout(){
    SecureStore.removeItemAsync('secure_token', token);
    window.location.reload();
}