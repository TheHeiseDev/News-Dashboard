import { memo } from "react";
import styles from "./StatisticsMiniWidget.module.scss";

export const StatisticsMiniWidget = memo(({ data, title, icon }) => {
  return (
    <div className={styles.statisticsBlock}>
      <div className={styles.infoBlock}>
        <span className={styles.infoTitle}>{title}</span>
        <span className={styles.infoCount}>{data ? data : 0}</span>
      </div>
      <div className={styles.iconBlock}>{icon}</div>
    </div>
  );
});
