import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from '../api'

import {onChecking, onLogin, onLogout} from '../store'

export const useAuthStore = () => {

    const { status, user, errorMessage, clearErrorMessage} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    //FUNCION ASINCRONA -> porque espera a la BD
    const startLogin = async({ email, password }) => { 

        dispatch( onChecking() )
        try{
            const { data } = await calendarApi.post('/auth', {email, password})
            const token = data.token;
            localStorage.getItem('token', token );
            localStorage.getItem('token-date-init', new Date().getTime());

            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch(error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() )
            }, 10);
        }
    }

    return {
        // Propiedades
        status, 
        user, 
        errorMessage,

        // Metodos
        startLogin
    }
}