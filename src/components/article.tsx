import * as React from 'react';

class Article extends React.Component<{ imageSrc: string, title: string, extract: string }, {}> {
  render() {
    return (
      <article className="articlePreview">
        <img src={this.props.imageSrc} alt=""/>
        <h3>{this.props.title}</h3>
        <p>{this.props.extract}</p>
        <button>Read More</button>
      </article>
    );
  }
}

export { Article };
export default Article;