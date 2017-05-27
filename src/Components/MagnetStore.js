/** WEB3 **/
import { observable }  from "mobx";
const Web3      = require('web3');
const web3      = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

/** WebTorrent **/
const WebTorrent = require('webtorrent');

/** Assets **/
const ABI_MAGNET              = '../assets/magnet.json';
const ABI_MAGNET_PRIVATE      = '../assets/magnetPrivate.json';
const MAGNET_CONTRACT_ADDRESS = '0x58732c7EF2a6404Ab37eC3E4A9A687723A93BE13';

class MagnetStore {
  @observable magnet;
  @observable contract;
  @observable contractPrivate;
  @observable page;
  @observable magnetList = [];
  @observable file;

  constructor() {
    const self = this;

    self.client   = new WebTorrent();
    self.contract = web3.eth.contract(ABI_MAGNET).at(MAGNET_CONTRACT_ADDRESS);
    // self.contractPrivate = web3.eth.contract(ABI_MAGNET_PRIVATE).at(contract_address);
    self.pBlock   = contract.pBlock.call().toNumber();
  }

  createList() {
    const self = this;

    for (x = 0; x < 20; x++) {
      if (self.pBlock == 0)
        break;
      self.contract.PostedTorrent({}, {fromBlock: self.pBlock, toBlock: self.pBlock}).get((err, res) => {
        if (err)
          console.log("err", err);
        else
          self.magnetList.push(res);
      });
      self.pBlock = contract.pBlock.call().toNumber();
    }
  }

  addMagnetVideo(magnet, filetype) {
    const self = this;

    if (!filetype)
      filetype = '.mp4';
    console.log("client", self.client);
    let vid = self.client.add(magnet, (torrent) => {
      const file = torrent.files.find(function (file) {
        return file.name.endsWith(filetype);
      });

      self.file = file;
    });
    return self.file;
  }
}

export default new MagnetStore();
