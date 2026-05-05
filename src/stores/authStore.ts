import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    username: string;
    displayName: string;
}

const USERS: Record<string, { password: string; displayName: string }> = {
    plugo: { password: 'refactor-me', displayName: 'Pablo' },
    yamylaj: { password: 'refactor-me', displayName: 'Yamila' }
};

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
    switchUser: (username: string) => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,

            login: (username: string, password: string) => {
                const userEntry = USERS[username];
                if (!userEntry || userEntry.password !== password) {
                    return false;
                }

                set({
                    user: { username, displayName: userEntry.displayName },
                    isAuthenticated: true
                });

                return true;
            },

            logout: () => {
                set({ user: null, isAuthenticated: false });
            },

            switchUser: (username: string) => {
                const userEntry = USERS[username];
                if (!userEntry) return;

                set({
                    user: { username, displayName: userEntry.displayName },
                    isAuthenticated: true
                });
            }
        }),
        {
            name: 'onfit-auth'
        }
    )
);
