import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { postTransaction } from "../../helpers/axiosHelper";

const Dashboard = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [resp, setResp] = useState({});

  console.log("I was here before");

  useEffect(() => {
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"));

    !storedUser?._id && navigate("/");
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const result = await postTransaction(form);
    setResp(result);
  };

  return (
    <Layout>
      <Form className="mt-5" onSubmit={handleOnSubmit}>
        {resp?.message && (
          <Alert variant={resp?.status === "success" ? "success" : "danger"}>
            {resp?.message}
          </Alert>
        )}
        <Row>
          <Col md="2">
            <Form.Select name="type" onChange={handleOnChange}>
              <option value="">Choose...</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Form.Select>
          </Col>
          <Col md="6">
            <Form.Control
              onChange={handleOnChange}
              name="title"
              placeholder="Transaction Title"
              required
            />
          </Col>
          <Col md="2">
            <Form.Control
              onChange={handleOnChange}
              name="amount"
              type="number"
              placeholder="50"
              required
            />
          </Col>
          <Col md="2">
            <Button variant="primary" className="form-control" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />
    </Layout>
  );
};

export default Dashboard;
