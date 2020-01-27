curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt update -y
sudo apt-get install apt-transport-https
sudo apt install --no-install-recommends yarn -y


curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -


sudo apt-get install -y nodejs

yarn
