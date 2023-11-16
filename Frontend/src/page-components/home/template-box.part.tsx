import styles from './home.page.module.scss';

const TemplateBox: React.FC<{
  title: string,
  badge?: React.ReactNode,
  content?: React.ReactNode,
}> = (props) => {
  return (
    <div className={styles.templateBox}>
      <div className={styles.templateBoxTitleContainer}>
        <h5 className={styles.templateBoxTitle}>
          {props.title}
        </h5>
        <span className='flex justify-start'>{props.badge}</span>
      </div>
      <div className={styles.templateBoxContentContainer}>
        {props.content}
      </div>
    </div>
  )
}

interface SubSectionProps {
  title: String;
  value: string;
}

export const SubSection: React.FC<SubSectionProps> = (props) => {
  return (
    <div className={styles.subsection}>
      <span className={styles.subsectionKey}>{props.title}</span>
      <span className={styles.subsectionValue}>{props.value}</span>
    </div>
  );
};

export default TemplateBox