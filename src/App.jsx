// import { useState } from 'react'
import "./App.css";
import Section from "./components/Section/Section";
import Description from "./components/Description/Description";

function App() {
  return (
    <>
      <Section>
        <Description
          title="Sip Happens Café
"
        >
          Please leave your feedback about our service by selecting one of the
          options below.
        </Description>
      </Section>
    </>
  );
}

export default App;
