import styles from './css/App.module.css';
import "./components/Header";
import Header from './components/Header';

function App() {
  return (
    <div class={styles.App}>
      <Header></Header>
    </div>
  );
}

export default App;
