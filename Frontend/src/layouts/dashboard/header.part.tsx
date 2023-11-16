import Icon from "@/src/components/ui/icon";
import styles from "./dashboard.layout.module.scss";
import { useContext } from "react";
import { AppContext } from "@/src/context/app-context";
import { Button } from "@/src/components/ui/button";

export default function HeaderPart() {
    const appContext = useContext(AppContext);
    return (
        <header className={styles.navbar}>
            <div className={styles.logo}>CMS</div>

            <div className="child-2">
                <div className="inner-child">
                    <span>
                        <Icon icon="notification" className="w-6 h-6" />
                    </span>
                    <span>
                        <Icon icon="settings" className="w-6 h-6" />
                    </span>
                    <span>
                        <Button
                            variant="link"
                            className="px-0 py-0 w-5 h-5"
                            onClick={appContext?.logout}
                        >
                            <Icon icon="logout" />
                        </Button>
                    </span>
                </div>

                <div className="board-template"></div>

                <div className="inner-child-one">
                    <div className="username">{appContext?.user.name}</div>
                    <div className="desg">
                        {appContext?.user.roles.join(',').toUpperCase()}
                    </div>
                </div>

                <div className="profile">
                    <span>
                        <Icon icon="avatar" />
                        <img
                            style={{
                                width: "32px",
                                height: "32px",
                            }}
                            src="/assets/Avatar.png"
                            alt="Avatar"
                        />
                    </span>
                </div>
            </div>
        </header>
    );
}
