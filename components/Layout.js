import React from 'react';
import Link from 'next/link';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
          number:0
      }
  }
  render(){
      return (
        <div>
          <nav className='menu'>
            <ul>
              <li><Link href='/'><a>Works</a></Link></li>
              <li><Link href='/about'><a>About</a></Link></li>
              <li><Link href='/blog'><a>Blog</a></Link></li>
            </ul>
          </nav>
          <div className='top-image'>Ryo Portfolio</div>
          <div className='content-width'>
            {this.props.children}
          </div>
        </div>
      );
  }
}

export default App;
