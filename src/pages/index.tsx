import { MainLayout } from "@/components/Layout/Main";
import { Header } from "@/components/Layout/Main/components/Header";
import { Portifolio } from "@/components/Portifolio";
import { ReactElement } from "react";

const DocumentIndexPage = () => <Portifolio />;

DocumentIndexPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default DocumentIndexPage;
