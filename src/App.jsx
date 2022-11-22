import styles from './css/App.module.css';
import Header from './components/Header';
import MyCarousel from './components/MyCarousel';

function App() {
  return (
    <div class={styles.App}>
      <Header></Header>
      <MyCarousel></MyCarousel>
    </div>
  );
}

export default App;
