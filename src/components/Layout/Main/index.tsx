import { Grid, GridItem } from "@chakra-ui/react";
import { IMainLayoutProps } from "./types";
import { Header } from "./components/Header";
import React from "react";

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  headerProps,
}) => {
  return (
    <Grid
      w="100vw"
      h="100vh"
      pos="fixed"
      templateAreas={`"header header" "main main"`}
      gridTemplateRows="auto 1fr"
      gridTemplateColumns="auto 1fr"
      bg="#0a101e"
    >
      <GridItem area="header">
        <Header {...headerProps} />
      </GridItem>
      <GridItem overflow="auto" area="main">
        {children}
      </GridItem>

    </Grid>
  );
}
