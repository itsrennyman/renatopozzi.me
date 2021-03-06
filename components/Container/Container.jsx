import { SEOData } from "../SEOData";

const Container = ({ children, seo }) => {
  return (
    <div className="mx-auto px-6 max-w-3xl">
      <SEOData {...seo} />
      {children}
    </div>
  );
};

export { Container };
