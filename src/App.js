import React from 'react';
import './App.css';
import Header from './header/Header';
import { Col, Container, Button, Row } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <Row style={{paddingLeft:"50px", paddingRight:"50px"}}>
        <Col  sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <p style={{textAlign:"center"}}>
          <i>Associação de defesa dos direitos dos usuários de serviços de saúde mental - Porto Alegre, RS.</i>
          </p>
        </Col>
      
      </Row>
      <Row style={{paddingLeft:"50px", paddingRight:"50px"}}>
      <Col  sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
        <p style={{textAlign:"center"}}>
        <i>Impressão sublimática em Tecido, canecas, azulejos etc.</i>
        </p>
        </Col>
        </Row>
      <Row style={{paddingLeft:"50px", paddingRight:"50px"}}>
        <Col  sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <p style={{textAlign:"center"}}>
          <i>Reuniões fixas todas as segundas-feiras das 14h às 16:30h, aberta ao publico, porém é necessário pedir que um membro abra a porta do prédio para acesso, pois não tem porteiro/portaria no local.
          </i>
          </p>
        </Col>
      </Row>
      
      
    </div>
  );
}

export default App;
