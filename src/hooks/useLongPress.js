import { useState, useEffect } from "react";

export default function useLongPress(
  callbackLongPress = () => {},
  callbackClick = (data) => {},
  ms = 1000
) {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callbackLongPress, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [callbackLongPress, ms, startLongPress]);

  return (data) => ({
    onClick: () => callbackClick(data),
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  });
}
