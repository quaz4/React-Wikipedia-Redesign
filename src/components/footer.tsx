import * as React from 'react';

class Footer extends React.Component<{}, {}> {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <footer>
        <div className="content">
          <p>
            Text is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
          </p>
        </div>
      </footer>
    );
  }
}

export { Footer };
export default Footer;