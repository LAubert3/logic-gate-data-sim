import React, { useState } from 'react'
import { View, Text, Image, Button, StyleSheet, } from 'react-native'
import { Picker } from '@react-native-picker/picker'

function LogicGateComponent() {
  const [chosenGate, setChosenGate] = useState('')
  const [output, setOutput] = useState('')
  const [inputA, setInputA] = useState('0')
  const [inputB, setInputB] = useState('0')
  const [selectedItem, setSelectedItem] = useState('GATE')
  const [rowOne, setRow1] = useState('')
  const [rowTwo, setRow2] = useState('')
  const [rowThree, setRow3] = useState('')
  const [rowFour, setRow4] = useState('')

  const handlePickerChange = (itemValue) => {
    setSelectedItem(itemValue)
  }

  const imageSources = {
    GATE: require('../assets/transistor.png'),
    NOT: require('../assets/not_gate.png'),
    OR: require('../assets/or_gate.png'),
    NOR: require('../assets/nor_gate.png'),
    AND: require('../assets/and_gate.png'),
    NAND: require('../assets/nand_gate.png'),
    XOR: require('../assets/xor_gate.png'),
    XNOR: require('../assets/xnor_gate.png'),
  }

  const calculateOutput = () => {
    const numInputA = parseInt(inputA)
    const numInputB = parseInt(inputB)
    let result = ''

    // for NOT gate
    if (numInputA === 1 && chosenGate === "NOT") {
      result = '0'
    } else if (numInputA === 0 && chosenGate === "NOT") {
      result = '1'
    }

    // for OR gate
    if (numInputA === 1 && numInputB === 1 && chosenGate === "OR") {
      result = "1"
    } else if (numInputA === 0 && numInputB === 0 && chosenGate === "OR") {
      result = "0"
    } else if (numInputA === 1 && numInputB === 0 && chosenGate === "OR") {
      result = "1"
    } else if (numInputA === 0 && numInputB === 1 && chosenGate === "OR") {
      result = "1"
    }

    // for NOR gate
    if (numInputA === 1 && numInputB === 1 && chosenGate === "NOR") {
      result = "0"
    } else if (numInputA === 0 && numInputB === 0 && chosenGate === "NOR") {
      result = "1"
    } else if (numInputA === 1 && numInputB === 0 && chosenGate === "NOR") {
      result = "0"
    } else if (numInputA === 0 && numInputB === 1 && chosenGate === "NOR") {
      result = "0"
    }

    // for AND gate
    if (numInputA === 1 && numInputB === 1 && chosenGate === "AND") {
      result = "1"
    } else if (numInputA === 0 && numInputB === 0 && chosenGate === "AND") {
      result = "0"
    } else if (numInputA === 1 && numInputB === 0 && chosenGate === "AND") {
      result = "0"
    } else if (numInputA === 0 && numInputB === 1 && chosenGate === "AND") {
      result = "0"
    }

    // for NAND gate
    if (numInputA === 1 && numInputB === 1 && chosenGate === "NAND") {
      result = "0"
    } else if (numInputA === 0 && numInputB === 0 && chosenGate === "NAND") {
      result = "1"
    } else if (numInputA === 1 && numInputB === 0 && chosenGate === "NAND") {
      result = "1"
    } else if (numInputA === 0 && numInputB === 1 && chosenGate === "NAND") {
      result = "1"
    }

    // for XOR gate
    if (numInputA === 1 && numInputB === 1 && chosenGate === "XOR") {
      result = "0"
    } else if (numInputA === 0 && numInputB === 0 && chosenGate === "XOR") {
      result = "0"
    } else if (numInputA === 1 && numInputB === 0 && chosenGate === "XOR") {
      result = "1"
    } else if (numInputA === 0 && numInputB === 1 && chosenGate === "XOR") {
      result = "1"
    }

    // for XNOR gate
    if (numInputA === 1 && numInputB === 1 && chosenGate === "XNOR") {
      result = "1"
    } else if (numInputA === 0 && numInputB === 0 && chosenGate === "XNOR") {
      result = "1"
    } else if (numInputA === 1 && numInputB === 0 && chosenGate === "XNOR") {
      result = "0"
    } else if (numInputA === 0 && numInputB === 1 && chosenGate === "XNOR") {
      result = "0"
    }
    setOutput(result)
  }

  const getTruthTable = (itemValue) => {
    let row1 = ''
    let row2 = ''
    let row3 = ''
    let row4 = ''

    if (itemValue === "GATE") {
      row1 = ''
      row2 = ''
      row3 = ''
      row4 = ''
    }
    if (itemValue === "NOT") {
      row1 = '1'
      row2 = '0'
      row3 = ''
      row4 = ''
    }
    if (itemValue === "OR") {
      row1 = '0'
      row2 = '1'
      row3 = '1'
      row4 = '1'
    }
    if (itemValue === "NOR") {
      row1 = '1'
      row2 = '0'
      row3 = '0'
      row4 = '0'
    }
    if (itemValue === "AND") {
      row1 = '0'
      row2 = '0'
      row3 = '0'
      row4 = '1'
    }
    if (itemValue === "NAND") {
      row1 = '1'
      row2 = '1'
      row3 = '1'
      row4 = '0'
    }
    if (itemValue === "XOR") {
      row1 = '0'
      row2 = '1'
      row3 = '1'
      row4 = '0'
    }
    if (itemValue === "XNOR") {
      row1 = '1'
      row2 = '0'
      row3 = '0'
      row4 = '1'
    }

    setRow1(row1)
    setRow2(row2)
    setRow3(row3)
    setRow4(row4)
  }

  //--------------

  return (
    <View>

      <View style={styles.allRows}>
        <View style={styles.topRow}>
          <Text style={styles.inOut}>a</Text>

          {selectedItem !== "NOT" && (
            <Text style={styles.inOut}>b</Text>
          )}

          <Text style={styles.inOut}>Output</Text>
        </View>

        <View style={styles.rowLayout}>
          <View style={styles.row1}>
            <Text style={styles.inOut}>0</Text>

            {selectedItem !== "NOT" && (
              <Text style={styles.inOut}>0</Text>
            )}
          </View>
          <View style={styles.row1Right}>
            <Text style={styles.valOut}>{rowOne}</Text>
          </View>
        </View>

        <View style={styles.rowLayout}>
          <View style={styles.row2}>
            {selectedItem !== "NOT" && (
              <Text style={styles.inOut}>0</Text>
            )}

            <Text style={styles.inOut}>1</Text>
          </View>
          <View style={styles.row2Right}>
            <Text style={styles.valOut}>{rowTwo}</Text>
          </View>
        </View>

        <View style={styles.rowLayout}>
          <View style={styles.row3}>
            {selectedItem !== "NOT" && (
              <Text style={styles.inOut}>1</Text>
            )}

            {selectedItem !== "NOT" && (
              <Text style={styles.inOut}>0</Text>
            )}

          </View>
          <View style={styles.row3Right}>
            <Text style={styles.valOut}>{rowThree}</Text>
          </View>
        </View>

        <View style={styles.rowLayout}>
          <View style={styles.bottomRow}>
            {selectedItem !== "NOT" && (
              <Text style={styles.inOut}>1</Text>
            )}

            {selectedItem !== "NOT" && (
              <Text style={styles.inOut}>1</Text>
            )}

          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.valOut}>{rowFour}</Text>
          </View>
        </View>

      </View>

      <Image style={styles.gateImage} source={imageSources[selectedItem]} />

      <Picker
        style={styles.logicGate}
        selectedValue={chosenGate || selectedItem || rowOne || rowTwo || rowThree || rowFour}
        onValueChange={(value) => {
          setChosenGate(value);
          handlePickerChange(value);
          getTruthTable(value)
        }}
      >
        <Picker.Item label="Select a logic gate" value="GATE"
        />
        <Picker.Item label="NOT" value="NOT"
        />
        <Picker.Item label="OR" value="OR"
        />
        <Picker.Item label="NOR" value="NOR"
        />
        <Picker.Item label="AND" value="AND"
        />
        <Picker.Item label="NAND" value="NAND"
        />
        <Picker.Item label="XOR" value="XOR"
        />
        <Picker.Item label="XNOR" value="XNOR"
        />
      </Picker>

      <View style={styles.inputContainer}>
        {selectedItem !== "GATE" && (
          <View style={styles.input}>
            <Text style={styles.labelInput}>Input a:  {inputA}</Text>

            <Picker
              selectedValue={inputA}
              onValueChange={(value) => setInputA(value)}
            >
              <Picker.Item label="0" value="0" />
              <Picker.Item label="1" value="1" />
            </Picker>
          </View>
        )}

        {selectedItem !== "GATE" && (
          <View style={styles.input}>
            {selectedItem !== "NOT" && (
              <Text style={styles.labelInput}>Input b: {inputB}</Text>
            )}

            {selectedItem !== "NOT" && (
              <Picker
                selectedValue={inputB}
                onValueChange={(value) => setInputB(value)}
              >
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
              </Picker>
            )}
          </View>
        )}
      </View>

      {selectedItem === "GATE" && (
        <View style={styles.spacing}></View>
      )}

      <View style={styles.outputBox}>
        <Text style={styles.outText}>Output:  {output}</Text>
      </View>

      <View style={styles.buttonStyle}>
        <Button
          title="Submit"
          onPress={() => calculateOutput()}
          color="#FFA500"
        />
      </View>

    </View>
  )
}

