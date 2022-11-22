import logo from '/src/images/wolfhead.jpeg';
import cover from '/src/images/cover2.jpeg';
import styles from '/src/css/App.module.css';
import { Container, Row, Col, Image } from 'solid-bootstrap';

export default function Header() {
    return (
        <Container fluid >
            <Row>
                <Col>
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
                            Welcome to the Shadowlands
                        </a>
                    </header>
                </Col>
                <Col fluid >
                    <Image id="cover" src={cover} fluid />
                </Col>
            </Row>
        </Container>
    )
}