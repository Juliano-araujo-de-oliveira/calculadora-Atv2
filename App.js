import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import  {Styles} from './src/Style';

export default function App() {
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, "x", 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '+/-', '=']

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")
 

  function calculator() {
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    // Faz ação referente tecla pressionada
    switch (operator) {
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-':
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case 'x':
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/':
        setCurrentNumber((fistNumber / lastNumber).toString())
        return

    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed) // Mostra no Console a tecla pressionada


    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "/") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    };

    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      }

    setCurrentNumber(currentNumber + buttonPressed)
  }

  return (
    <View style={Styles.container}>

      {/* Area onde o resultado é exibido */}
      <View style={Styles.results}>
        <Text style={Styles.historyText}>{lastNumber}</Text>
        <Text style={Styles.resultText}>{currentNumber}</Text>
      </View>

      {/* Area onde os botões são exibidos*/}
      <View style={Styles.buttons}>

        {buttons.map((button) =>
          button === '=' ? // Mapeamento do botão =
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[Styles.button, { backgroundColor: '#3dd0e3' }]}>
              <Text style={[Styles.textButton, { color: "white", fontSize: 30 }]}>{button}</Text>
            </TouchableOpacity>
            : // Mapeamento dos outros botões
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={Styles.button}>
              <Text style={[Styles.textButton, { color: typeof (button) === 'number' ? '#FFFAF0' : '#DCDCDC' }]}>{button}</Text>
            </TouchableOpacity>


        )}
      </View>
    </View>

  );
}