export default LogicGateComponent


const styles = StyleSheet.create({
  gateImage: {
    width: 150,
    height: 150,
    backgroundColor: 'rgb(254, 238, 219)',
    borderRadius: 5,
    marginTop: '2.5%',
    marginBottom: '2.5',
    marginHorizontal: '35%',
  },
  logicGate: {
    height: 40,
    width: 200,
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginTop: '5%',
    marginBottom: '2.5',
    marginHorizontal: '30%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: '2.5%',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 25,
    width: 40,
    marginVertical: '5%',
  },
  labelInput: {
    fontWeight: 'bold',
    width: 100,
    fontSize: 20,
  },
  buttonStyle: {
    width: 100,
    zIndex: 1,
    marginTop: '7.5%',
    marginBottom: '5.5%',
    marginHorizontal: '40%',
  },
  outputBox: {
    width: 200,
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'antiquewhite',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '10%',
    marginHorizontal: '30%',
  },
  outText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inOut: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  valOut: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  allRows: {
    marginTop: '10%',
    marginHorizontal: '25%',
  },
  rowLayout: {
    flexDirection: 'row',
  },
  topRow: {
    flexDirection: 'row',
    width: 250,
    height: 40,
    backgroundColor: '#FFA500',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    justifyContent: 'space-between',
  },
  row1: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    borderRightColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row1Right: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    borderLeftWidth: 1,
    borderLeftColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row2: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row2Right: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    borderLeftWidth: 1,
    borderLeftColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row3: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row3Right: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    borderLeftWidth: 1,
    borderLeftColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomRow: {
    marginBottom: '10%',
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomRight: {
    width: 125,
    height: 40,
    backgroundColor: 'antiquewhite',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 0,
    borderLeftWidth: 1,
    borderLeftColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  spacing: {
    marginBottom: '15%',
  }
})

