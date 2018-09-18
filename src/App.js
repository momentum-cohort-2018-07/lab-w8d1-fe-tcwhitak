import React, { Component } from 'react'

import textOptions from './textOptions'

import TextEntry from './TextEntry'

import ShrunkText from './ShrunkText'

import OptionsRow from './OptionsRow'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '',
      options: []
    }

    this.updateText = this.updateText.bind(this)
    this.setOption = this.setOption.bind(this)
  }

  updateText (event) {
    this.setState({ text: event.target.value })
  }

  setOption (option) {
    return (event) => {
      const value = event.target.checked
      console.log(value)
      const optionSet = new Set(this.state.options)
      if (value) {
        optionSet.add(option)
      } else {
        optionSet.delete(option)
      }
      this.setState({
        options: [...optionSet]
      })
    }
  }

  shrinkText () {
    let { text, options } = this.state

    if (!text) {
      return ''
    }

    let opObj
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      if (opObj) {
        text = opObj.fn(text)
      }
    })

    return text
  }
  render () {
    const text = this.state.text
    const shrunkText = this.shrinkText()
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <TextEntry text={text} updateText={this.updateText} />
          <ShrunkText shrunkText={shrunkText} />
        </div>
        <OptionsRow textOptions={textOptions} setOption={this.setOption} />
      </div>
    )
  }
}

export default App
