/** WEB3 **/
import { observable }  from 'mobx';
const Web3                = require('web3');
const web3                = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

/** WebTorrent **/
const WebTorrent = require('webtorrent');

/** Assets **/
import MAGNET               from '../assets/magnet.json';
import MAGNET_PRIVATE       from '../assets/magnetPrivate.json';
const  MAGNET_ADDRESS          = '0x78De662aC7f39ae4D1f08818f95F3AdCFc5B3fDb';
const  MAGNET_PRIVATE_ADDRESS  = '0x0';

class MagnetStore {
  @observable magnet;
  @observable magnetList;
  @observable torrent;
  @observable file;

  constructor() {
    const self = this;

    self.magnetList = [];

    if (!web3.eth.defaultAccount)
      web3.eth.defaultAccount = web3.eth.accounts[0];

    self.client     = new WebTorrent();
    self.contract   = web3.eth.contract(MAGNET.abi).at(MAGNET_ADDRESS);
    // self.contractPrivate = web3.eth.contract(ABI_MAGNET_PRIVATE).at(contract_address);
    self.magnetSize = self.contract.getMagnetSize.call().toNumber();

    self.createList();
  }

  createList() {
    const self = this;

    if (self.magnetSize == 0) {
      return;
    }

    let payload = self.contract.magnets(self.magneSize - 1);
    console.log("payload", payload);
    console.log("size", self.magnetSize);
    self.magnetList.push({
      name: payload[0],
      magnet: payload[1],
      timestamp: payload[2].toNumber(),
      author: payload[3]
    });
    self.magnetSize--;
    self.createList();
  }

  createMagnetVideo(magnet, filetype) {
    const self = this;

    if (!filetype)
      filetype = '.mp4';
    let vid = self.client.add(magnet, (torrent) => {
      self.torrent = torrent;
      const file = torrent.files.find((file) => {
        return file.name.endsWith(filetype);
      });

      self.file = file;
    });
    return self.file;
  }

  addMagnet(name, magnet) {
    const self = this;

    self.contract.addMagnet(name, magnet, { data: MAGNET.data }).then((err, res) => {
      console.log("err", err);
      console.log("res", res);
    });
  }
}

export default new MagnetStore();

// web3.eth.gasPrice
