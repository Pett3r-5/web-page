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
          Associação de defesa dos direitos dos usuários de serviços de saúde mental - Porto Alegre, RS.
          </p>
        </Col>
      
      </Row>
      <Row style={{paddingLeft:"50px", paddingRight:"50px"}}>
      <Col  sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
        <p style={{textAlign:"center"}}>
         Impressão sublimática em Tecido, canecas, azulejos etc.
        </p>
        </Col>
        </Row>
      <Row style={{paddingLeft:"50px", paddingRight:"50px"}}>
        <Col  sm={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <p style={{textAlign:"center"}}>
          Reuniões fixas todas as segundas-feiras das 14h às 16:30h, aberta ao publico, porém é necessário pedir que um membro abra a porta do prédio para acesso, pois não tem porteiro/portaria no local.
          </p>
        </Col>
      </Row>
      
      
    </div>
  );
}

export default App;
