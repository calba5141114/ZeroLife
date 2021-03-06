import React from "react";

import { Container, Row, Col } from "reactstrap";

class Loading extends React.Component {

  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.timeout = null;
  }

  updateAnimation() {
    let num = this.state.num;
    num = (num % 12) + 1;

    this.setState({num: num});
  }

  render() {

    this.timeout = setTimeout(
        () => {
          this.updateAnimation()
        }, 100
    );

    let num = this.state.num;
    const url = require(`assets/animations/loading/loadingg_${num}.svg`);

    return (
        <Container className="shape-container d-flex align-items-center py-lg">
          <div className="col px-0">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" lg="6">

                <img
                    alt="..."
                    className="img-fluid"
                    src={url}
                    style={{ width: "50rem" }}
                />

              </Col>
            </Row>
          </div>
        </Container>

    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default Loading;
