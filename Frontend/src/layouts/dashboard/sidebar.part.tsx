import styles from "./dashboard.layout.module.scss";

export default function SidebarPart() {
    const sidebarContent = <img width='24px' height='24px' src="/assets/TemplatesIcon.svg" />
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarContainer}>
                <div className={styles.menuItem}></div>
                <div className={styles.menuItem}>{sidebarContent}</div>
                <div className={styles.menuItem}></div>
                <div className={styles.menuItem}></div>
            </div>
        </aside>
    );
}
