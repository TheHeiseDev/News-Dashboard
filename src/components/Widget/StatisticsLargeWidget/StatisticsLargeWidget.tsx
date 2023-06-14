import { memo } from "react";
import styles from "./StatisticsLargeWidget.module.scss";
import chart from "../../../assets/chart.webp";
import { TfiWorld } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";

interface ILargeWidget {
  data: any;
  title: string;
}

export const StatisticsLargeWidget = memo(({ data, title }: ILargeWidget) => {
  return (
    <div className={styles.largeWidgetWrapper}>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.checkInfo}>
          <AiFillCheckCircle />
          <span>За весь период</span>
        </span>
        <div className={styles.chart}>
          <img src={chart} alt="chart" />
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className={styles.statisticsBlock}>
        {data ? (
          <>
            <div className={styles.headerTables}>
              <span>Страна</span>
              <span>Посещения</span>
            </div>
            <ul className={styles.statisticsList}>
              {data.map((visit: any) => (
                <li key={visit.country} className={styles.visitItem}>
                  <div className={styles.visitItemWrapper}>
                    <span className={styles.itemTitle}>
                      <TfiWorld /> {visit.country}
                    </span>
                    <span className={styles.itemQuantity}>{visit.quantity}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className={styles.loadingContainer}>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
});
