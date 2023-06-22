export interface AuthState {
    isLoggedIn: boolean;
    username?: string | null;
    email: string | null
    password: string | null
    login: ( email: string | null, password: string) => void;
    logout: () => void;
}