export const formatTime = (time: number) => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${minutes < 10 && minutes > -1 ? '0' : ''}${minutes}:${
    seconds < 10 && seconds > -1 ? '0' : ''
  }${seconds}`;
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
