/** WEB3 **/
import { observable }  from "mobx";
const Web3      = require('web3');
const web3      = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

/** WebTorrent **/
const WebTorrent = require('webtorrent');

/** Assets **/
const ABI_MAGNET         = '../contracts/magnet.json';
const ABI_MAGNET_PRIVATE = '../contracts/magnetPrivate.json';

class MagnetStore {
  @observable magnet;

  constructor() {
    const self = this;

    self.client = new WebTorrent();
  }

  addMagnetVideo(magnet, filetype) {
    const self = this;

    if (!filetype)
      filetype = '.mp4';
    console.log("client", self.client);
    let vid = self.client.add(magnet, (torrent) => {
      // Torrents can contain many files. Let's use the .mp4 file
      const file = torrent.files.find(function (file) {
        return file.name.endsWith(filetype);
      });

      return file;
    });
    return vid;
  }
}

export default new MagnetStore();
