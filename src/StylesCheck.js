import React from "react";

export default class StylesCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialName: this.props.name
    };

    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.updatedName === undefined) {
        this.setState({
          initialName: this.props.devs[
            Math.floor(Math.random() * this.props.devs.length)
          ]
        });
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  handleNameUpdate(e) {
    this.setState({ updatedName: e.target.value });
  }

  render() {
    const { updatedName, initialName } = this.state;
    return (
      <>
        <h1>
          <span>
            Hello, <span>{updatedName || initialName}</span>
          </span>
        </h1>

        <input onChange={this.handleNameUpdate} />
        <span>
          <ul>
            {this.props.devs.map((element, index) => (
              <li key={`${element}-${index}`}>
                <span>{element}</span>
              </li>
            ))}
          </ul>
        </span>
      </>
    );
  }
}
