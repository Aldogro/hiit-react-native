import SoundPlayer from 'react-native-sound-player';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const playSound = (name: string) => {
  try {
    SoundPlayer.playSoundFile(name, 'mp3');
  } catch (e) {
    console.log(`cannot play the sound file ${name}`, e);
  }
};

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data Stored successfully');
  } catch (error) {
    console.error('Failed to store data', error);
  }
};

export const retrieveData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve data: ', error);
  }
};

export const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove data: ', error);
  }
};
