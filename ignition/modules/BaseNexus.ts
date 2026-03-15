import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BaseNexusModule = buildModule("BaseNexusModule", (m) => {
  // Lấy tài khoản đầu tiên làm owner
  const deployer = m.getAccount(0);

  // Deploy contract và truyền deployer vào constructor
  const token = m.contract("BaseNexus", [deployer]);

  return { token };
});

export default BaseNexusModule;
