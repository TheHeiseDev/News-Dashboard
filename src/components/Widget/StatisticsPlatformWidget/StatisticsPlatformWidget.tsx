import { memo, useEffect, useState } from "react";
import styles from "./StatisticsPlatformWidget.module.scss";
import { TfiWorld } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";
import { VerticalChart } from "../../Charts/VerticalChart";

type data = {
  platform: string;
  quantity: number;
};
interface IPlatformWidget {
  data: data[] | undefined;
  title: string;
}

export const StatisticsPlatformWidget = memo(({ data, title }: IPlatformWidget) => {
  const [dataChart, setDataChart] = useState<object | null>(null);
  const [deviceNameList, setDeviceNameList] = useState<string[]>([]);
  const [deviceQuantityList, setDeviceQuantityList] = useState<number[]>([]);

  useEffect(() => {
    if (data && data.length) {
      const deviceName = data.map((item: data) => item.platform);
      const deviceQuantity = data.map((item: any) => item.quantity);

      setDeviceNameList(deviceName);
      setDeviceQuantityList(deviceQuantity);
    }
  }, [data]);

  useEffect(() => {
    const datas = {
      labels: deviceNameList,
      datasets: [
        {
          label: "Устройство",
          data: deviceQuantityList,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
    setDataChart(datas);
  }, [deviceNameList, deviceQuantityList]);
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
                <li key={item.platform} className={styles.visitItem}>
                  <div className={styles.visitItemWrapper}>
                    <span className={styles.itemTitle}>
                      <TfiWorld /> {item.platform}
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
