"use client";
import React, { HtmlHTMLAttributes, useContext, useEffect } from "react";
import { AppContext } from "@/src/context/app-context";
import { useRouter } from "next/router";

interface AuthGuardCompProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const AuthGuardComp: React.FC<AuthGuardCompProps> = (props) => {
    const appContext = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
        if (!appContext?.isLoggedIn) {
            router.push("/login");
        }
    }, [appContext?.isLoading, appContext?.isLoggedIn, router]);

    if (appContext?.isLoading || !appContext?.isLoggedIn) {
        return <p>Loading...</p>;
    }

    return <>{props.children}</>;
};
