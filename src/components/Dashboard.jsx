import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col md={2} className="bg-light sidebar">
          <div className="d-flex flex-column align-items-center pt-3">
            <h5>Dashboard</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/employees">
                  Employees
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-employee">
                  Add Employee
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addAdminForm">
                 Add Admin
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={10} className="content">
          <Row>
            <Col md={12} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Operations</Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>In an admin role, managing employees typically involves adding, deleting, and updating employee information within a system or database. This includes tasks like creating new employee profiles, removing inactive employees, and updating existing employee details such as contact information or job roles. Admins ensure the accuracy and completeness of employee records to facilitate smooth operations within the organization.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Add Admin</Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>Certainly! In many systems, current administrators have the authority to add new administrators to the system. This involves granting the necessary permissions and access rights to individuals who will assume administrative responsibilities. This process often requires verifying the identity of the new admin and assigning appropriate roles and privileges to ensure the security and integrity of the system.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Employees</Card.Title>
                  <Card.Text style={{textAlign:'justify'}}>Certainly! When an admin views a list of employees and their details, it provides a comprehensive overview of the workforce within the organization. This list typically includes information such as employee names,contact details, and employee IDs.Overall, having a list of employees and their details empowers administrators to effectively oversee and manage the workforce, ensuring smooth operations and productivity within the organization.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ); 
};
 
export default Dashboard;