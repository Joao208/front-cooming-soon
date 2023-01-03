import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <img
      src="/images/xera.svg"
      alt="Themeptation "
      className="absolute h-96 -top-20 -right-16 lg:right-5 lg:top-10"
    />
    <img src="/images/shapes.svg" alt="hero" className="absolute w-full" />
    <div className="relative z-10 py-6 space-y-16 lg:space-y-32 text-gray-900">
      <div className="text-center space-y-10">
        <h3 className="font-light text-xl uppercase tracking-wider">
          Novidades em breve...
        </h3>
        <h1 className="text-7xl lg:text-9xl font-extrabold">Comforta</h1>
        <p className="text-xl lg:text-2xl tracking-wide mx-10 lg:max-w-xl lg:mx-auto">
          Estamos em construção. Para receber novidades, volte em breve!
        </p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
