import { memo, useEffect, useState } from "react";
import styles from "./StatisticsLargeWidget.module.scss";
import chart from "../../../assets/chart.webp";
import { TfiWorld } from "react-icons/tfi";
import { AiFillCheckCircle } from "react-icons/ai";
import CircularProgress from "@mui/material/CircularProgress";
import { CircleChart, bgColorRandom } from "../../Charts/CircleChart";

interface ILargeWidget {
  data: any;
  title: string;
}

export const StatisticsLargeWidget = memo(({ data, title }: ILargeWidget) => {
  const [dataChar, setDataChar] = useState<object | null>(null);
  const [dataCountryQuantity, setDataCountryQuantity] = useState([]);
  const [dataCountryNames, setDataCountryNames] = useState([]);

  useEffect(() => {
    if (data && data.length) {
      const countryArr = data.map((item: any) => item.quantity);
      const countryArrNames = data.map((item: any) => item.country);
      setDataCountryQuantity(countryArr);
      setDataCountryNames(countryArrNames);
    }
  }, [data]);

  useEffect(() => {
    const datas = {
      labels: dataCountryNames,
      datasets: [
        {
          label: "Кол-во",
          data: dataCountryQuantity,
          backgroundColor: bgColorRandom(dataCountryQuantity.length),
          borderColor: ["black"],
          borderWidth: 1,
        },
      ],
    };
    setDataChar(datas);
  }, [dataCountryQuantity]);

  // console.log(dataCountry)
  return (
    <div className={styles.largeWidgetWrapper}>
      <div className={styles.titleContainer}>
        <h4 className={styles.title}>{title}</h4>
        <span className={styles.checkInfo}>
          <AiFillCheckCircle />
          <span>За весь период</span>
        </span>
        <div className={styles.chart}>
          {dataChar ? <CircleChart data={dataChar} /> : <div>Char</div>}
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
