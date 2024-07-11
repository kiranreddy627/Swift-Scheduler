import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import styled from 'styled-components'
import hero from '../Images/hero.svg'
import DoctorList from "../components/DoctorList";
const Image = styled.img`
width: 100%;
`
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout >
      <Row style={{opacity:"0.8"} }>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
        </Row>
    </Layout>
  );
};

export default HomePage;
