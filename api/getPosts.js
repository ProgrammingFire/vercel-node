export default (req, res) => {
  res.send([
    {
      id: 1,
      title: "hello world",
      content: "content",
    },
    {
      id: 2,
      title: "serverless is amazing",
      content: "serverless with vercel is amazing",
    },
  ]);
};
