import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='home'>
            HOME<Link to="login">longin</Link>
        </div>
      </div>
    );
  }
}

export default Home;

