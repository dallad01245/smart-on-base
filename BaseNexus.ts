import { expect } from "chai";
import { ethers } from "hardhat";

describe("BaseNexus Token", function () {
  async function deployTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("BaseNexus");
    // Deploy với owner là người gọi
    const token = await Token.deploy(owner.address);
    return { token, owner, addr1, addr2 };
  }

  it("Should have correct name and symbol", async function () {
    const { token } = await deployTokenFixture();
    expect(await token.name()).to.equal("BaseNexus");
    expect(await token.symbol()).to.equal("BNX");
  });

  it("Should assign the total supply of tokens to the owner", async function () {
    const { token, owner } = await deployTokenFixture();
    const ownerBalance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });

  it("Should allow owner to mint new tokens", async function () {
    const { token, owner, addr1 } = await deployTokenFixture();
    const mintAmount = ethers.parseUnits("1000", 18);
    await token.mint(addr1.address, mintAmount);
    expect(await token.balanceOf(addr1.address)).to.equal(mintAmount);
  });

  it("Should fail if non-owner tries to mint", async function () {
    const { token, addr1, addr2 } = await deployTokenFixture();
    const mintAmount = ethers.parseUnits("1000", 18);
    // addr1 cố gắng mint cho addr2
    await expect(token.connect(addr1).mint(addr2.address, mintAmount))
      .to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount")
      .withArgs(addr1.address);
  });
});
