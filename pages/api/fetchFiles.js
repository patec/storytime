const { Storage } = require('@google-cloud/storage');

const handle = async (req, res) => {
  const storage = new Storage();
  const bucketName = 'storytime-audio';

  const [files] = await storage.bucket(bucketName).getFiles();

  const fileUrls = files.map((file, i) => {
    let urlEncoded =
      'https://storage.googleapis.com/storytime-audio/' +
      encodeURI(file.name);
    return { name: file.name, url: urlEncoded };
  });

  res.send(fileUrls);
};

export default handle;
