// import Storage from '@google-cloud/storage';

const { Storage } = require('@google-cloud/storage');

const fetchFiles = async () => {
  const storage = new Storage();
  const bucketName = 'stortime-audio';

  const [files] = await storage.bucket(bucketName).getFiles();

  this.setState({ files: files });
};

const handle = async (req, res) => {
  const storage = new Storage();
  const bucketName = 'storytime-audio';

  // const [files] = await storage.bucket(bucketName).getFiles();
  const files = new Array(
    {
      name: 'Lawsuit Raises Questions About Rick Perrys Role in Ukraine.mp3'
    },
    { name: 'Zato — a powerful Python-based ESB solution for your SOA.mp3' },
    { name: 'output.mp3' }
  );

  const fileUrls = files.map((file, i) => {
    let urlEncoded = 'http://localhost:5000/' + file.name;
    return { name: file.name, url: urlEncoded };
  });

  res.send(fileUrls);
};

export default handle;
