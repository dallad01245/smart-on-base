// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BaseNexus Token
 * @dev ERC20 Token cho dự án triển khai trên Base Layer 2.
 * Tích hợp tính năng Burnable và Ownable từ OpenZeppelin v5.
 */
contract BaseNexus is ERC20, ERC20Burnable, Ownable {
    // Mint 1 triệu token ban đầu cho người tạo (decimals mặc định là 18)
    constructor(address initialOwner) 
        ERC20("BaseNexus", "BNX") 
        Ownable(initialOwner) 
    {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /**
     * @dev Cho phép Owner đúc thêm token mới.
     * @param to Địa chỉ nhận token
     * @param amount Số lượng token cần đúc
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
