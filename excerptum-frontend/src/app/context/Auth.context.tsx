import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import dayjs from 'dayjs';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
// import { saveToStorage } from '../utilityFunctions/helpers/storageManagement/saveToStorage';
import config from '../../shared/lib/config/config.js';

const backendURL = `${config.apiUrl}/auth`;

interface AuthTokenPayload {
    role: string;
    email: string;
    exp: number;
}

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    success: boolean | null;
    setSuccess: React.Dispatch<React.SetStateAction<boolean | null>>;
    role: string | null;
    email: string | null;
    userLogin: (data: LoginData) => Promise<void>;
    logout: () => void;
    registerUser: (data: RegisterData) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return localStorage.getItem('__tk') !== null;
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean | null>(null);

    let role: string | null = null;
    let email: string | null = null;

    const token = localStorage.getItem('__tk');

    if (token) {
        try {
            const decoded = jwtDecode<AuthTokenPayload>(token);
            if (decoded.exp * 1000 >= dayjs().valueOf()) {
                axios.defaults.headers['Authorization'] = token;
                role = decoded.role;
                email = decoded.email;
            } else {
                localStorage.removeItem('__tk');
                delete axios.defaults.headers['Authorization'];
            }
        } catch (decodeError) {
            localStorage.removeItem('__tk');
            delete axios.defaults.headers['Authorization'];
            console.warn('Invalid token in localStorage', decodeError);
        }
    }

    const userLogin = async (data: LoginData): Promise<void> => {
        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);

            if (data.password.trim() === '') {
                setError('Password is required.');
                return;
            }

            const response = await axios.post(`${backendURL}/login`, data);

            if (response.status === 200 && response.data?.token) {
                localStorage.setItem('__tk', response.data.token);
                setIsLoggedIn(true);
            }
        } catch (err) {
            const message = axios.isAxiosError(err) && err.response?.status
                ? ({
                    401: 'The password you entered is not valid.',
                    404: 'No account found with this email address.',
                    400: 'You must activate your account before you can log in. Please check the verification link sent to your email.',
                } as Record<number, string>)[err.response!.status] ?? 'Unexpected login error.'
                : 'Unexpected login error.';

            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = (): void => {
        sessionStorage.clear();
        localStorage.clear();
        setIsLoggedIn(false);
        delete axios.defaults.headers['Authorization'];
    };

    const registerUser = async (data: RegisterData): Promise<void> => {
        try {
            setIsLoading(true);
            setError(null);
            setSuccess(null);

            const response = await axios.post(`${backendURL}/register`, data);

            if (response.status === 201) {
                // saveToStorage('emailAddress', data.email);
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        } catch (err) {
            let errorMessage = 'We encountered an error and could not create the account.';
            if (axios.isAxiosError(err) && err.response?.data?.error) {
                errorMessage = err.response.data.error;
            }
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
                registerUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
