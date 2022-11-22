import logo from "../images/logo.svg"
import { createSignal } from "solid-js";
import { Carousel } from "solid-bootstrap";

export default function MyCarousel() {
    const [index, setIndex] = createSignal(0);

    const handleSelect = (
        selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index()} onSelect={handleSelect}>
            <Carousel.Item>
                <div
                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <img src={logo} />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <img src={logo} />
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                    style={{ height: "400px" }}
                >
                    <img src={logo} />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}