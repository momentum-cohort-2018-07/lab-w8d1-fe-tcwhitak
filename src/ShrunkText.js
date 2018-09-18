import React, { Component } from 'react'

class ShrunkText extends Component {
  render () {
    const { shrunkText } = this.props
    return (
      <div className='col'>
        {/* ShrunkText */}
        <div className='TextEntry-shrunk-text'>
          {shrunkText}
        </div>
        <div>
          {shrunkText && `${shrunkText.length} characters`}
        </div>
        {/* end ShrunkText */}
      </div>
    )
  }
}

export default ShrunkText
