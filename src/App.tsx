import { Post, PostType  } from "./components/Post";
import { Header} from "./components/Header";
import { Sidebar } from "./components/SideBar";
 

import styles from './App.module.css'
import './global.css'

 
const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/israelbulcaotavares.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera! 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento de.....', },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2023-11-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayk Brito',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera! 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento de.....', },
      { type: 'link', content: 'jane.design/doctorcare' },

    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
]
export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
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

