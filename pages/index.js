import React from 'react';
import Work from '../components/Work';
import Layout from '../components/Layout';

const Data = () => {
    const WorkLists = [
        {
            name:'Example Blog',
            description:'Gatsbyを学習するためチュートリアルを参考にして作成し、Netlifyへデプロイしました。',
            image:'../static/image/exampleblog.png',
            url:'https://youthful-williams-7f4bf8.netlify.app/',
            details:'Reactでブログを作成するにあたり、フレームワークの候補としてGatsbyかNextが挙がりましたがGatsbyの方が速くGraphQLが使えるとのことなのでこちらを採用しました。',
            skill:'React,Gatsby',
        },
        {
            name:'Ryo Portfolio',
            description:'Nextjsを用いて作成したポートフォリオで、Vercelにデプロイしました。',
            image:'../static/image/portfolio.png',
            url:'https://portfolio-one-theta.vercel.app/',
            details:'Reactで作成したポートフォリオサイトをNextjsに移行しました。レスポンシブでシンプルなデザインとなるよう意識しました。',
            skill:'React,Nextjs'
        },
        {
            name:'Ryo Blog',
            description:'学習のアウトプットとしての情報発信兼新たな技術を試すためのサイトです',
            image:'../static/image/ryoblog.png',
            url:'https://www.ryoblg.com/',
            details:'このサイトはNetlifyにデプロイされ、Contentfulで書かれた記事を取得しています。また、シンタックスハイライトやその他ツールなどブログとして活用できそうな機能を実際に取り入れて試すということも行っています。',
            skill:'React,Gatsby,GraphQL'
        },
    ]
    return (
        <Layout description='これまでの制作物を紹介しています。'>
            <div className='contents'>
                <h2>Works</h2>
                <div className='wrapper'>
                    <div className='work-back'>
                        {WorkLists.map((work) => {
                            return(
                                <Work 
                                    name={work.name}
                                    description={work.description}
                                    image={work.image}
                                    url={work.url}
                                    details={work.details}
                                    skill={work.skill}
                                    isPortfolio={true}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Data;
