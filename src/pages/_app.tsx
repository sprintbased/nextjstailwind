import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import { NextPageWithLayout } from "@/types/global";
import type { AppProps } from "next/app";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page: React.ReactElement) => {
      return (
        <MainLayout
          pageTitle={page.props.title}
          pageDescription={page.props.pageDescription}
        >
          {page}
        </MainLayout>
      );
    });

  return getLayout(<Component {...pageProps} />);
};

export default App;
