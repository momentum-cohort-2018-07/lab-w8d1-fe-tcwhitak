
import React, { Component } from 'react'

class TextOption extends Component {
  render () {
    const { option, setOption } = this.props
    return (
      <div className='col-6'>
        {/* TextOption */}
        <label htmlFor={option.id}>
          <input type='checkbox'
            id={option.id}
            onChange={setOption(option.id)} /> {' ' + option.label}
        </label>
        {/* end TextOption */}
      </div>
    )
  }
}

export default TextOption
