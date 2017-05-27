pragma solidity ^0.4.11;

contract Magnet {

  event PostedTorrent(string n, string mag, uint time, uint prev);

  /*struct Torrent {
    string name;        // Name of the torrent file/folder
    string magnet;      // magnet string size
    uint   timestamp;   // Block timestamp of submittal
    uint   prevBlock;   // Block of the last magnet saved
  }*/

  uint public lastBlock;

  /// A dynamically-sized array of `torrent` structs.
  /*Torrent[] public torrents;*/

  /// Instantiate the contract
  function Magnet() {

  }

  /// Add a new torrent magnet file and fire an event
  function addTorrent(string _name, string _magnet) {
    // add the magnet
    /*torrents.push(Torrent({
      name: _name,
      magnet: _magnet,
      timestamp: block.timestamp,
      prevBlock: lastBlock
    }));*/
    // Set a new prevBlock # to track our items
    lastBlock = block.number;
    // Fire a new Event
    PostedTorrent(_name, _magnet, block.timestamp, block.number);
  }
}
