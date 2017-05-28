/** WEB3 **/
import { observable }  from "mobx";
const Web3                = require('web3');
const web3                = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

/** WebTorrent **/
const WebTorrent = require('webtorrent');

/** Assets **/
import ABI_MAGNET          from '../assets/magnet.json';
import ABI_MAGNET_PRIVATE  from '../assets/magnetPrivate.json';
const MAGNET_CONTRACT_ADDRESS = '0xb1E257AF427B14a5385c8C138CD13545DA4b7086';

class MagnetStore {
  @observable magnet;
  @observable page;
  @observable magnetList;
  @observable file;

  constructor() {
    const self = this;

    self.magnetList = [];

    if (!web3.eth.defaultAccount)
      web3.eth.defaultAccount = web3.eth.accounts[0];

    self.client    = new WebTorrent();
    self.contract  = web3.eth.contract(ABI_MAGNET).at(MAGNET_CONTRACT_ADDRESS);
    // self.contractPrivate = web3.eth.contract(ABI_MAGNET_PRIVATE).at(contract_address);
    self.lastBlock = self.contract.lastBlock.call().toNumber();
    self.lastPage  = self.lastBlock;

    self.createList();
  }

  createList() {
    const self = this;

    if (self.lastBlock == 0) {
      return;
    }

    self.contract.PostedTorrent({}, {fromBlock: self.lastBlock, toBlock: self.lastBlock}).get((err, res) => {
      if (err) {
        console.log("err", err);
      } else {
        self.magnetList.push(res[0]);
        self.lastBlock = res[0].args.prev.toNumber();
        self.createList();
      }
    });
  }

  createMagnetVideo(magnet, filetype) {
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

  addMagnet(name, magnet) {
    const self = this;

    self.contract.addTorrent(name, magnet).then((err, res) => {
      console.log("err", err);
      console.log("res", res);
    });
  }
}

export default new MagnetStore();

// web3.eth.gasPrice
