import {StyleSheet} from 'react-native';

export const DarkBackground = StyleSheet.create({
  darkBackground: {
    backgroundColor: '#2c2c2c',
  },
});

export const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerComplete: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  textComplete: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  actionButton: {
    flex: 1,
    minWidth: 188,
    maxHeight: 60,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  reset: {
    color: 'tomato',
    borderColor: 'tomato',
    backgroundColor: '#ff634744',
  },
});

export const DisplayStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    minWidth: '100%',
    padding: 10,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  totalTime: {
    padding: 10,
    marginTop: -15,
  },
  roundWrapper: {
    flex: 1,
    maxHeight: 350,
    width: '100%',
    padding: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  isWorkTime: {
    backgroundColor: 'tomato',
  },
  isRestTime: {
    backgroundColor: 'teal',
  },
  timeLeftLabel: {
    fontSize: 35,
  },
  timeLeft: {
    fontSize: 110,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  roundsLeft: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxHeight: 55,
    marginTop: 14,
    gap: 14,
  },
  actionButton: {
    flex: 1,
    minWidth: 188,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  toggle: {
    backgroundColor: '#16611681',
    borderColor: '#35e635',
    color: '#35e635',
  },
  reset: {
    color: 'tomato',
    borderColor: 'tomato',
    backgroundColor: '#ff634744',
  },
  disabled: {
    backgroundColor: '#8080808f',
    borderColor: '#acacac8f',
    color: '#acacac8f',
  },
});

export const InputStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxHeight: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    maxHeight: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'transparent',
    maxHeight: 60,
    fontSize: 15,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    maxHeight: 30,
    maxWidth: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    lineHeight: 15,
  },
});

export const ShowValuesStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  timerContainer: {
    maxHeight: 400,
  },
  timer: {
    fontSize: 30,
  },
  roundTimerWrapper: {
    minWidth: '90%',
    justifyContent: 'center',
    borderRadius: 20,
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  workTime: {
    backgroundColor: 'tomato',
  },
  restTime: {
    backgroundColor: 'teal',
  },
  roundTimer: {
    fontSize: 100,
  },
  roundsContainer: {
    maxHeight: 80,
    marginBottom: 10,
  },
  rounds: {
    fontSize: 50,
  },
});

export const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    minWidth: 188,
    textAlign: 'center',
    color: 'goldenrod',
    borderColor: 'goldenrod',
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
  },
  addExercise: {
    backgroundColor: '#daa52063',
    color: '#ffc01f',
    minWidth: 390,
  },
  start: {
    backgroundColor: '#16611681',
    borderColor: '#35e635',
    color: '#35e635',
  },
  disabled: {
    backgroundColor: '#8080808f',
    borderColor: '#acacac8f',
    color: '#acacac8f',
  },
  actionsWrapper: {
    marginTop: 14,
    gap: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
