import React, { Component } from 'react'

class TextEntry extends Component {
  render () {
    const { text, updateText } = this.props
    return (
      <div className='col'>
        {/* TextEntry */}
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={updateText}
          value={text} />
        <div>
          {text && `${text.length} characters`}
        </div>
        {/* end TextEntry */}
      </div>
    )
  }
}

export default TextEntry
