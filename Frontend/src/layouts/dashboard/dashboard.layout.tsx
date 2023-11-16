import React, { HtmlHTMLAttributes } from "react";
import styles from "./dashboard.layout.module.scss";
import SidebarPart from "./sidebar.part";
import HeaderPart from "./header.part";

interface DashboardLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {
}

export default function DashboardLayout(props: DashboardLayoutProps) {
    return (
        <main className={styles.mainContainer}>
            <HeaderPart />
            <div className={styles.container}>
                <SidebarPart />
                <div className={styles.dashboard}>
                    <div className={styles.contentWrapper}>{props.children}</div>
                </div>
            </div>
        </main>
    );
}
