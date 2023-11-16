import styles from "./home.page.module.scss";

const CreateTemplateBox = (props: { onClick: () => void }) => {
    return (
        <div className={styles.createTemplateBox} onClick={props.onClick}>
            <img src="/assets/Create_Template.svg" alt="" className="w-8 h-8" />
            <div className={styles.createTemplateBoxTitle}>
                Create New Template
            </div>
        </div>
    );
};

export default CreateTemplateBox;
