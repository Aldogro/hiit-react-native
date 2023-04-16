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
    gap: 12,
    paddingTop: 18,
    paddingBottom: 18,
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
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  label: {
    minWidth: '100%',
    padding: 10,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 16,
  },
  totalTime: {
    padding: 10,
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
  sessionTrainingTitle: {
    borderWidth: 1,
    borderColor: 'white',
    margin: 8,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 12,
    padding: 12,
  },
  button: {
    flex: 1,
    minWidth: 390,
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

export const FormItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    padding: 12,
    margin: 8,
  },
  halfScreen: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  deleteFormItem: {
    alignSelf: 'flex-end',
    marginTop: 30,
    color: 'tomato',
    borderColor: 'tomato',
    backgroundColor: '#ff634744',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
});

export const LabeledInputStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
  },
  label: {
    textAlign: 'center',
  },
  inputWrapper: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#444444',
    borderRadius: 12,
    textAlign: 'center',
  },
  iconButton: {
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    minWidth: 40,
    borderRadius: 30,
    fontSize: 14,
  },
});

export const SettingsStyles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
  },
  soundsContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 250,
    width: '90%',
    gap: 20,
  },
  soundsRow: {
    flex: 1,
    gap: 20,
    justifyContent: 'flex-start',
  },
  soundsButton: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    color: 'gray',
    paddingTop: 28,
    fontSize: 14,
    minHeight: 80,
  },
  active: {
    backgroundColor: '#16611681',
    borderColor: '#35e635',
    color: '#35e635',
  },
});

export const TrainingListStyles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    width: '90%',
    gap: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
  },
  actionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderColor: 'cyan',
    padding: 12,
    borderRadius: 8,
    minWidth: 75,
    textAlign: 'center',
  },
  start: {
    backgroundColor: '#16611681',
    borderColor: '#35e635',
    color: '#35e635',
  },
  edit: {
    backgroundColor: '#00FFFF44',
    borderColor: '#00FFFF',
    color: '#00FFFF',
  },
  delete: {
    color: 'tomato',
    borderColor: 'tomato',
    backgroundColor: '#ff634744',
  },
  disabled: {
    backgroundColor: '#8080808f',
    borderColor: '#acacac8f',
    color: '#acacac8f',
  },
  summary: {
    flex: 1,
    flexDirection: 'column',
  },
  summaryTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  summaryInfo: {
    marginTop: 8,
    fontSize: 17,
  },
});
