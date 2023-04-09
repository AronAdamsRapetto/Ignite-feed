import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { posts } from "./data/data";
import style from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(({ author, content, publishedAt, id }) => (
              <Post
                author={author}
                content={content}
                key={id}
                publishedAt={publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  );
}

export default App;
