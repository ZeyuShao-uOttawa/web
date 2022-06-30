import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Navbar from "../Components/navbar";
import Modal from "../Components/modal";

export default function Component(props){
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedObject, setSelectedObject] = React.useState([]);
  
  let specs = ['Name', 'Core Count', 'Base Clock', 'Boost Clock', 'TDP', 'Rating', 'Price'];
  let cpus = [
    [
      'Ryzen 9 5900x',
      '12',
      '3.7 GHz',
      '4.8 GHz',
      '105 W',
      '5.0 Stars',
      '499.00 CAD'
    ],
    [
      'Intel Core i9-1290K',
      '16',
      '3.2 GHz',
      '5.2 GHz',
      '125 W',
      '4.9 Stars',
      '719.99 CAD'
    ]
  ];

  const [filterCPU, setfilterCPU] = React.useState(cpus);
  
  function handleChange(e){
    // console.log(e.target.id);
    // console.log(e.target.checked);
    // console.log(document.getElementById('filter-amd').checked);

    let checkAMD = document.getElementById('filter-amd').checked
    let checkIntel = document.getElementById('filter-intel').checked

    if((checkAMD && checkIntel) || (!checkAMD && !checkIntel)){
      setfilterCPU(cpus);
    }else if(checkAMD){
      setfilterCPU([cpus[0]]);
    }else if(checkIntel){
      setfilterCPU([cpus[1]]);
    }

  };

  useEffect(() => {
    if(props.filter !== 'none'){
      let fil = 'filter-' + props.filter;
      document.getElementById(fil).checked = true;
      console.log('test');

      if(props.filter === 'amd'){
        setfilterCPU([cpus[0]]);
      }else{
        setfilterCPU([cpus[1]]);
      }
    }
  }, []);

  return(
    <div className="body-main">
      <Navbar />
      <header className='component-header'>
        {props.type}
      </header>
      <Container className='component-table'>
        <Row>
          <Col>
            <Container className='filters'>
              <h3>Filters</h3>
              <Form>
                <Form.Label>Price</Form.Label>
                <Form.Range />

                <Form.Check 
                  type='checkbox'
                  id='filter-amd'
                  label='AMD'
                  onChange={e => handleChange(e)}
                />

                <Form.Check 
                  type='checkbox'
                  id='filter-intel'
                  label='Intel'
                  onChange={e => handleChange(e)}
                />
              
              </Form>
            </Container>
          </Col>
          <Col>
            <Table striped bordered hover responsive variant='light' style={{width: '55vw'}}>
              <thead>
                <tr>
                  <th>#</th>
                {Array.from({ length: specs.length }).map((_, index) => (
                  <th key={index}>{specs[index]}</th>
                ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: filterCPU.length }).map((_, index) => (
                  <tr onClick={() => {setModalShow(true); setSelectedObject(filterCPU[index])}} style={{cursor: 'pointer'}}>
                  <td>{index}</td>
                  {Array.from({ length: specs.length }).map((_, index2) => (
                    <td key={index2}>{filterCPU[index][index2]}</td>
                  ))}
                </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Modal
          object={selectedObject}
          specs={specs}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
  </div>
  );
}