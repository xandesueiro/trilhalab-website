module.exports = {
  siteMetadata: {
    title: "trilhalab-website",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "trilhasaberlabs-gatsby",
      },
    },
  ],
};
