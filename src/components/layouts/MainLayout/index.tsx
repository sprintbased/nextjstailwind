import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

type MainLayoutProps = {
  children: React.ReactNode[] | React.ReactNode;
  pageTitle: string;
  pageDescription: string;
};

const MainLayout = ({
  children,
  pageTitle,
  pageDescription,
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{pageTitle || "Portfolio Store"}</title>
        <meta
          name="description"
          content={pageDescription || "Welcome to Portfolio Store"}
        />
      </Head>
      <div className="bg-white">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
