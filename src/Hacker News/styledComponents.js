import styled from "styled-components";
let H1 = styled.h1`
  width: 80%;
  margin: 60px auto 25px;
  font-size: 35px;
  letter-spacing: 2px;
`;
let Form = styled.form`
  width: 80%;
  margin: 10px auto 40px;
  input {
    width: 400px;
    max-width: 70%;
    height: 25px;
    padding: 0px 5px;
    border: none;
    border-bottom: 2px solid black;
    background-color: inherit;
    padding: 10px;
    letter-spacing: 2px;
  }
  + p {
    text-align: center;
    letter-spacing: 1.5px;
    font-size: 24px;
    margin: 0px 0px 20px;
  }
  + p button {
    cursor: pointer;
    border: none;
    background-color: rgb(1, 162, 211);
    padding: 5px 10px;
    color: white;
    letter-spacing: 1.4px;
    font-weight: 700;
    margin: 0px 10px;
    border-radius: 7px;
  }
`;
let Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0px auto;
  justify-content: space-evenly;

  div {
    padding: 18px 12px;
    background-color: #fff;
    box-shadow: 3px 3px 10px 1px rgb(1, 162, 211, 0.5);
    border-radius: 10px;
    margin: 20px 10px;
    width: 45%;
  }

  h2 {
    margin-bottom: 10px;
    letter-spacing: 0.5px;
    color: rgb(32, 32, 32);
  }

  p {
    letter-spacing: 1.7px;
    margin-bottom: 10px;
    font-weight: 300;
  }

  button {
    border: none;
    background-color: rgb(1, 162, 211);
    color: white;
    letter-spacing: 1px;
    padding: 5px 10px;
    font-weight: 700;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: rgb(255, 0, 0);
    margin-right: 12px;
    font-weight: 700;
  }

  @media (max-width: 1110px) {
    width: 100%;
  }
  @media (max-width: 892px) {
    div {
      width: 90%;
    }
  }
`;

export { H1, Form, Section };
