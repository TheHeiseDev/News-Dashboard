import styles from "./StatisticsCategoryWidget.module.scss";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { VerticalChart } from "../../../../components/Charts/VerticalChart";
import { TfiWorld } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";
import { ICategoryWidget, dataCategory } from "./types";

export const StatisticsCategoryWidget = memo(({ data, title }: ICategoryWidget) => {
  const [dataChart, setDataChart] = useState<object | null>(null);
  const [categoryNameList, setDeviceNameList] = useState<string[]>([]);
  const [categoryQuantityList, setDeviceQuantityList] = useState<number[]>([]);

  const setCategoryName = useCallback((categoryValue: string) => {
    if (categoryValue === "it_news") {
      return "Новости ИТ";
    }
    if (categoryValue === "ai") {
      return "AI";
    }
    if (categoryValue === "useful_services") {
      return "Полезные ресуры";
    }
    if (categoryValue === "courses") {
      return "Курсы";
    } else {
      return "Другие";
    }
  }, []);

  const dataParam = useMemo(
    () => ({
      labels: categoryNameList,
      datasets: [
        {
          label: "Устройство",
          data: categoryQuantityList,
          backgroundColor: "rgb(57, 241, 152)",
        },
      ],
    }),
    [categoryNameList, categoryQuantityList]
  );

  useEffect(() => {
    if (data && data.length) {
      const deviceName = data.map((item: dataCategory) => setCategoryName(item.category));
      const deviceQuantity = data.map((item: dataCategory) => item.quantity);

      setDeviceNameList(deviceName);
      setDeviceQuantityList(deviceQuantity);
    }
  }, [data, setCategoryName]);

  useEffect(() => {
    setDataChart(dataParam);
  }, [dataParam]);

  return (
    <div className={styles.largeWidgetWrapper}>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.checkInfo}>
          <AiFillCheckCircle />
          <span>За весь период</span>
        </span>
        <div className={styles.chart}>
          {dataChart && <VerticalChart data={dataChart} />}
        </div>
      </div>

      <div className={styles.divider}></div>
      <div className={styles.statisticsBlock}>
        {data ? (
          <>
            <div className={styles.headerTables}>
              <span>Устройство</span>
              <span>Посещения</span>
            </div>
            <ul className={styles.statisticsList}>
              {data.map((item: dataCategory) => (
                <li key={item.category} className={styles.visitItem}>
                  <div className={styles.visitItemWrapper}>
                    <span className={styles.itemTitle}>
                      <TfiWorld /> {setCategoryName(item.category)}
                    </span>
                    <span className={styles.itemQuantity}>{item.quantity}</span>
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
