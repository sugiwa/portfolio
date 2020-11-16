import React from 'react';
import Work from '../components/Work';
import Layout from '../components/Layout';

const Profile = () => {
    const skillList = [
        {
            name:'HTML5',
            description:'基本的な操作やweb制作は可能です。',
            image:'../static/image/html-5.svg',
            experience:'半年',
        },
        {
            name:'CSS3',
            description:'基本的な操作やデザインは可能です。',
            image:'../static/image/css-3.svg',
            experience:'半年',
        },
        {
            name:'JavaScript',
            description:'基本的な操作や関数は可能です。',
            image:'../static/image/javascript.svg',
            experience:'半年',
        },
        {
            name:'React',
            description:'基本的な操作は可能です。Vueは学習コストが少ないと聞くのでこちらを学んでおくのが無難だと考えました。',
            image:'../static/image/react.svg',
            experience:'3ヶ月',
        },
        {
            name:'Redux',
            description:'Reactの技術力を上げるために学習しています。',
            image:'../static/image/redux.svg',
            experience:'1ヶ月',
        },
        {
            name:'Gatsby',
            description:'ブログを作成する際に使用しています。',
            image:'../static/image/gatsby.svg',
            experience:'2ヶ月',
        },
        {
            name:'GraphQL',
            description:'基本的な操作は可能です。',
            image:'../static/image/graphql.svg',
            experience:'1ヶ月',
        },
        {
            name:'Next.js',
            description:'Webアプリ開発に使用するため学習しています。',
            image:'../static/image/nextjs.svg',
            experience:'1ヶ月',
        },
        {
            name:'Python',
            description:'Numpyなどの基本的なライブラリも使用可能です。',
            image:'../static/image/python.svg',
            experience:'1年以上',
        },
        {
            name:'C',
            description:'一通り学習済みです。Linuxも少し触ることが出来ます。',
            image:'../static/image/c.svg',
            experience:'1年以上',
        },
    ]
    const learningList = [
        {
            name:'Ruby',
            description:'基本的な操作は可能です。',
            image:'../static/image/ruby.svg',
            experience:'',
        },
        {
            name:'Rails',
            description:'基本的な操作は可能です。APIを作成するため学習中',
            image:'../static/image/rails.svg',
            experience:'',
        },
        {
            name:'TypeScript',
            description:'より高度な開発を行うため学習中',
            image:'../static/image/typescript.svg',
            experience:''
        }
    ]

    return (
        <Layout title='About' description='Ryoのプロフィールとスキルを紹介しています。'>
            <div className='contents'>
                <h2>Profile</h2>
                <div className='wrapper'>
                    <div className='profile'>
                        <div>
                            <img src='../static/image/profile.png' alt='プロフィール写真'/>
                        </div>
                        <div className='myname'>
                            <p>若杉凌大(Wakasugi Ryota)</p>
                            <p>大学：信州大学工学部3年</p>
                            <p>趣味：旅行、音楽、読書</p>
                            <p>GitHub：<a href='https://github.com/sugiwa'>sugiwa</a></p>
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <h3>Skill</h3>
                    <div className='work-back'>
                    {skillList.map((skill) => {
                        return(
                            <Work 
                                name={skill.name}
                                description={skill.description}
                                image={skill.image}
                                isPortfolio={false}
                                experience={skill.experience}                    
                            />
                        );
                    })}
                    </div>
                </div>
                <div className='wrapper'>
                    <h3>Learning</h3>
                    <div className='work-back'>
                    {learningList.map((skill) => {
                        return(
                            <Work 
                                name={skill.name}
                                description={skill.description}
                                image={skill.image}
                                isPortfolio={false}                        
                                experience={skill.experience}                    
                            />
                        );
                    })}
                    </div>
                </div>
            </div>
        </Layout>
  );
}

export default Profile;
