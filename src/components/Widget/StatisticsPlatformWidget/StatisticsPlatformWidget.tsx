import styles from "./StatisticsPlatformWidget.module.scss";
import { memo, useEffect, useMemo, useState } from "react";
import { VerticalChart } from "../../Charts/VerticalChart";
import { TfiWorld } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";


type PlatformData = {
  platform: string;
  quantity: number;
};
interface IPlatformWidget {
  data: PlatformData[] | undefined;
  title: string;
}

export const StatisticsPlatformWidget = memo(({ data, title }: IPlatformWidget) => {
  const [dataChart, setDataChart] = useState<object | null>(null);
  const [deviceNameList, setDeviceNameList] = useState<string[]>([]);
  const [deviceQuantityList, setDeviceQuantityList] = useState<number[]>([]);

  const dataParam = useMemo(
    () => ({
      labels: deviceNameList,
      datasets: [
        {
          label: "Устройство",
          data: deviceQuantityList,
          backgroundColor: "rgb(57, 241, 152)",
        },
      ],
    }),
    [deviceNameList, deviceQuantityList]
  );

  useEffect(() => {
    if (data && data.length) {
      const deviceName = data.map((item: PlatformData) => item.platform);
      const deviceQuantity = data.map((item: PlatformData) => item.quantity);

      setDeviceNameList(deviceName);
      setDeviceQuantityList(deviceQuantity);
    }
  }, [data]);

  useEffect(() => {
    setDataChart(dataParam);
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
              {data.map((item: PlatformData) => (
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
