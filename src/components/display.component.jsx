import React from 'react'

class Display extends React.Component {
    render() {
    return(
        <div>
            <section id="display">{this.props.current}</section>
            <section id="displayTotal">{this.props.result}</section>
        </div>
    )
}
}
export default Display;