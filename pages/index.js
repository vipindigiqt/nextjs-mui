import * as React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Index() {
  return (
    <>
      <Head>
        <title>MUI + NextJS</title>
      </Head>

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2">Hello World</Typography>
        </Box>
      </Container>
    </>
  );
}
