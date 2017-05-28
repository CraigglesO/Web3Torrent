pragma solidity ^0.4.11;

contract MagnetPrivate {

  event PostedTorrent(string n, string mag);

  struct Mag {
    string  name;        // Name of the torrent file/folder
    string  magnet;      // magnet string size
    uint    timestamp;   // Block timestamp of submittal
    address author;      // User who submitted
  }

  /// Set the owner of the contract
  address public chairperson;

  /// A dynamically-sized array of `torrent` structs.
  Mag[] public magnets;

  /// Instantiate the contract creator as the chairperson
  function MagnetPrivate() {
    chairperson = msg.sender;
  }

  function getMagnet(uint index) public constant returns(string, string, uint, address) {
    return (magnets[index].name, magnets[index].magnet, magnets[index].timestamp, magnets[index].author);
  }

  function getMagnetSize() public constant returns(uint) {
    return magnets.length;
  }

  /// Add a new torrent magnet file and fire an event
  function addMagnet(string _name, string _magnet) {
    require(msg.sender == chairperson);
    // add the magnet
    magnets.push(Mag({
      name: _name,
      magnet: _magnet,
      timestamp: block.timestamp,
      author: msg.sender
    }));
    // Fire a new Event
    PostedTorrent(_name, _magnet);
  }
}
