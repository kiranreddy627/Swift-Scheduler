import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import styled from 'styled-components'
import login from '../Images/Login.png'

const Container = styled.div`
  width: 100%;
  padding: 200px 100px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ::-webkit-scrollbar{
    display: none;
  }
   @media (max-width: 768px){
      /* width: 30vw; */
      display: block;
      height: 100%;
      width: 100%;
      padding: 100px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    @media (max-width: 425px){
        padding: 30px;
    }
  
  & .form-main
  {
    width: 32vw; 
    border: 2px solid black;
    padding: 30px 30px 0;
    @media (max-width: 768px){
      /* width: 50vw; */
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    @media (max-width: 768px){
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      margin: 0;
      overflow: hidden;
      padding: 15px 15px 0;
      /* font-size: 14px; */
    }
  }
  & .formLabel
  {
    font-family: 'Ubuntu';
    font-weight: 600;
    @media (max-width: 425px){
      font-size: 12px;
    }
  }
  & .formInput
  {
    border-top: none;
    border-left: none;
    border-right: none;
    background: none;
    width: 100%;
    /* margin: 10px 0 30px; */
    &:focus
    {
      outline: none;
    }
  }
`

const Left = styled.div`

`

const Image = styled.img`
  width: 35vw;
  height : 52vh;
  @media (max-width: 768px){
    display: none;
  }
`

const Button=styled.button`
      background-color: rgb(0, 0, 0);
    border: none;
    color: azure;
    padding: 5px 12px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 1px 3px #cf723c;
    font-family: 'Space Grotesk', sans-serif;
    transition: 100ms;
    &:hover
    {
      background-color: #ce6a30;
    box-shadow: 0px 1px 5px rgb(49, 48, 49);
    }
`
const Extra = styled.div`
    border-radius: 15px 15px 0 0;
    display: flex;
    padding: 10px 30px;
    position: relative;
    background-color: #000000;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 2px 4px #d16e35;
`
const Ep = styled.div`
      font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 14px;
    color: aliceblue;
` 
const Ea=styled.a`
      text-decoration: none;
      cursor: pointer;
    color: #d66a4c;
    font-size: 13px;
    font-family: 'Raleway', sans-serif;
    transition: 100ms;
    &:hover
    {
      text-shadow:0px 1px 2px rgb(166, 137, 137);
    }

`

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <Container>
      <Left>
        <Image src={login}></Image>
      </Left>
            <Form layout="vertical"
    onFinish={onfinishHandler} className="form-main">
                <Form.Item className="formLabel" label="Name" name="name"><Input className="formInput" type="text" placeholder="Enter your name" required></Input></Form.Item>
                <Form.Item className="formLabel" label="Username/Email" name="email"><Input className="formInput" type="email" placeholder="Enter your email" required></Input></Form.Item>
                <br></br>
          <Form.Item className="formLabel" label="Password" name="password"><Input className="formInput" type="password" name="password" placeholder="Enter your password" required></Input></Form.Item>
                <br></br>
                <div>
                    <Button type="submit">Register</Button>
        </div>
        <br></br>
            <br></br>
          <Extra>
            <Ep>Already have an account? </Ep>
            <Link to="/login" style={{textDecoration:"none"}} >
                <Ea id="signup" >Sign-in</Ea> 
            </Link>
                {/* <div style={{}}>
                  <Ea href="/Forgot">Forgot password?</Ea>
                </div> */}
            </Extra>
            </Form>
          
      </Container>
  );
};

export default Register;


