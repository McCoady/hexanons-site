const hexanonsAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "AddressMinted",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NonExistantId",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotAllowlisted",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotOpen",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PaintSixColors",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PaintYourOwn",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SoldOut",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TeamMinted",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WithdrawFail",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "HOLDERS_MINT_START",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PRIORITY_MINT_START",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "getTokenInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint8",
            "name": "pattern",
            "type": "uint8"
          },
          {
            "internalType": "uint32",
            "name": "seed",
            "type": "uint32"
          },
          {
            "internalType": "string[]",
            "name": "cols",
            "type": "string[]"
          }
        ],
        "internalType": "struct TokenInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "holdersMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_cols",
        "type": "string[]"
      }
    ],
    "name": "lickOfPaint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32[]",
        "name": "merkleProof",
        "type": "bytes32[]"
      }
    ],
    "name": "priorityMint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "scrubPaint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "teamMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "_URI",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_cols",
        "type": "string[]"
      }
    ],
    "name": "trialPaintJob",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const contractAddress = "0xe25bd48d221ca1a1a5a8d75cedfd88e7b804cd4c";

const priorityLeaves = ["0x8ec27e9f5bab92b94b15ab4f1de164c5a5da2e99",
    "0xde4ea497823b8af93ede25bfa1ff6084c2724543",
    "0xc26a6c794e1413adbccdaaf2e12d8df79dc84675",
    "0xb60ebc480cddf931f64e36f530d721bc8ba35ec7",
    "0x34aa3f359a9d614239015126635ce7732c18fdf3",
    "0x3c382d39bc6441695b3c0eaa9d418003bd0af408",
    "0xe88b1bc93f5711b628e81a50d5143c15b1473bd9",
    "0x74922b9dc211d61e1d5e44c245fdde5acb32f57b",
    "0x36824bcd70793e4867c5f5b1fcba0d035088b1cb",
    "0xee0db089d98dafa516538b336184cf6b135a8be0",
    "0x0f751666a5ad7c11c8cb12ed9ce78fb233400891",
    "0xdcf7be2ff93e1a7671724598b1526f3a33b1ec25",
    "0x95311bfee88b77b3d4af340605f801991156ff7b",
    "0xf1093386e43cb183b041be91bab769f72ec41a75",
    "0x888f8aa938dbb18b28bdd111fa4a0d3b8e10c871",
    "0x0de9409a4aaf3f1e78d0cdd89ff7ccedbb8ac394",
    "0xa8f16d0ddf23971c44490b844a00f4b1d9c0b453",
    "0x8d445eee078ff46d7ddc123dac5904fad0acf92e",
    "0x60377ec355857c2d06d1ce28555f624257344b0d",
    "0x3e5fce21497ba4acff43e7f3111b85c47cfaddf4",
    "0xd6df2693eec9f1ed3526e2cdf053fbd076c89a44",
    "0x2d82c05ff2507525190435bc4538af681f7dbfc2",
    "0x173c46e68187c09e4eb1d223b90a5789f7e6574a",
    "0x1a9a4932f36b3641f5f63e98f77f8a1f28d85dad",
    "0xa749a0d03a707a53d421c7c91180672ec3b8cd3c",
    "0x2da083ea4d78fb8b93a0b264e344b9dbc527d971",
    "0x067526baa12f7e65fe4d8080886c8f6078272456",
    "0xf3998eced96ae3cfe880ac9d2637b4118da48e22",
    "0xa495fb3ef5ad8323ebe5b369f81785db8236e018",
    "0xdf2f713d8d8f9c5dcbabdc020c48cdbd79eecfb8",
    "0xdb4782d463628cc5b1de8f1220f755ba3ba4728e",
    "0xf7e744527cc82e24c3badc2082d0391413b321e5",
    "0x40e8958c27c1db4c770a8a2e8319578e62f62abc",
    "0xb0ca2e19356f763721110b2e0b318883df844cbc",
    "0xce64da4caf4c7d5a65c74fbacb16e170d300285d",
    "0x18e0f9aadde970d74430cc8636a381ccfcd1f559",
    "0xde8a37645bc06d318a7120f56e72ad5de877760a",
    "0x01c38875ab789cb12efcd791db91217a00fd01fa",
    "0x51ec15594230ddf21a7ea5a4ac392bb8dbda527e",
    "0x1593c9ab842c36a926ae39cb2173731f9362e8fd",
    "0xe295492966896909c61597df71d7dece64b9b357",
    "0x6f85b8b8fe10157f166ec55dff7ad3edc6d059ec",
    "0x65c8b05e80db1c053fa52530d087d73e7623e67f",
    "0x68d5120c01269d370e7bfeb43630c4350887be00",
    "0x3df6c1d54ad103233b3c74a12042f67239d69f70",
    "0x8a3ace428d3a2dd100031da4a453310cdb5e60e8",
    "0xc8fbe3bbadcd1829e153f1837fc5f7c53f280686",
    "0x19e900f9ee644b19c566cf4351d15e763768140e",
    "0x9ed5ffbc2ba5cff31ca62fd8af0f241e61a9a27f",
    "0x2cab4d881962d247218356b32abc4aa5c46ba0d2",
    "0x45acee69a04ebc47a4b917489dec7ef15d21df2b",
    "0x773963bd2e09ebd064e365f1d547293beced5560",
    "0x107a5ed5258cc0c962c18a86a72ccbeac7fc3769",
    "0x18d6ad7bab3e45126a6802e209038c329d89f480",
    "0x3d889b6391506032f9e9380a8f5cd3199661fb72",
    "0xcffe6ea1635793cddbba135e97a4bc88d323f2b3",
    "0x078ad2aa3b4527e4996d087906b2a3da51bba122",
    "0x54ecad032486a010e5378bfb0aa2e6a752f335c4",
    "0x623cda4683939d5fe3ddcf017608d9e1a9e01754",
    "0x573f29879312a97c73fe6c29d90924104f0959cb",
    "0xa309e257db5c325e4b83510fcc950449447e6bda",
    "0xf2870dde3e94663ce8c7aaf242ca20ce07c5d02b",
    "0xe1af707bc5871a17ce7259f8febc373eb6ae01b0",
    "0x048a0f5996bc1a94b870b6038980c2175e9ae193",
    "0xf4974ebbae7ec9db35d8125b3ae7f00e42cca06f",
    "0x65eebd65ff97c16df7edbc40a1b20b7cdcae101a",
    "0x5b05e06988677dfb2f6d60a1ae50888944149d14",
    "0x70cc2cd17112b1107917131c2e6d939d0b6df194",
    "0xb8c7088500a62ade8978659e92388c3cc331ad43",
    "0x85ca3b42eaa0c1b04e0520cac548e211d99e86ee",
    "0x5688969ad44310d800dd93feec3a7842b5da16dd",
    "0xa9c538ea7cec8e2e2dd9e869a36af086f657708b",
    "0xdb8fc7f6d7a50ff096c5c00f5052ff66e24c6ab2",
    "0xb04a0f6c86a20d0155907102e97824d915815feb",
    "0x4533d1f65906368ebfd61259daee561df3f3559d",
    "0xfa6e1efed2fce1337c6b2c0c0e7bfaa3927e6f23",
    "0xd10ef8798e886e50fb7232d53ccdd734c7970665",
    "0x5377f74a2229216b2cc5081908582d66b193d7be",
    "0x2f65b176b48c85c7a89ed509955817ee468fbff2",
    "0x4b6b892b6878e61f421066a01fc03d0648228f82",
    "0x1ae6912e08bb3e105a4f0a60f666376d3c7af380",
    "0xf0f8505989ca1204da6bb2ea93fbabd7b2c6f30f",
    "0xc9e9e3489d63637c08a34075c1c194f26676e405",
    "0x651a6f6c0b331a2f9d036adcf0ef5e268055d7d7",
    "0xfab22550fcd520a7eced27414cd74bc70a6ac1a9",
    "0xa7923c0d3b64073de8d2fd58c1f34ef3c7ecaea5",
    "0x4f0ecedcd73da0315134741d9d3830b08fe32e95",
    "0x7bfaf4c59aa4f011672b8e77789e1eb41abd654d",
    "0x51761c7ec6167fefc6c79982cf978e2f0796c6c8",
    "0xcc8114858de9c4db79cf57fa168596ff23e8998c",
    "0x5994cda480e64dfb040dfe7c6397f8f643808801",
    "0xa2f26a92794488a6f41970108e267e1d67957652",
    "0xc4f814d88bf9a816592dad0a7f6f5ad28b39dfde",
    "0xa7269c74294e399d700a58be9f035b652dd67e48",
    "0xe68c0650a819d1c4c9f541a0dadbb457cc793419",
    "0x29f505321e12dccd7f9044051d01aeebafd0be05",
    "0xb82f3987bc5dc39cabd446f7b680deda408cda80",
    "0xe4260df86f5261a41d19c2066f1eb2eb4f009e84",
    "0x235e7329aee474ecf4da74ec17d2ae712993f48d",
    "0xc702accf44649dceb7cb71dc06086bd56ec1bce5",
    "0x850141779f5d2e430d25864d17a2e7f4fe8ae2e1",
    "0x13ebd3443fa5575f0eb173e323d8419f7452cfb1",
    "0xe0a68cae437373160f1854e411cce05841e1bbaf",
    "0x3e8f7f2c591eb4dea4393535d45f96a5100ad18b",
    "0x42814cfb08b3a1f9fedd618d35e4e2a156b4488b",
    "0x7d6cc2509190459d2149c0db903eebb6432fe3ac",
    "0x9f508f7281f52b9ad5749662d0b39138f1b8303e",
    "0x15457c6527c4666c0936d1ad974b685efb3c5918",
    "0x378dcff8e6be1778b04f5712d686517bb6a01927",
    "0x1d69d3cdebb5c3e2b8b73cc4d49aa145ecb7950f",
    "0x84297c332d5a4edd3bd4b8c7cb58a0d1fa386ee8",
    "0x9571738fb9888c4d0f5ea84beb8477ebb026f739",
    "0x3da9b84cd1ed6cecf8c6a9b81cf16054aff69cbf",
    "0x3a7c804dbbaf3a60e397eeef2924516353119b8e",
    "0x905baebe93b2b778ab935201c8c8f9167cc051e5",
    "0x614583a6a651006d73a64a667b2b96b4e46500e4",
    "0xe26d523d3c9154ac0b6c9adb8c72978264a427dc",
    "0xe1af584a03e12ff30ab9a41405123619988b04a2",
    "0x5b5b71687e7cb013ae35ac9928dbd5393ea36c63",
    "0xfcc9ee2ab1291a5635d5eb7fef4ab9eacc20daf3",
    "0xbc3e746c622a4b8b3f70fcf43c0ff0d4c66452fe",
    "0xc382e8b6dc75eb205e6bf3b114712305966e69f6",
    "0xeaa88efdb766934f138abe9e8db6390bf440dcad",
    "0x337fdd5a18e69f2af1f8e3e042aeeb87995c719d",
    "0xd42aaa0a45258e39adb61d25f720b920745d255d",
    "0xe67067c8234ae6a4b84ebbed7a780a7b128c36c5",
    "0xf737674eb90de5a376cb947bfd6e8f63635bbfbb",
    "0xb6502179bd7fb6791ea7f5fbc89944718039e865",
    "0xdc0617d94059f1a6bb2fd1950823eeb198721436",
    "0x706950294ccc9e1359be51d154aa960929ce50a1",
    "0x5e6622bed1d59982e0a5b2667ab778b79c7364fb",
    "0x8edb8ffdc0e690bb5852a7d83d48246f18250d18",
    "0xcc634ad49a8685d5247313fa26e961215c0bbf7f",
    "0x5d22babfdc8047c4a91070aa04759bda4ea77f84",
    "0x8ed86422e382378abb3acf958639f39ced80845f",
    "0xabdc02072beb603e8a573ff37fe1d08f53d9e707",
    "0x528d4e4e0dbf071ec23013f06d8487bad5a8a68b",
    "0x94cdf930006d5cdde040a3022802e593ffc5199d",
    "0xe33a8865bd80660ae9a3d1cdfe496cba9b50cb27",
    "0x8c9a4427e991c6485e559e3c4f79a88128d8be3e",
    "0x789963b7b2244758e3ed9e071772d0b04a20c8b2",
    "0xe49d2030c4dfaf3a04e15d1861ee8b8b701da662",
    "0x1e6a7990f1f82220277a023d71e6348c35f3cef5",
    "0xe85041b675b616f635798a63db467289e5aa1e4d",
    "0xd2dea18d040152c580f29195b29670633b0c9796",
    "0xc8e2806a97413b5496a1ba6050b517cc98d0efca",
    "0xc744292112d53b4857f7f0c4c210a4fc45977a29",
    "0x04add7baa4cf4d9b93ce91585bffec5964868397",
    "0xa33e5e1ccf57c0caf78ae399061f270dd24ffcdf",
    "0xe957b0829c6ae6ac461d7365b7927e1ff604114b",
    "0xd9c4475e2dd89a9a0ad0c1e9a1e1bb28df7ba298",
    "0x49317b33a82fb576fba1462364d02569e766e33a",
    "0xb49d6cd5edb2f75dcb6e6a4c630680f20ffdc555",
    "0xe3dff97e14f3a55228ed2f614114bf6b27a7677b",
    "0x69c14d9b0073cc2556ae014b99335bc380a5076f",
    "0xb8be5256edcd6c9da1a0f74b615a2f9403382730",
    "0x55810247af2951d40aa9e72dfb1765cb5f2045a3",
    "0x641c2fef13fb417db01ef955a54904a6400f8b07",
    "0x03433830468d771a921314d75b9a1dea53c165d7",
    "0xe76d6f8747a0e41c92567fa634335f97eb1597f4",
    "0x63f20d7d378fe34fdd03ca2c09040ca96e36e10b",
    "0xf6ab7fcedc7363098821e0b93aa319c726d166bf",
    "0xe42758403b8a6c02ff81656856278f74985948cd",
    "0x11669497499a3afb9dd5a7459c6dd9baa2457161",
    "0x2882898129bfb577f756350d8443265038fce7cc",
    "0x037ccb73fd73f956901bcc4851040db81b8769d2",
    "0x91b8d9ea1c7c0f9660c72aa373a2a0d2b5ff28ee",
    "0x3d36b6a9de5222005636e968e468caf11eeca900",
    "0x4f4f473d650055d19e3db40df085c256c84cf149",
    "0xaf423481bb944d161ec44e01c8c2015314ba290b",
    "0xc9c022fcfebe730710ae93ca9247c5ec9d9236d0",
    "0xa552834773f75822343535bf1cd918f532c8f25d",
    "0x9631b82269c02a7616d990c0bf9ba1dc1bed1a73",
    "0x2029c02c87714bc52dbbb14e84aa04a0a6638839",
    "0x792b4ed2b3ddbcef0a3ae09810f3925105a3d6c1",
    "0x5148e66da253de7cc3d162a4995bf1dfd53d6465",
    "0x9f69058f9e4bf1bc7bea3b69dc45f0b972b4b24d",
    "0x8094c3d241cac93379be130e6e126ab8f6deab17",
    "0x325c454e28e81fde01abc3f28998adae0da4bf1c",
    "0xc30e9fda779efe2081dae6529c0d07fc16769c8f",
    "0x3c80283bdd6292a43531073559b7b84a7ea1d3b8",
    "0x51306f8a959f95f03b3880915821d99809c75e92",
    "0xb0e5ca05aa921da8b194766341ee6630f4288e98",
    "0x55105d93f8bb5e53f11c8a1306c3110f6570f1c9",
    "0x86649D69A96e82b346C1cb31ff7FAFb00EC8983d"].map(x => keccak256(x))

