import { StyleSheet} from 'react-native';

// Estilização
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#4B0082"
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#4B0082"
  },
  resultText: {
    color: "#FFFAF0",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right"
  },
  historyText: {
    color:"#FFFAF0",
    fontSize: 25,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#9370DB',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    minHeight: 110,
    flex: 2,
  },
  textButton: {
    color: "#FFFAF0",
    fontSize: 20,
  }
});
export {Styles}