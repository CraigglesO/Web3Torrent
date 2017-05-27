
const Magnet = artifacts.require("./Magnet.sol");

module.exports = function(deployer) {
  deployer.deploy(Magnet);
};
