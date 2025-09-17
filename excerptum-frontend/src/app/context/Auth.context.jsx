import { createContext, useContext, useState } from 'react';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
// import { saveToStorage } from '../utilityFunctions/helpers/storageManagement/saveToStorage';
import config from '../../Config';
const backendURL = `${config.apiUrl}/auth`;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem('__tk') !== null;
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState('');

    // Logic to retrieve role and email from token
    const token = localStorage.getItem('__tk');
    let role = null;
    let email = null;

    if (token) {
        try {
            const { role: decodedRole, email: decodedEmail, exp } = jwtDecode(token);
            if (exp * 1000 >= dayjs().valueOf()) {
                axios.defaults.headers['Authorization'] = token;
                role = decodedRole;
                email = decodedEmail;
            } else {
                localStorage.removeItem('__tk');
                delete axios.defaults.headers['Authorization'];
            }
        } catch {
            localStorage.removeItem('__tk');
            delete axios.defaults.headers['Authorization'];
        }
    }

    const userLogin = async (data) => {
        try {
            setIsLoading(true);
            if (data.password === '') {
                setError('Password is required.');
                return;
            }
            const response = await axios.post(
                `${backendURL}/login`,
                data
            );
            if (response.status === 200) {
                localStorage.setItem('__tk', response.data.token);
                setIsLoggedIn(true);
            }
        } catch (error) {
            if (error.response.status === 401) setError('The password you entered is not valid.');
            if (error.response.status === 404) setError('No account found with this email address.');
            if (error.response.status === 400) setError('You must activate your account before you can log in. Please check the verification link sent to your email.');
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        sessionStorage.clear();
        localStorage.clear();
        setIsLoggedIn(false);
        delete axios.defaults.headers['Authorization'];
    }

    const registerUser = async (data) => {
        try {
            setIsLoading(true);
            const response = await axios.post(`${backendURL}/register`, data);
            if (response.status === 201) {
                // saveToStorage('emailAddress', data.email);
                setSuccess(true);
            };
        } catch (error) {
            let errorMessage = 'We encountered an error and could not create the account.';
            if (error.response && error.response.data.error) errorMessage = error.response.data.error;
            setError(errorMessage);
            setSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                setIsLoading,
                isLoggedIn,
                setIsLoggedIn,
                success,
                setSuccess,
                error,
                setError,
                role,
                email,
                userLogin,
                logout,
                registerUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}
