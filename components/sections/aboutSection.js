import React from "react";
import Dialog from "../wrappers/dialog";
import About from "../../pages/about.mdx";

function AboutSection() {
  // dialog title
  const title = "About me";

  // dialog messge
  const message = <About />;
  return (
    <div id="about">
      <Dialog title={title} message={message} key={title} />
    </div>
  );
}

export default AboutSection;
