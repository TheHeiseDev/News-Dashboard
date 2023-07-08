export enum CategoryEnum {
    it_news = "it_news",
    ai = "ai",
    useful_services = "useful_services",
    courses = "courses",
  }


export   const setCategoryName = (categoryValue: string) => {
    if (categoryValue === CategoryEnum.it_news) {
      return "Новости ИТ";
    }
    if (categoryValue === CategoryEnum.ai) {
      return "AI";
    }
    if (categoryValue === CategoryEnum.useful_services) {
      return "Полезные ресуры";
    }
    if (categoryValue === CategoryEnum.courses) {
      return "Курсы";
    }
  };
