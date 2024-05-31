import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SEO = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          "https://www.prompt-the-future.com/imgs/logoPromptTheFuture.png"
        }
      />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  canonical: PropTypes.string,
};

export default SEO;
