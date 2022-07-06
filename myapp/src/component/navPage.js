import React from 'react'
import {Nav} from 'react-bootstrap';

function navPage() {
  return (
    <div>
        <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/Card">Card</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/About">About</Nav.Link>
  </Nav.Item>
</Nav>
    </div>
  )
}

export default navPage