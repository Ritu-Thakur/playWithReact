import React from "react";

export default class ClassComponent extends React.Component {
  // What is needed to access this and props?
  constructor(props) {
    super(props);
    this.state = {
      initialName: this.props.name,
      updatedName: undefined
    };
    this.timer = null;
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  }

  // What lifecycle method is needed to insure this is
  // only ran once when component mounts?
  componentDidMount() {
    this.setInterval();
  }

  setInterval() {
    this.timer = setInterval(() => {
      if (this.state.updatedName === undefined) {
        this.setState({
          initialName: this.props.devs[
            Math.floor(Math.random() * this.props.devs.length)
          ]
        });
      }
    }, 2000);
  }

  // How can we clean up after this component unmounts?
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // How do we access this in our method?
  handleNameUpdate(e) {
    this.setState({ updatedName: e.target.value });
    if (e.target.value === "") {
      clearInterval(this.timer);
      this.setState({ updatedName: undefined });
      this.setInterval();
    }
  }

  render() {
    // How can we reference our state and prop properties directly without
    // using this.state or this.props?
    return (
      /* How do we fix this without outputing any more elements? */
      <>
        <h1>
          Hello
          {this.state.updatedName
            ? `, ${this.state.updatedName}`
            : `, ${this.state.initialName}`}
        </h1>

        <input onChange={this.handleNameUpdate} />
        <ul>
          {
            /* What prop required here for react to track changes? */
            this.props.devs.map((element, index) => (
              <li key={`${element}-${index}`}>{element}</li>
            ))
          }
        </ul>
      </>
    );
  }
}
