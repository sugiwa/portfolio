import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const App = (props) => {
  const title = props.title
    ? `${props.title}|Ryo Portfolio`
    : `Ryo Portfolio`

  const description = props.description
    ? props.description
    : 'RyoのPortfolioです。'

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta charSet='utf-8' />
        <meta name='viewport'
            content='initial-scale=1.0, width=device-width' />
        <link rel="shortcut icon" href="/static/image/profile.png" />
      </Head>
      <nav className='menu'>
        <ul>
          <li><Link href='/'><a>Works</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/blog'><a>Blog</a></Link></li>
        </ul>
      </nav>
      <div className='top-image'>Ryo Portfolio</div>
      <div className='content-width'>
        {props.children}
      </div>
    </div>
  );
}

export default App;
