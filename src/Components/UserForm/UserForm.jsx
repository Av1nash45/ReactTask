import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/actions/actions";
import "./UserForm.css";

const { Option } = Select;
const UserForm = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  const formItemLayout = formLayout === "vertical";

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(signupUser({ ...values }));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="FormHeader">
        <h1> User Form</h1>
      </div>
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          layout: formLayout,
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          style={{ marginBottom: 5 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          style={{ marginBottom: 5 }}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="number"
          rules={[
            {
              required: true,
              message: "Please input your phone number !",
            },
          ]}
          style={{ marginBottom: 5 }}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Date of Birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please input your  DOB!",
            },
          ]}
          style={{ marginBottom: 5 }}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item label="Province" name="Province" style={{ marginBottom: 5 }}>
          <Select>
            <Option value="Province 1">Province 1</Option>
            <Option value="Province 2">Province 2</Option>
            <Option value="Province 3">Province 3</Option>
            <Option value="Province 4">Province 4</Option>
            <Option value="Province 5">Province 5</Option>
            <Option value="Province 6">Province 6</Option>
            <Option value="Province 7">Province 7</Option>
          </Select>
        </Form.Item>
        <Form.Item label="City" name="city" style={{ marginBottom: 25 }}>
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UserForm;
