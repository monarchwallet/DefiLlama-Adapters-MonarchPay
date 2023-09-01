export default {
  adapter: {
    kava: {
      fetch: async () => {
        const web3 = new Web3('https://evm.kava.io'); // Replace with Kava RPC URL
        const contractAddress = '0x74bcF0307c466333D4081ab1Df290AaB37eb2CAB'; // Replace with Kava contract address
        const contractAbi = [ { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "address", "name": "_b_", "type": "address" }, { "internalType": "uint256", "name": "_c_", "type": "uint256" }, { "internalType": "string", "name": "_d_", "type": "string" }, { "internalType": "string", "name": "_e_", "type": "string" } ], "name": "cI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" }, { "internalType": "string", "name": "_c_", "type": "string" }, { "internalType": "string", "name": "_d_", "type": "string" }, { "internalType": "uint256", "name": "_e_", "type": "uint256" } ], "name": "cS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "cnP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "cns", "outputs": [ { "internalType": "string", "name": "z1", "type": "string" }, { "internalType": "string", "name": "z2", "type": "string" }, { "internalType": "address", "name": "z3", "type": "address" }, { "internalType": "uint256", "name": "z4", "type": "uint256" }, { "internalType": "uint256", "name": "z5", "type": "uint256" }, { "internalType": "bool", "name": "z6", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "cnt", "outputs": [ { "internalType": "uint256", "name": "y1", "type": "uint256" }, { "internalType": "uint256", "name": "y2", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gL", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "inv", "outputs": [ { "internalType": "uint256", "name": "a1", "type": "uint256" }, { "internalType": "uint256", "name": "a2", "type": "uint256" }, { "internalType": "address", "name": "a3", "type": "address" }, { "internalType": "address", "name": "a4", "type": "address" }, { "internalType": "address", "name": "a5", "type": "address" }, { "internalType": "uint256", "name": "a6", "type": "uint256" }, { "internalType": "string", "name": "a7", "type": "string" }, { "internalType": "string", "name": "a8", "type": "string" }, { "internalType": "bool", "name": "a9", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "invC", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ja", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jb", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" } ], "name": "jc", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "address", "name": "_b_", "type": "address" } ], "name": "jd", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" } ], "name": "je", "outputs": [ { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jg", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jh", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ji", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jj", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "jk", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "jl", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "jm", "outputs": [ { "internalType": "address[]", "name": "", "type": "address[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "jn", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "string", "name": "", "type": "string" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "jo", "outputs": [ { "components": [ { "internalType": "uint256", "name": "a1", "type": "uint256" }, { "internalType": "uint256", "name": "a2", "type": "uint256" }, { "internalType": "address", "name": "a3", "type": "address" }, { "internalType": "address", "name": "a4", "type": "address" }, { "internalType": "address", "name": "a5", "type": "address" }, { "internalType": "uint256", "name": "a6", "type": "uint256" }, { "internalType": "string", "name": "a7", "type": "string" }, { "internalType": "string", "name": "a8", "type": "string" }, { "internalType": "bool", "name": "a9", "type": "bool" } ], "internalType": "struct Subscription.INV", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "jp", "outputs": [ { "components": [ { "internalType": "uint256", "name": "c1", "type": "uint256" }, { "internalType": "uint256", "name": "c2", "type": "uint256" }, { "internalType": "address", "name": "c3", "type": "address" }, { "internalType": "address", "name": "c4", "type": "address" }, { "internalType": "address", "name": "c5", "type": "address" }, { "internalType": "uint256", "name": "c6", "type": "uint256" }, { "internalType": "uint256", "name": "c7", "type": "uint256" }, { "internalType": "uint256", "name": "c8", "type": "uint256" }, { "internalType": "uint256", "name": "c9", "type": "uint256" }, { "internalType": "uint256", "name": "c10", "type": "uint256" }, { "internalType": "uint256", "name": "c11", "type": "uint256" }, { "internalType": "uint256", "name": "c12", "type": "uint256" }, { "internalType": "uint256", "name": "c13", "type": "uint256" }, { "internalType": "uint256", "name": "c14", "type": "uint256" } ], "internalType": "struct Subscription.INVP[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jq", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jr", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "js", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jt", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ju", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_id", "type": "uint256" } ], "name": "jv", "outputs": [ { "components": [ { "internalType": "uint256", "name": "d1", "type": "uint256" }, { "internalType": "uint256", "name": "d2", "type": "uint256" }, { "internalType": "address", "name": "d3", "type": "address" }, { "internalType": "address", "name": "d4", "type": "address" }, { "internalType": "address", "name": "d5", "type": "address" }, { "internalType": "uint256", "name": "d6", "type": "uint256" }, { "internalType": "uint256", "name": "d7", "type": "uint256" }, { "internalType": "uint256", "name": "d8", "type": "uint256" }, { "internalType": "uint256", "name": "d9", "type": "uint256" }, { "internalType": "uint256", "name": "d10", "type": "uint256" }, { "internalType": "uint256", "name": "d11", "type": "uint256" }, { "internalType": "uint256", "name": "d12", "type": "uint256" }, { "internalType": "uint256", "name": "d13", "type": "uint256" }, { "internalType": "uint256", "name": "d14", "type": "uint256" }, { "internalType": "uint256", "name": "d15", "type": "uint256" }, { "internalType": "uint256", "name": "d16", "type": "uint256" }, { "internalType": "uint256", "name": "d17", "type": "uint256" } ], "internalType": "struct Subscription.SUBP[]", "name": "", "type": "tuple[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "jw", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "ma", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "bool", "name": "_b_", "type": "bool" } ], "name": "mb", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "mc", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" }, { "internalType": "uint256", "name": "_c_", "type": "uint256" } ], "name": "md", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_a_", "type": "address" } ], "name": "me", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "pI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pInvC", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "address", "name": "_b_", "type": "address" }, { "internalType": "uint256", "name": "_c_", "type": "uint256" } ], "name": "pS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address[]", "name": "_a_", "type": "address[]" }, { "internalType": "address[]", "name": "_b_", "type": "address[]" }, { "internalType": "uint256[]", "name": "_c_", "type": "uint256[]" } ], "name": "pSs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "pSubC", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "rIP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "rIPs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "rSP", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "rSPs", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "sTS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "scr", "outputs": [ { "internalType": "bool", "name": "x1", "type": "bool" }, { "internalType": "uint256", "name": "x2", "type": "uint256" }, { "internalType": "uint256", "name": "x3", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "sub", "outputs": [ { "internalType": "uint256", "name": "b1", "type": "uint256" }, { "internalType": "address", "name": "b2", "type": "address" }, { "internalType": "address", "name": "b3", "type": "address" }, { "internalType": "uint256", "name": "b4", "type": "uint256" }, { "internalType": "string", "name": "b5", "type": "string" }, { "internalType": "string", "name": "b6", "type": "string" }, { "internalType": "uint256", "name": "b7", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "subC", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" }, { "internalType": "address", "name": "_b_", "type": "address" }, { "internalType": "uint256", "name": "_c_", "type": "uint256" }, { "internalType": "string", "name": "_d_", "type": "string" }, { "internalType": "string", "name": "_e_", "type": "string" } ], "name": "uS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "_a_", "type": "uint256" } ], "name": "unS", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address payable", "name": "_a_", "type": "address" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "wE", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "address", "name": "_b_", "type": "address" }, { "internalType": "uint256", "name": "_c_", "type": "uint256" } ], "name": "wT", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "_a_", "type": "address" }, { "internalType": "uint256", "name": "_b_", "type": "uint256" } ], "name": "wUSDC", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" } ]; // Replace with Kava contract ABI

        // Create a contract instance
        const contract = new web3.eth.Contract(contractAbi, contractAddress);

        // Call your Kava smart contract function to get the uint256 data
        try {
          const result = await contract.methods.jw().call();

          // Convert the result to a JavaScript number (assuming it fits)
          const uint256Value = parseInt(result, 10);

          return {
            timestamp: Date.now(), // You can use the current timestamp
            uint256Value: uint256Value,
          };
        } catch (error) {
          console.error('Error fetching data from the Kava smart contract:', error);
          throw error;
        }
      },
    },
  },
};
