import {Post, PostType} from './components/Post.tsx'
import {Header} from "./components/Header.tsx";
import {Sidebar} from "./components/Sidebar.tsx";


import styles from './App.module.css'

import './global.css'

const posts: PostType[] =
    [
        {
            id: 1,
            author: {
                avatarUrl: 'https://github.com/felipealvarenga01.png',
                name: 'Felipe Alvarenga',
                role: 'Developer',
            },
            content: [
                {type: 'paragraph', content: 'Fala galeraa 👋'},
                {
                    type: 'paragraph',
                    content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
                },
                {type: 'link', content: '👉jane.design/doctorcare'},

            ],
            publishedAt: new Date('2023-07-31 08:43:00')
        }, {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'Developer',
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {type: 'link', content: '👉jane.design/doctorcare'},

        ],
        publishedAt: new Date('2023-07-30 08:43:00')
    },
    ];


export function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                        return (

                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}



