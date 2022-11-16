import logo from '/src/images/wolfhead.jpeg';
import styles from '/src/css/App.module.css';

export default function Header() {
    return (
        <div>
            <header class={styles.header}>
                <img id="logoimg" src={logo} class={styles.logo} alt="logo" />
                <h1>
                    Shadow Master
                </h1>
                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Built with SolidJS
                </a>
            </header>
        </div>
    )
}