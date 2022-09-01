import { Form } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Playground: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Coming Soon | Juwan Petty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <h1
          style={{
            fontSize: "96px",
            fontWeight: 700,
          }}
        >
          Coming Soon
        </h1>

        <p
          style={{
            fontSize: "18px",
            textAlign: "center",
            marginBottom: "6rem",
          }}
        >
          From automation of people processes to creating <br /> an engaged and
          driven culture.
        </p>

        <Form
          id=""
          name=""
          placeholder="Enter your email"
          buttonContent="Notify Me"
          onSubmit={() => console.log("Submit")}
        />
      </Content>
    </Container>
  );
};

export default Playground;

const Container = styled.main`
  padding: 0 2rem;
`;

const Content = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
