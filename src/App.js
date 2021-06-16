import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

// removeCharacter = (index) => {
//       const {characters} = this.state
//
//       this.setState({
//             characters: characters.filter((character, i) => {
//                   return i !== index
//             }),
//       })
// }

class App extends Component {
      state = {
            characters : []
      }
      removeCharacter = (index) => {
            const {characters} = this.state

            this.setState({
                  characters: characters.filter((character, i) => {
                        return i !== index
                  }),
            })
      }
      handleSubmit = (character) => {
            const {characters} = this.state

            this.setState({
                  // Spread Syntax
                  characters: [...this.state.characters, character]
            })
      }
      render() {
            const {characters} = this.state
            return (
                  <div className = "App">
                        <h1>Hello, React!</h1>
                        <Table characterData = {this.state.characters} removeCharacter = {this.removeCharacter}/>
                        <Form handleSubmit = {this.handleSubmit}/>
                  </div>
            )
      }
}

export default App
