import { useState, useEffect } from "react";

export function useDeviceInfo() {
  const [deviceInfo, setDeviceInfo] = useState({ device: "", os: "" });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    let deviceType = "";
    let os = "";

    if (/android/i.test(userAgent)) {
      deviceType = "Mobile";
      os = "Android";
    } else if (/iphone/i.test(userAgent) || /ipod/i.test(userAgent)) {
      deviceType = "Mobile";
      os = "iOS";
    } else if (/ipad/i.test(userAgent)) {
      deviceType = "Tablet";
      os = "iOS";
    } else if (/mac/i.test(userAgent)) {
      deviceType = "Desktop";
      os = "macOS";
    } else if (/windows phone/i.test(userAgent)) {
      deviceType = "Mobile";
      os = "Windows Phone";
    } else if (/Win64/i.test(userAgent)) {
      deviceType = "Tablet";
      os = "Windows";
    } else {
      deviceType = "Другие";
      os = navigator.platform;
    }

    setDeviceInfo({ device: deviceType, os });
  }, []);

  return deviceInfo;
}