const toadHolderLeaves = ["0x8ec27e9f5bab92b94b15ab4f1de164c5a5da2e99",
    "0xde4ea497823b8af93ede25bfa1ff6084c2724543",
    "0xc26a6c794e1413adbccdaaf2e12d8df79dc84675",
    "0xb60ebc480cddf931f64e36f530d721bc8ba35ec7",
    "0x34aa3f359a9d614239015126635ce7732c18fdf3",
    "0x3c382d39bc6441695b3c0eaa9d418003bd0af408",
    "0xe88b1bc93f5711b628e81a50d5143c15b1473bd9",
    "0x74922b9dc211d61e1d5e44c245fdde5acb32f57b",
    "0x36824bcd70793e4867c5f5b1fcba0d035088b1cb",
    "0xee0db089d98dafa516538b336184cf6b135a8be0",
    "0x0f751666a5ad7c11c8cb12ed9ce78fb233400891",
    "0xdcf7be2ff93e1a7671724598b1526f3a33b1ec25",
    "0x95311bfee88b77b3d4af340605f801991156ff7b",
    "0xf1093386e43cb183b041be91bab769f72ec41a75",
    "0x888f8aa938dbb18b28bdd111fa4a0d3b8e10c871",
    "0x0de9409a4aaf3f1e78d0cdd89ff7ccedbb8ac394",
    "0xa8f16d0ddf23971c44490b844a00f4b1d9c0b453",
    "0x8d445eee078ff46d7ddc123dac5904fad0acf92e",
    "0x60377ec355857c2d06d1ce28555f624257344b0d",
    "0x3e5fce21497ba4acff43e7f3111b85c47cfaddf4",
    "0xd6df2693eec9f1ed3526e2cdf053fbd076c89a44",
    "0x2d82c05ff2507525190435bc4538af681f7dbfc2",
    "0x173c46e68187c09e4eb1d223b90a5789f7e6574a",
    "0x1a9a4932f36b3641f5f63e98f77f8a1f28d85dad",
    "0xa749a0d03a707a53d421c7c91180672ec3b8cd3c",
    "0x2da083ea4d78fb8b93a0b264e344b9dbc527d971",
    "0x067526baa12f7e65fe4d8080886c8f6078272456",
    "0xf3998eced96ae3cfe880ac9d2637b4118da48e22",
    "0xa495fb3ef5ad8323ebe5b369f81785db8236e018",
    "0xdf2f713d8d8f9c5dcbabdc020c48cdbd79eecfb8",
    "0xdb4782d463628cc5b1de8f1220f755ba3ba4728e",
    "0xf7e744527cc82e24c3badc2082d0391413b321e5",
    "0x40e8958c27c1db4c770a8a2e8319578e62f62abc",
    "0xb0ca2e19356f763721110b2e0b318883df844cbc",
    "0xce64da4caf4c7d5a65c74fbacb16e170d300285d",
    "0x18e0f9aadde970d74430cc8636a381ccfcd1f559",
    "0xde8a37645bc06d318a7120f56e72ad5de877760a",
    "0x01c38875ab789cb12efcd791db91217a00fd01fa",
    "0x51ec15594230ddf21a7ea5a4ac392bb8dbda527e",
    "0x1593c9ab842c36a926ae39cb2173731f9362e8fd",
    "0xe295492966896909c61597df71d7dece64b9b357",
    "0x6f85b8b8fe10157f166ec55dff7ad3edc6d059ec",
    "0x65c8b05e80db1c053fa52530d087d73e7623e67f",
    "0x68d5120c01269d370e7bfeb43630c4350887be00",
    "0x3df6c1d54ad103233b3c74a12042f67239d69f70",
    "0x8a3ace428d3a2dd100031da4a453310cdb5e60e8",
    "0xc8fbe3bbadcd1829e153f1837fc5f7c53f280686",
    "0x19e900f9ee644b19c566cf4351d15e763768140e",
    "0x9ed5ffbc2ba5cff31ca62fd8af0f241e61a9a27f",
    "0x2cab4d881962d247218356b32abc4aa5c46ba0d2",
    "0x45acee69a04ebc47a4b917489dec7ef15d21df2b",
    "0x773963bd2e09ebd064e365f1d547293beced5560",
    "0x107a5ed5258cc0c962c18a86a72ccbeac7fc3769",
    "0x18d6ad7bab3e45126a6802e209038c329d89f480",
    "0x3d889b6391506032f9e9380a8f5cd3199661fb72",
    "0xcffe6ea1635793cddbba135e97a4bc88d323f2b3",
    "0x078ad2aa3b4527e4996d087906b2a3da51bba122",
    "0x54ecad032486a010e5378bfb0aa2e6a752f335c4",
    "0x623cda4683939d5fe3ddcf017608d9e1a9e01754",
    "0x573f29879312a97c73fe6c29d90924104f0959cb",
    "0xa309e257db5c325e4b83510fcc950449447e6bda",
    "0xf2870dde3e94663ce8c7aaf242ca20ce07c5d02b",
    "0xe1af707bc5871a17ce7259f8febc373eb6ae01b0",
    "0x048a0f5996bc1a94b870b6038980c2175e9ae193",
    "0xf4974ebbae7ec9db35d8125b3ae7f00e42cca06f",
    "0x65eebd65ff97c16df7edbc40a1b20b7cdcae101a",
    "0x5b05e06988677dfb2f6d60a1ae50888944149d14",
    "0x70cc2cd17112b1107917131c2e6d939d0b6df194",
    "0xb8c7088500a62ade8978659e92388c3cc331ad43",
    "0x85ca3b42eaa0c1b04e0520cac548e211d99e86ee",
    "0x5688969ad44310d800dd93feec3a7842b5da16dd",
    "0xa9c538ea7cec8e2e2dd9e869a36af086f657708b",
    "0xdb8fc7f6d7a50ff096c5c00f5052ff66e24c6ab2",
    "0xb04a0f6c86a20d0155907102e97824d915815feb",
    "0x4533d1f65906368ebfd61259daee561df3f3559d",
    "0xfa6e1efed2fce1337c6b2c0c0e7bfaa3927e6f23",
    "0xd10ef8798e886e50fb7232d53ccdd734c7970665",
    "0x5377f74a2229216b2cc5081908582d66b193d7be",
    "0x2f65b176b48c85c7a89ed509955817ee468fbff2",
    "0x4b6b892b6878e61f421066a01fc03d0648228f82",
    "0x1ae6912e08bb3e105a4f0a60f666376d3c7af380",
    "0xf0f8505989ca1204da6bb2ea93fbabd7b2c6f30f",
    "0xc9e9e3489d63637c08a34075c1c194f26676e405",
    "0x651a6f6c0b331a2f9d036adcf0ef5e268055d7d7",
    "0xfab22550fcd520a7eced27414cd74bc70a6ac1a9",
    "0xa7923c0d3b64073de8d2fd58c1f34ef3c7ecaea5",
    "0x4f0ecedcd73da0315134741d9d3830b08fe32e95",
    "0x7bfaf4c59aa4f011672b8e77789e1eb41abd654d",
    "0x51761c7ec6167fefc6c79982cf978e2f0796c6c8",
    "0xcc8114858de9c4db79cf57fa168596ff23e8998c",
    "0x5994cda480e64dfb040dfe7c6397f8f643808801",
    "0xa2f26a92794488a6f41970108e267e1d67957652",
    "0xc4f814d88bf9a816592dad0a7f6f5ad28b39dfde",
    "0xa7269c74294e399d700a58be9f035b652dd67e48",
    "0xe68c0650a819d1c4c9f541a0dadbb457cc793419",
    "0x29f505321e12dccd7f9044051d01aeebafd0be05",
    "0xb82f3987bc5dc39cabd446f7b680deda408cda80",
    "0xe4260df86f5261a41d19c2066f1eb2eb4f009e84",
    "0x235e7329aee474ecf4da74ec17d2ae712993f48d",
    "0xc702accf44649dceb7cb71dc06086bd56ec1bce5",
    "0x850141779f5d2e430d25864d17a2e7f4fe8ae2e1",
    "0x13ebd3443fa5575f0eb173e323d8419f7452cfb1",
    "0xe0a68cae437373160f1854e411cce05841e1bbaf",
    "0x3e8f7f2c591eb4dea4393535d45f96a5100ad18b",
    "0x42814cfb08b3a1f9fedd618d35e4e2a156b4488b",
    "0x7d6cc2509190459d2149c0db903eebb6432fe3ac",
    "0x9f508f7281f52b9ad5749662d0b39138f1b8303e",
    "0x15457c6527c4666c0936d1ad974b685efb3c5918",
    "0x378dcff8e6be1778b04f5712d686517bb6a01927",
    "0x1d69d3cdebb5c3e2b8b73cc4d49aa145ecb7950f",
    "0x84297c332d5a4edd3bd4b8c7cb58a0d1fa386ee8",
    "0x9571738fb9888c4d0f5ea84beb8477ebb026f739",
    "0x3da9b84cd1ed6cecf8c6a9b81cf16054aff69cbf",
    "0x3a7c804dbbaf3a60e397eeef2924516353119b8e",
    "0x905baebe93b2b778ab935201c8c8f9167cc051e5",
    "0x614583a6a651006d73a64a667b2b96b4e46500e4",
    "0xe26d523d3c9154ac0b6c9adb8c72978264a427dc",
    "0xe1af584a03e12ff30ab9a41405123619988b04a2",
    "0x5b5b71687e7cb013ae35ac9928dbd5393ea36c63",
    "0xfcc9ee2ab1291a5635d5eb7fef4ab9eacc20daf3",
    "0xbc3e746c622a4b8b3f70fcf43c0ff0d4c66452fe",
    "0xc382e8b6dc75eb205e6bf3b114712305966e69f6",
    "0xeaa88efdb766934f138abe9e8db6390bf440dcad",
    "0x337fdd5a18e69f2af1f8e3e042aeeb87995c719d",
    "0xd42aaa0a45258e39adb61d25f720b920745d255d",
    "0xe67067c8234ae6a4b84ebbed7a780a7b128c36c5",
    "0xf737674eb90de5a376cb947bfd6e8f63635bbfbb",
    "0xb6502179bd7fb6791ea7f5fbc89944718039e865",
    "0xdc0617d94059f1a6bb2fd1950823eeb198721436",
    "0x706950294ccc9e1359be51d154aa960929ce50a1",
    "0x5e6622bed1d59982e0a5b2667ab778b79c7364fb",
    "0x8edb8ffdc0e690bb5852a7d83d48246f18250d18",
    "0xcc634ad49a8685d5247313fa26e961215c0bbf7f",
    "0x5d22babfdc8047c4a91070aa04759bda4ea77f84",
    "0x8ed86422e382378abb3acf958639f39ced80845f",
    "0xabdc02072beb603e8a573ff37fe1d08f53d9e707",
    "0x528d4e4e0dbf071ec23013f06d8487bad5a8a68b",
    "0x94cdf930006d5cdde040a3022802e593ffc5199d",
    "0xe33a8865bd80660ae9a3d1cdfe496cba9b50cb27",
    "0x8c9a4427e991c6485e559e3c4f79a88128d8be3e",
    "0x789963b7b2244758e3ed9e071772d0b04a20c8b2",
    "0xe49d2030c4dfaf3a04e15d1861ee8b8b701da662",
    "0x1e6a7990f1f82220277a023d71e6348c35f3cef5",
    "0xe85041b675b616f635798a63db467289e5aa1e4d",
    "0xd2dea18d040152c580f29195b29670633b0c9796",
    "0xc8e2806a97413b5496a1ba6050b517cc98d0efca",
    "0xc744292112d53b4857f7f0c4c210a4fc45977a29",
    "0x04add7baa4cf4d9b93ce91585bffec5964868397",
    "0xa33e5e1ccf57c0caf78ae399061f270dd24ffcdf",
    "0xe957b0829c6ae6ac461d7365b7927e1ff604114b",
    "0xd9c4475e2dd89a9a0ad0c1e9a1e1bb28df7ba298",
    "0x49317b33a82fb576fba1462364d02569e766e33a",
    "0xb49d6cd5edb2f75dcb6e6a4c630680f20ffdc555",
    "0xe3dff97e14f3a55228ed2f614114bf6b27a7677b",
    "0x69c14d9b0073cc2556ae014b99335bc380a5076f",
    "0xb8be5256edcd6c9da1a0f74b615a2f9403382730",
    "0x55810247af2951d40aa9e72dfb1765cb5f2045a3",
    "0x641c2fef13fb417db01ef955a54904a6400f8b07",
    "0x03433830468d771a921314d75b9a1dea53c165d7",
    "0xe76d6f8747a0e41c92567fa634335f97eb1597f4",
    "0x63f20d7d378fe34fdd03ca2c09040ca96e36e10b",
    "0xf6ab7fcedc7363098821e0b93aa319c726d166bf",
    "0xe42758403b8a6c02ff81656856278f74985948cd",
    "0x11669497499a3afb9dd5a7459c6dd9baa2457161",
    "0x2882898129bfb577f756350d8443265038fce7cc",
    "0x037ccb73fd73f956901bcc4851040db81b8769d2",
    "0x91b8d9ea1c7c0f9660c72aa373a2a0d2b5ff28ee",
    "0x3d36b6a9de5222005636e968e468caf11eeca900",
    "0x4f4f473d650055d19e3db40df085c256c84cf149",
    "0xaf423481bb944d161ec44e01c8c2015314ba290b",
    "0xc9c022fcfebe730710ae93ca9247c5ec9d9236d0",
    "0xa552834773f75822343535bf1cd918f532c8f25d",
    "0x9631b82269c02a7616d990c0bf9ba1dc1bed1a73",
    "0x2029c02c87714bc52dbbb14e84aa04a0a6638839",
    "0x792b4ed2b3ddbcef0a3ae09810f3925105a3d6c1",
    "0x5148e66da253de7cc3d162a4995bf1dfd53d6465",
    "0x9f69058f9e4bf1bc7bea3b69dc45f0b972b4b24d",
    "0x8094c3d241cac93379be130e6e126ab8f6deab17",
    "0x325c454e28e81fde01abc3f28998adae0da4bf1c",
    "0xc30e9fda779efe2081dae6529c0d07fc16769c8f",
    "0x3c80283bdd6292a43531073559b7b84a7ea1d3b8",
    "0x51306f8a959f95f03b3880915821d99809c75e92",
    "0xb0e5ca05aa921da8b194766341ee6630f4288e98",
    "0x55105d93f8bb5e53f11c8a1306c3110f6570f1c9",
    "0x86649D69A96e82b346C1cb31ff7FAFb00EC8983d"].map(x => keccak256(x))

