import * as React from 'react';

class Hero extends React.Component<{ className: string, src: string, title: string, subtitle: string }, {}> {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const classes = this.props.className + " hero"

    return (
      <section className={classes}>
        <div className="tint"></div>

        <div className="title">
          <h4>{this.props.subtitle}</h4>
          <h2 >{this.props.title}</h2>
        </div>

        <img src={this.props.src} alt=""/>
      </section>
    );
  }
}

export { Hero };
export default Hero;