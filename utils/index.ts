export const formatTime = (time: number) => {
  let hours = Math.floor(time / 60 / 60);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = time % 60;
  const _time = `${minutes < 10 && minutes > -1 ? '0' : ''}${minutes}:${
    seconds < 10 && seconds > -1 ? '0' : ''
  }${seconds}`;
  if (hours > 0) {
    return `${hours < 10 && hours > -1 ? '0' : ''}${hours}:${_time}`;
  }
  return _time;
};

export const toSeconds = (
  minutes: number | string,
  seconds: number | string,
) => {
  return Number(minutes) * 60 + Number(seconds);
};

export const validateInput = (
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  maxValue: number = 59,
  minValue: number = 0,
): number => {
  let temp = value;
  if (isNaN(value)) {
    temp = 0;
  }
  if (value < minValue) {
    temp = minValue;
  }
  if (value > maxValue) {
    temp = maxValue;
  }
  if (temp !== value) {
    setValue(temp);
  }
  return Number(temp);
};