let isConnected = false;
let provider;

async function toggleConnect() {
  if (isConnected) {
    // Disconnect the user's Metamask
    await provider.send('wallet_disconnect', []);

    // Reset the UI
    document.getElementById('connect-button').innerHTML = 'Connect Wallet';
    isConnected = false;
  } else {
    // Check if Metamask is installed
    if (typeof window.ethereum !== 'undefined') {

      // Enable Metamask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      })
      // Create an Ethers.js provider for Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();

      // Get the user's account information
      const address = accounts[0];
      const ensName = await provider.lookupAddress(address);
      let displayName;
      if (ensName != null) {
        displayName = ensName;
      } else {
        displayName = address.slice(0,8) + "...";
      }
      if (network.chainId !== 5) {
        document.getElementById('connect-message').innerHTML = 'Plz connect to Eth mainnet.';
      } else {
        document.getElementById('connect-message').innerHTML = `${displayName} connected.`;
      }

      document.getElementById('connect-button').innerHTML = "'-'";
      isConnected = true;
    } else {
      console.log('Metamask is not installed!');
    }
  }
}

async function mintPriority() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();

  if (network.chainId !== 5) {
    console.log("Wrong Chain");
    return;
  }

  if (!isConnected) {
    console.log("Connect to metamask");
    return;
  }
  const signer = provider.getSigner();

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  })
  const address = accounts[0];
  const leaf = keccak256(address)

  const hexContract = new ethers.Contract(contractAddress, hexanonsAbi, signer);
  
  const priorityTree = new MerkleTree(priorityLeaves, keccak256, { sortPairs: true })
  const priorityProof = priorityTree.getHexProof(leaf)

  hexContract.priorityMint(priorityProof);
}

async function mintHolder() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();
  

  if (network.chainId !== 5) {
    console.log("Wrong Chain");
    return;
  }

  if (!isConnected) {
    console.log("Connect to metamask");
    return;
  }
  const signer = provider.getSigner();
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  })
  const address = accounts[0];
  const leaf = keccak256(address)

  const hexContract = new ethers.Contract(contractAddress, hexanonsAbi, signer);
  
  const toadHolderTree = new MerkleTree(toadHolderLeaves, keccak256, { sortPairs: true })
  const toadHolderProof = toadHolderTree.getHexProof(leaf)

  hexContract.holdersMint(toadHolderProof);  
}

window.ethereum.on("connect", async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const hexContract = new ethers.Contract(contractAddress, hexanonsAbi, provider)
  const totalSupply = await hexContract.totalSupply();
  const mintStart = await hexContract.PRIORITY_MINT_START();
  const date = new Date(mintStart * 1000);

  document.getElementById('supply').innerHTML = `${totalSupply.toString()} / 128 minted.`;
  document.getElementById('mint-start').innerHTML = `Priority Mint Starts at ${date.toLocaleDateString("en-GB")} ${date.toLocaleTimeString("it-IT")}`;
})

ethereum.on('chainChanged', (_chainId) => window.location.reload());