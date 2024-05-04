import Head from "next/head";

const BasicLayout = ({children}) => {
  return (
    <>
      <Head>
        <title>Vendor | Descriptions</title>
      </Head>
      <>{children}</>
    </>
  );
};

export default BasicLayout;
