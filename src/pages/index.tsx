import { Amplify } from "aws-amplify";
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import config from "../aws-exports"

Amplify.configure(config);

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 700,
};
const headingAccentStyles = {
  color: "#663399",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Welcome!
        <br />
        <span style={headingAccentStyles}>
          — to Jacob Westman's website! 🎉🎉🎉
        </span>
      </h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
