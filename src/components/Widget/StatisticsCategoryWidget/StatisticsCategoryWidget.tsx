import { memo, useCallback, useEffect, useState } from "react";
import styles from "./StatisticsCategoryWidget.module.scss";
import { TfiWorld } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";
import { VerticalChart } from "../../Charts/VerticalChart";

type data = {
  category: string;
  quantity: number;
};
interface ICategoryWidget {
  data: data[] | undefined;
  title: string;
}

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

  useEffect(() => {
    if (data && data.length) {
      const deviceName = data.map((item: data) => setCategoryName(item.category));
      const deviceQuantity = data.map((item: any) => item.quantity);

      setDeviceNameList(deviceName);
      setDeviceQuantityList(deviceQuantity);
    }
  }, [data]);

  useEffect(() => {
    const datas = {
      labels: categoryNameList,
      datasets: [
        {
          label: "Устройство",
          data: categoryQuantityList,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    setDataChart(datas);
  }, [categoryNameList,categoryQuantityList]);
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
              {data.map((item: data) => (
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
