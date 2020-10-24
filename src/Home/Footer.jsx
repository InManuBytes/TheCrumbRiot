
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>The Crumb Riot</h2>
              <div>
                Bakery Lab
              </div>
              <div>
                Fort Myers, FL
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span style={{ marginRight: 12 }}>The Crumb Riot</span>
          <span style={{ marginRight: 12 }}>Copyright © Manu 2020</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
