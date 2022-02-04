import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>About</h1>
        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, nihil
          aliquid. Aspernatur beatae debitis iure voluptas perferendis
          laudantium corporis consectetur!
        </p>

        <h1>Section</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: green;
  background-color: #f0f0f0;
  padding: 1rem;
  border: 1px solid black;

  h1 {
    color: blueviolet;
    padding: 1rem;
    border: 1px solid black;
    font-size: 3rem;
  }

  .text {
    text-transform: uppercase;
  }
`

export default about
