import { createContext, useEffect, useMemo, useState } from "react";
import Cookie from 'js-cookie';

interface AppContext {
    isLoading: boolean;
    code: string | undefined;
    updateCode: (code: string, user: any) => void;
    logout: () => void;
    isLoggedIn: boolean;
    user: any;
}

export const AppContext = createContext<AppContext | null>(null);

export const useAppContext = () : AppContext => {
    const [code, setCode] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [user, setUser] = useState<any>();

    const isLoggedIn = useMemo(() => {
        return !isLoading && Boolean(code);
    }, [code, isLoading]);

    const updateCode = (code: string, user: any) => {
        Cookie.set('code', code);
        setCode(code);
    }

    const logout = () => {
        Cookie.remove('code');
        Cookie.remove('user');
        setCode(undefined);
        setUser(undefined);
        setIsLoading(false);
    }

    useEffect(() => {
        const code = Cookie.get('code');
        const user = Cookie.get('user');
        if(code && user) {
            setCode(code);
            setUser(JSON.parse(user));
        }
        setIsLoading(false);
    }, []);

    return {
        user,
        code,
        isLoading,
        isLoggedIn,
        updateCode,
        logout,
    }
}
