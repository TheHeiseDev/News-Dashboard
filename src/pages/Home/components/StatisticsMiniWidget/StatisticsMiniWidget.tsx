import styles from "./StatisticsMiniWidget.module.scss";
import { memo } from "react";
import { IMiniWidget } from "./types";

export const StatisticsMiniWidget = memo(({ data, title, icon }: IMiniWidget) => {
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
