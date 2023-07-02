export function calculateTimeElapsed(postDate: Date, currentDate = new Date()) {
  if (postDate) {
    const timeElapsed = currentDate.getTime() - postDate.getTime();
    const seconds = Math.floor(timeElapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} дней`;
    } else if (hours > 0) {
      return `${hours} час`;
    } else if (minutes > 0) {
      return `${minutes} мин.`;
    } else {
      return `${seconds} сек.`;
    }
  }
  return "";
}
