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
const contractAddress = "0x9f249A15ed1f94BBB67430180951A09066e495E1";

const priorityLeaves = [
  "0xE4260Df86f5261A41D19c2066f1Eb2Eb4F009e84",
  "0xdb4782d463628cc5b1de8f1220f755BA3bA4728E",
  "0xeFEed35D024CF5B59482Fa4BC594AaeAf694E669",
  "0xfAB22550fcD520A7eCED27414CD74Bc70a6ac1a9",
  "0xe6B9F6b9cC3DAC911976008b131c2Ca634D576c5",
  "0x5B5b71687e7cb013aE35ac9928DbD5393Ea36C63",
  "0x4e4acd7fC67a37A88B5cF9D9f0f8aB58449a88Bf",
  "0x34aA3F359A9D614239015126635CE7732c18fDF3",
  "0xF552832498d5b913f65B2b0c5696f4D57b13F4E3",
  "0x173c46E68187C09E4Eb1D223b90a5789f7e6574A",
  "0x888f8AA938dbb18b28bdD111fa4A0D3B8e10C871",
  "0xC744292112d53b4857f7f0c4C210A4Fc45977a29",
  "0x79C1134a1dFdF7e0d58E58caFC84a514991372e6",
  "0x073cf670AD2cf0e048924aC2C787903E76A0f389",
  "0xA0eF713dE5Cb5D51C5b600698e018E39d401A768",
  "0xc0D4A42dD3Cf5AC320D82E20A1285b50eFe26615",
  "0x40E8958C27C1db4C770a8a2E8319578E62F62AbC",
  "0xA2501EAB283A0Ea851fbF9D02CBc298fEe8A1f62",
  "0xDBC29240c6434cEeca58f28d5D9e9402D9781E4d",
  "0x6bcD18BE79739346EAa7762B4A235EC8A6426679",
  "0x4533d1F65906368ebfd61259dAee561DF3f3559D",
  "0x8edb8ffdc0e690bb5852a7d83d48246f18250d18",
  "0x7261a3b25f410a2E90D12a79BF6A2EEA89A41993",
  "0xaF423481bb944D161EC44e01C8C2015314Ba290B",
  "0x2D931b3228a49f1AAC6aC381AECaac9B4E5a9A65",
  "0x694367ea528240fec8172581282ff171a6ec39aa",
  "0xD6Df2693eEc9f1ED3526E2CdF053fBD076c89a44",
  "0x792b4Ed2b3DDBCEf0A3ae09810f3925105A3d6c1",
  "0xB04A0F6c86a20D0155907102e97824d915815fEB",
  "0xF655E23B8e53402833519B1DE7eCbD4f63D5e6ad",
  "0x0cff8e545EDE887aeA85E807ce58e3A37c5dA501",
  "0xd2Ace7864803BaaABf0912890c5183e49efe0b16",
  "0xaacfF22Fcd3383d01D6eB403A689e13341fD131E",
  "0x68D5120C01269d370e7bFeb43630c4350887Be00",
  "0x0ee5c40a7c80e4ef7e065db32e08f71fc7e9a4a2",
  "0xc8fbE3BbADCd1829e153F1837Fc5F7C53F280686",
  "0xEA78980594B02f805b607abA747b2b5FB907B708",
  "0x8cAC25c3BA02D20024694C0899c8d5Fe2ddC4fC7",
  "0xE0A68caE437373160F1854E411Cce05841E1bbAF",
  "0xF3998EcED96ae3cFe880aC9d2637B4118dA48E22",
  "0x037ccb73fd73f956901bcc4851040db81b8769d2",
  "0x3c864B2c90BBEc9b0F74a190Ed3C1f1215b6d81C",
  "0xCC634aD49a8685D5247313Fa26E961215c0bBF7F",
  "0x4B6B892B6878E61F421066A01FC03d0648228F82"].map(x => keccak256(x))
const toadHolderLeaves = ["0xecb3ecbdf8b4297b89126d3ea0278e11c0ad96b6",
  "0x8094c3d241cac93379be130e6e126ab8f6deab17",
  "0x68b08287134f255ea8deeff409241f889c9f8deb",
  "0x067526baa12f7e65fe4d8080886c8f6078272456",
  "0x6bad0ddf38f3b9c43bf19d3232e2b4e78a2dcd5b",
  "0xa8ff5ba66bf96bac81d81058d610b9b8c4cacff0",
  "0xba567d6ce93c021e46baa959ffc241fe35a10297",
  "0x63f20d7d378fe34fdd03ca2c09040ca96e36e10b",
  "0x54ecad032486a010e5378bfb0aa2e6a752f335c4",
  "0x34a30fa8a053568ecf8d10281e8fc029709029cb",
  "0x5148e66da253de7cc3d162a4995bf1dfd53d6465",
  "0xeaa88efdb766934f138abe9e8db6390bf440dcad",
  "0xa1cca97078763789d6cbd296f82c53bf1ee2858a",
  "0xb9820a7d1a1c97c339a471457c94cb67354f5b9f",
  "0x52c686fd4cd2927aa9d9c8c2c03517cde3ce24f9",
  "0xbb0305fad6e3703cf2959de51bcc590501395310",
  "0x2a5d7d9c4132f7b8e8fb0298bd92a50728a46299",
  "0xf13a69f85075972abb8435c8bba1f24d91efb986",
  "0x2e12d1e5d81f9e4c50879ee61c1483df8160b2ee",
  "0x13ebd3443fa5575f0eb173e323d8419f7452cfb1",
  "0xb0e5ca05aa921da8b194766341ee6630f4288e98",
  "0x2f65b176b48c85c7a89ed509955817ee468fbff2",
  "0xe42758403b8a6c02ff81656856278f74985948cd",
  "0xb0ca2e19356f763721110b2e0b318883df844cbc",
  "0x594f2590df17d0f5f9fa68bbcfadafdb7d28b0c9",
  "0xbcccd1ed81a38be41a33434815591c6b44b7b80e",
  "0xd8ea29e05493d75e9f51d2051d7a71aa5b2619bc",
  "0x1fe30b88676dad9da0584f06fbbd2edafc105194",
  "0xc461beb0db4839937cabeeaa8772e3dd4a67fab1",
  "0x2029c02c87714bc52dbbb14e84aa04a0a6638839",
  "0xf3998eced96ae3cfe880ac9d2637b4118da48e22",
  "0xfa54ce3bb37a1f19ee6cd0b3fb0028f4542c8b48",
  "0xe0a749772f7512983759a8a7dee2f5a39d9ad14c",
  "0x55810247af2951d40aa9e72dfb1765cb5f2045a3",
  "0xc01acaa6d2fb9ea774437a1d725d2e5a283033cc",
  "0x0de9409a4aaf3f1e78d0cdd89ff7ccedbb8ac394",
  "0xe144950aca97e3bc42f8ff01f5d624e5dc2368e2",
  "0xc702accf44649dceb7cb71dc06086bd56ec1bce5",
  "0xd6b9ce998d6158645a191fcd17dc5788c6cd21bf",
  "0x634ffd24513c0def2127e2d086a81968f948c7d7",
  "0xd36aac066342be9ff91a9f940633f1042efba82b",
  "0xd2dea18d040152c580f29195b29670633b0c9796",
  "0xa53a6fe2d8ad977ad926c485343ba39f32d3a3f6",
  "0x792b4ed2b3ddbcef0a3ae09810f3925105a3d6c1",
  "0x8d445eee078ff46d7ddc123dac5904fad0acf92e",
  "0x3b273eea2d043a76e2e77e9ced867d39d94720de",
  "0x3c864b2c90bbec9b0f74a190ed3c1f1215b6d81c",
  "0x800f0392417ca839a21544aaf518dcd7919471f1",
  "0x0ec2991a984c03fb3dff77cca278ef3bb96fbd40",
  "0x8c9a4427e991c6485e559e3c4f79a88128d8be3e",
  "0x02d9c2c6426d344653071f7d4a59dd52b1659e03",
  "0x51306f8a959f95f03b3880915821d99809c75e92",
  "0x235e7329aee474ecf4da74ec17d2ae712993f48d",
  "0x2da083ea4d78fb8b93a0b264e344b9dbc527d971",
  "0xb0a224c3a537a2cb41b0a38c6804e45a459be533",
  "0x65c8b05e80db1c053fa52530d087d73e7623e67f",
  "0xbc3e746c622a4b8b3f70fcf43c0ff0d4c66452fe",
  "0x3878b478d43e7ca2d646ae6d6f3bbf0a91cddce4",
  "0xe88b1bc93f5711b628e81a50d5143c15b1473bd9",
  "0x04add7baa4cf4d9b93ce91585bffec5964868397",
  "0x49317b33a82fb576fba1462364d02569e766e33a",
  "0xce07e6b3fa0ff17e8a8067b54835548f20da6616",
  "0x9a26b11fde8be7ab119713f7b34798707339b69b",
  "0x60377ec355857c2d06d1ce28555f624257344b0d",
  "0x6f85b8b8fe10157f166ec55dff7ad3edc6d059ec",
  "0x7bfaf4c59aa4f011672b8e77789e1eb41abd654d",
  "0x3a7c804dbbaf3a60e397eeef2924516353119b8e",
  "0xff46e10aa88e4dcf8d7de426af2b3a45e5c3c283",
  "0x25a940bc0cdf97b7a5ba9c76b6b048153f8ee247",
  "0xd3867f140836f17eb421354abd9d73deb1ac2e72",
  "0x31c55f64cdd0dceb6a3ce2174044ad9350e2c337",
  "0x2b96244fec6925683687191eaf95c50c56e33607",
  "0xdcc6ce68933984255ee5e7e0b40670796e8e195e",
  "0xfcc9ee2ab1291a5635d5eb7fef4ab9eacc20daf3",
  "0x6e39834641aa09b8395a8736f400a15b02905468",
  "0xba0995c52474dfb7c48181f71454a63a2847982c",
  "0xb60ebc480cddf931f64e36f530d721bc8ba35ec7",
  "0x1a94578c4db2c90042c62fb0311fe1423659475b",
  "0x2bdc4becbead5841db7114f95f68a8f959a4ee59",
  "0x4b6b892b6878e61f421066a01fc03d0648228f82",
  "0x03433830468d771a921314d75b9a1dea53c165d7",
  "0x7972a7f9a4e448154f460c0c930885c99a68e56b",
  "0x786b9aea69072f01e57ca5af691c1a7d8eb9fc93",
  "0x550711fb9c024ccd4de7b03738469bd40bf168ff",
  "0x5377f74a2229216b2cc5081908582d66b193d7be",
  "0x46d30a89d9f203b2387295c28c05f81ca2366231",
  "0x8ed86422e382378abb3acf958639f39ced80845f",
  "0xc53b74d59dad5f335a7db7236d77eba1236e9a92",
  "0xff69df6369c917664760804a2e6d827749b0639d",
  "0x14bb253dd4aec3f1d8956a2161faacdc31a2de21",
  "0xb0396c7b1102a978a87a863fbca7fd095b933d58",
  "0x85ca3b42eaa0c1b04e0520cac548e211d99e86ee",
  "0xbdfc087a5c32f6b6e425697c1a19a10e378136ee",
  "0xd80e033db854ee2ba1211a8055e5008bc2b7b921",
  "0x1290261e6d6f8bb57dd87e9f6e08d140d8812101",
  "0x706950294ccc9e1359be51d154aa960929ce50a1",
  "0xaf423481bb944d161ec44e01c8c2015314ba290b",
  "0xcc8114858de9c4db79cf57fa168596ff23e8998c",
  "0x8a3ace428d3a2dd100031da4a453310cdb5e60e8",
  "0x91b8d9ea1c7c0f9660c72aa373a2a0d2b5ff28ee",
  "0xb3f5de1b30d0b206c0f67920ce40da0ed3352d41",
  "0xa495fb3ef5ad8323ebe5b369f81785db8236e018",
  "0x103bd266bd4abca02096a6f57974681c80782e38",
  "0x45336a1a8b4a2306decd62777536e43ed0bd6d59",
  "0x99255d645812cb67198bd51851a431e011ba2981",
  "0x36bef46dfd4e17f9c6cae37e408540dc7c6527d6",
  "0x4b1a45904d04666f2a1d76a4c585234dfe89c6b6",
  "0x2ee77be2bb0e48c6f17f20f4e26932eb87dfd892",
  "0xecc424c1ffb22ba13d84669f15107f53809b0ee3",
  "0x378dcff8e6be1778b04f5712d686517bb6a01927",
  "0x94cdf930006d5cdde040a3022802e593ffc5199d",
  "0x0ee5c40a7c80e4ef7e065db32e08f71fc7e9a4a2",
  "0xa10bb823fb55a9199e4f521d0a88993c4cba7150",
  "0xe85041b675b616f635798a63db467289e5aa1e4d",
  "0x95311bfee88b77b3d4af340605f801991156ff7b",
  "0x7cca98eb2024894487a27c0b44715cd5e0e6d37e",
  "0x68d5120c01269d370e7bfeb43630c4350887be00",
  "0x5e6622bed1d59982e0a5b2667ab778b79c7364fb",
  "0x6504aa5c46b6c4b09da3463428afdaf8917e59c7",
  "0xa57876de5e9a0c58751b51f704cf2db517788a6d",
  "0x107a5ed5258cc0c962c18a86a72ccbeac7fc3769",
  "0xa4e0163bacd1a657d2d28068cd84d6aa225721c4",
  "0xc8fbe3bbadcd1829e153f1837fc5f7c53f280686",
  "0x614583a6a651006d73a64a667b2b96b4e46500e4",
  "0x8edb8ffdc0e690bb5852a7d83d48246f18250d18",
  "0xe33a8865bd80660ae9a3d1cdfe496cba9b50cb27",
  "0x4f4f473d650055d19e3db40df085c256c84cf149",
  "0x04fda51b80e23ace7f696a2923c789bddd49d39a",
  "0x85c35f0a6f068b9ab3bd6829aec641656bd01de1",
  "0xdb4782d463628cc5b1de8f1220f755ba3ba4728e",
  "0x483a124f6717ad67440af11a77dec25f1a3d1259",
  "0x80988d6f8c7fb123f6eaf23e780a67c4eb7dc734",
  "0xe957b0829c6ae6ac461d7365b7927e1ff604114b",
  "0xa8f16d0ddf23971c44490b844a00f4b1d9c0b453",
  "0x3d36b6a9de5222005636e968e468caf11eeca900",
  "0x651a6f6c0b331a2f9d036adcf0ef5e268055d7d7",
  "0x1ae6912e08bb3e105a4f0a60f666376d3c7af380",
  "0x1593c9ab842c36a926ae39cb2173731f9362e8fd",
  "0x1b9fbead09468a48eb10856ba0eeb1649c6ec4c9",
  "0x7ef61cacd0c785eacdfe17649d1c5bcba676a858",
  "0x28aa17c57b04f2209265a281107915ef48d91f36",
  "0xd2ace7864803baaabf0912890c5183e49efe0b16",
  "0x51ec15594230ddf21a7ea5a4ac392bb8dbda527e",
  "0x5d22babfdc8047c4a91070aa04759bda4ea77f84",
  "0x79c1134a1dfdf7e0d58e58cafc84a514991372e6",
  "0x70178200a827d78a8368b7cbdaf304cb582d1d90",
  "0x1b14f5576b37710800ddf2443b1c999f23f2353f",
  "0xf777e702b4d71e780ff37cab1bf82c56cab0ae46",
  "0x09f41c916b5c2e26706febf7c4666d2afe57419a",
  "0x325c454e28e81fde01abc3f28998adae0da4bf1c",
  "0x15457c6527c4666c0936d1ad974b685efb3c5918",
  "0x5bf5a6be78e905b92d775615acd47340f5107d72",
  "0xf6769fbe1ece4e9e851c1c30af8fbada0d07d84d",
  "0xd6df2693eec9f1ed3526e2cdf053fbd076c89a44",
  "0x1e4323b88a097011761cf12935979a705acbbda7",
  "0x90052d092e11ccd4855f656fcdc0734fba40ba00",
  "0x5e01722ae827162935874afdd434ce9afd3c8a35",
  "0xe5fd5ec4695b93d7e43f5d96657a535e0ff499bd",
  "0x738973c57c389178ca543adbd14cd45a1782b7ab",
  "0x8ccb929671eca3f5fb28de915a7dea3a1e0debb3",
  "0x850141779f5d2e430d25864d17a2e7f4fe8ae2e1",
  "0xea78980594b02f805b607aba747b2b5fb907b708",
  "0x764abe778aa96cd04972444a8e1db83df13f7e66",
  "0xe68c0650a819d1c4c9f541a0dadbb457cc793419",
  "0x048a0f5996bc1a94b870b6038980c2175e9ae193",
  "0xdc0617d94059f1a6bb2fd1950823eeb198721436",
  "0x3658c82de2e2cff9422fbeb03dc72d8ca5b11911",
  "0x4f6465f3614f9b5f3d64bb327df8a8f34ed11923",
  "0x078ad2aa3b4527e4996d087906b2a3da51bba122",
  "0x0c4c514355c96b875751a78c3a57afdb81521d60",
  "0xc26a6c794e1413adbccdaaf2e12d8df79dc84675",
  "0x4a719bb6898ec3f8dff106ed114b760b619d3721",
  "0xf2350c036fd449db5b514fb1a3d9eac019694dad",
  "0x907eb13bd905debcab71bb9df006516d7e854702",
  "0x5bb140157386eb2f62c11e3c651c2a3729a02427",
  "0x5b5b71687e7cb013ae35ac9928dbd5393ea36c63",
  "0xfcc8a8d375fdc0839e7e00aed21cb05cadef1014",
  "0x730aba725664974efb753ee72ca789541c733db4",
  "0x2d82c05ff2507525190435bc4538af681f7dbfc2",
  "0x8d43ee78dc579c01ca8c59c736b10685843286df",
  "0x97b7e2ea42e9db47cbb75a1ac3e95dd19d282899",
  "0xaacff22fcd3383d01d6eb403a689e13341fd131e",
  "0x836245882d826b2e8fc3ebb77575440dba3c3cc6",
  "0x3e5fce21497ba4acff43e7f3111b85c47cfaddf4",
  "0x09a5943a6d10919571ee2c9f63380aea747eca97",
  "0xe7224815c6c33d2369f09ced9b5ba16ac2a7b06d",
  "0xa749a0d03a707a53d421c7c91180672ec3b8cd3c",
  "0x720df068ca59f885da677986e7b996841ff7b38a",
  "0x60c74a30786c0880aae69d4133b344a7dc0bd124",
  "0x6eef09b526d883f98762a7005fabd2c800dfca44",
  "0x573f29879312a97c73fe6c29d90924104f0959cb",
  "0x545ab4a07298f36325c0a3b4250dd82e67bdc912",
  "0x2ab73eb51f1f6832083bbf79b34a79c90ffa2aeb",
  "0xe3dff97e14f3a55228ed2f614114bf6b27a7677b",
  "0x95371026c28bfa0960646eb041d51dc0fc6933d4",
  "0x6ad48c7fd4e22fdc3479d7f978b03fe824af29fe",
  "0x948d95fe4404790bc05bebd10d3c99629e79579b",
  "0x42ce4e720177bf201e729709d7acf067ec01d5a6",
  "0x34aa3f359a9d614239015126635ce7732c18fdf3",
  "0x289dc100ae542c3957a159d65869828ade14a90f",
  "0xb0646bd7de0daf9f005faede85a89fae8dc6f936",
  "0x42814cfb08b3a1f9fedd618d35e4e2a156b4488b",
  "0x701ee76fc23173b1568f12dea8a4122fbc55abd1",
  "0xb5e0292c7f8469af022ec65371e2e5ec17dfc917",
  "0x4533d1f65906368ebfd61259daee561df3f3559d",
  "0xf0aa422a657b276bfa5ed750ee843ccf105f8b11",
  "0xc382e8b6dc75eb205e6bf3b114712305966e69f6",
  "0xd4db6d8ef756141de0d838808ddb8ffcd847d7ff",
  "0xc0479946bce25ededf0911d3cf3f68a3894fefd7",
  "0xc9e9e3489d63637c08a34075c1c194f26676e405",
  "0xe1af584a03e12ff30ab9a41405123619988b04a2",
  "0x3df6c1d54ad103233b3c74a12042f67239d69f70",
  "0xa309e257db5c325e4b83510fcc950449447e6bda",
  "0x15424b5b981810af006f2f394baeb79cc2b4af2f",
  "0xcffe6ea1635793cddbba135e97a4bc88d323f2b3",
  "0x56879cc88fa3895c082c22035db1386dcac53bba",
  "0x688a46b1a19193011f0f5dc4675878073f640c89",
  "0x5688969ad44310d800dd93feec3a7842b5da16dd",
  "0x9f69058f9e4bf1bc7bea3b69dc45f0b972b4b24d",
  "0xde8a37645bc06d318a7120f56e72ad5de877760a",
  "0x40e8958c27c1db4c770a8a2e8319578e62f62abc",
  "0x5470c5a6fce7447afd2c9be3a0f25e362c093661",
  "0x073cf670ad2cf0e048924ac2c787903e76a0f389",
  "0x3dc1677a528c6b11ab99ccabe002fa09d5fa0e70",
  "0x4bc10a13a35565107ba0d6a0b273e163ef1fb746",
  "0xde4ea497823b8af93ede25bfa1ff6084c2724543",
  "0xd42aaa0a45258e39adb61d25f720b920745d255d",
  "0xd5bfde97805b737819d71a64b33cf4c9e16bccf0",
  "0xda95d60fd050922afebcab8ff6b8aa670ab63368",
  "0xf04f09930d20c95e93c34a2e70cbf75b1eba0c2c",
  "0xfab22550fcd520a7eced27414cd74bc70a6ac1a9",
  "0xdd2d9020d3e549616e66e373c5e9cf8871d0c2f6",
  "0xc30e9fda779efe2081dae6529c0d07fc16769c8f",
  "0x3a78a990dcfe1fa140701cb4a02c7b9d8c3f3e9e",
  "0x36824bcd70793e4867c5f5b1fcba0d035088b1cb",
  "0x69c14d9b0073cc2556ae014b99335bc380a5076f",
  "0xe1af707bc5871a17ce7259f8febc373eb6ae01b0",
  "0x1a9a4932f36b3641f5f63e98f77f8a1f28d85dad",
  "0xb04a0f6c86a20d0155907102e97824d915815feb",
  "0x369615bc57975b06c418f42d3fda3754a385b97b",
  "0xcf7042e50e88e71dce2b04dff3fff9dcd59610b5",
  "0x29dcf839449bd5d1b5f3726cf7283099af17f5df",
  "0x29216537070923acb4840b8d1c9e8aa00330186f",
  "0xf2d696e7b3e040b160d658de02c00a4ef5be1bc0",
  "0x4d7ea3f390ce79874c28632a211b141bccc118f2",
  "0x3e8f7f2c591eb4dea4393535d45f96a5100ad18b",
  "0x431573685058e5d480fe383dc1fd3b644913c239",
  "0x9f508f7281f52b9ad5749662d0b39138f1b8303e",
  "0xce64da4caf4c7d5a65c74fbacb16e170d300285d",
  "0xabdc02072beb603e8a573ff37fe1d08f53d9e707",
  "0x29dbf668430ca3d8f061762ae0de3774232d9c1c",
  "0xe0a68cae437373160f1854e411cce05841e1bbaf",
  "0x5198b9cafaa588870d10a127f1e249b18c0fa2bd",
  "0x2b83ae5c340a9887fd5b1bc896cb553878025b77",
  "0xe76d6f8747a0e41c92567fa634335f97eb1597f4",
  "0x311f2b05f8c9dacf4443da9951443664368e726b",
  "0x19e900f9ee644b19c566cf4351d15e763768140e",
  "0xf737674eb90de5a376cb947bfd6e8f63635bbfbb",
  "0xc4f814d88bf9a816592dad0a7f6f5ad28b39dfde",
  "0xa7923c0d3b64073de8d2fd58c1f34ef3c7ecaea5",
  "0xe295492966896909c61597df71d7dece64b9b357",
  "0xc1438a18b0a4d3470719274c83e45d9ce33c32b3",
  "0x2d931b3228a49f1aac6ac381aecaac9b4e5a9a65",
  "0xe713794d7e3083687b93b64d5e5b15c84dc6dbd5",
  "0x33a76e67624de20a59486a4cb4859b1914a19f95",
  "0xa2f26a92794488a6f41970108e267e1d67957652",
  "0x51761c7ec6167fefc6c79982cf978e2f0796c6c8",
  "0xa7269c74294e399d700a58be9f035b652dd67e48",
  "0x3c80283bdd6292a43531073559b7b84a7ea1d3b8",
  "0xda7122e7a95f9ae93fc20af1225b2a8487ed4d22",
  "0xe4a4c0475d1c14c9a56d36e5422862d7f511460c",
  "0xc9870f60415c62d998dfe3ded15aafc015f45acc",
  "0xadc3546ea680e21afa7d5d45dcd03f2f8957241a",
  "0x6a5b7fee767612186a645ebdf77ffbb5b8011f42",
  "0x173c46e68187c09e4eb1d223b90a5789f7e6574a",
  "0x8ec27e9f5bab92b94b15ab4f1de164c5a5da2e99",
  "0x597005d6f2dde976b46cbd5550db9fab5dae173c",
  "0xb6ee8b1899e4cad7e28015995b82969e44bd0bb0",
  "0x337fdd5a18e69f2af1f8e3e042aeeb87995c719d",
  "0x8876f295e0b977770aacd6f738d226916196ecc7",
  "0x84297c332d5a4edd3bd4b8c7cb58a0d1fa386ee8",
  "0xfa6e1efed2fce1337c6b2c0c0e7bfaa3927e6f23",
  "0x6c9a57704668ca428fa41acff575aeaf7063261c",
  "0xc744292112d53b4857f7f0c4c210a4fc45977a29",
  "0xc9c022fcfebe730710ae93ca9247c5ec9d9236d0",
  "0x0eefa7e7877aeb0ce0ffced291f492458aae19eb",
  "0xc8e2806a97413b5496a1ba6050b517cc98d0efca",
  "0x29f505321e12dccd7f9044051d01aeebafd0be05",
  "0xa7fb80b759ea191c19720f531398663b298455fd",
  "0xb8c6cc27ff8d6f70ba31078a4d6d0b01888cb3e8",
  "0xf1093386e43cb183b041be91bab769f72ec41a75",
  "0xf6ab7fcedc7363098821e0b93aa319c726d166bf",
  "0xee0db089d98dafa516538b336184cf6b135a8be0",
  "0x01c38875ab789cb12efcd791db91217a00fd01fa",
  "0x4aDB9Cf90c2a3aF77A23199d5D6398e3d43d78C8",
  "0xb82f3987bc5dc39cabd446f7b680deda408cda80",
  "0x84f8db328d3a2fd20ccf500648489ffef29f9e2a",
  "0x9571738fb9888c4d0f5ea84beb8477ebb026f739",
  "0xc6a9f985af8737124aac0cc407a2ace271602261",
  "0x2c8a0781ca1ef806d1d26b49d668f5756b19d0ff",
  "0xe174750d3a85f8d7ddae9d509761bf30b06e0062",
  "0x70cc2cd17112b1107917131c2e6d939d0b6df194",
  "0x7abdad9a1c657904d4b183af092f6a0ebcb32d38",
  "0xe0e8c0d4759a3ef01808b17347434c8fa009423f",
  "0x789963b7b2244758e3ed9e071772d0b04a20c8b2",
  "0xb145fc3862f496a9828148069919a7a1d7531b54",
  "0xdb8fc7f6d7a50ff096c5c00f5052ff66e24c6ab2",
  "0xf2870dde3e94663ce8c7aaf242ca20ce07c5d02b",
  "0x1e6a7990f1f82220277a023d71e6348c35f3cef5",
  "0xa552834773f75822343535bf1cd918f532c8f25d",
  "0x850834961e4893ce0e4f39f052bbe23f40ae7702",
  "0xc711177e94c56fa1562ab0cbefcffaef976895f8",
  "0x74922b9dc211d61e1d5e44c245fdde5acb32f57b",
  "0xa0140c9b76dfe8fe499030c6ea96bc14bac3f79b",
  "0xc3150c77428542bb64a7a2199c33b1bdbf56b386",
  "0xee8df38386aa85be55fdf1460a61d656c51a5e3b",
  "0x0f751666a5ad7c11c8cb12ed9ce78fb233400891",
  "0x694367ea528240fec8172581282ff171a6ec39aa",
  "0x9ea04b953640223dbb8098ee89c28e7a3b448858",
  "0xf7e744527cc82e24c3badc2082d0391413b321e5",
  "0x0db7b27b7a3ea8035d3f66f3ba7532221ef06abe",
  "0x907c4748caf54f2264d1618621dd250b5f4ab6be",
  "0x59828178d98df883e6c96a11498d53bb7e953b6f",
  "0x91931fabc0be8bd38d0e6784e98540a494aa815d",
  "0x9457bcb4213199714d0969fa54fa921e3a628297",
  "0xe4260df86f5261a41d19c2066f1eb2eb4f009e84",
  "0xb49d6cd5edb2f75dcb6e6a4c630680f20ffdc555",
  "0xb2863e4d58c863ee79227be969a56469d4114597",
  "0x0d81c069f1869655a335eb0fd59f24b09ae6023e",
  "0xb8c7088500a62ade8978659e92388c3cc331ad43",
  "0xe49d2030c4dfaf3a04e15d1861ee8b8b701da662",
  "0x65eebd65ff97c16df7edbc40a1b20b7cdcae101a",
  "0xf0f8505989ca1204da6bb2ea93fbabd7b2c6f30f",
  "0xbdfeb5439f5daecb78a17ff846645a8bdbbf5725",
  "0xe26d523d3c9154ac0b6c9adb8c72978264a427dc",
  "0x905baebe93b2b778ab935201c8c8f9167cc051e5",
  "0xa33e5e1ccf57c0caf78ae399061f270dd24ffcdf",
  "0x888e44eccad0dbc2afa7a7f4b1a65e14fc9cd561",
  "0xd9c4475e2dd89a9a0ad0c1e9a1e1bb28df7ba298",
  "0xd54938767f1b643d3026fe575bd05ea8a6873ace",
  "0x0dc30dd2f950ef800d14a945ebd02a0031aaf4db",
  "0xb6502179bd7fb6791ea7f5fbc89944718039e865",
  "0x18e0f9aadde970d74430cc8636a381ccfcd1f559",
  "0xdcf7be2ff93e1a7671724598b1526f3a33b1ec25",
  "0x4f0ecedcd73da0315134741d9d3830b08fe32e95",
  "0x773963bd2e09ebd064e365f1d547293beced5560",
  "0x45acee69a04ebc47a4b917489dec7ef15d21df2b",
  "0x57173e8d661dc8958b5f0bb00be8f951c1d0330f",
  "0xcac29d3938e3a8330e973e62cf0af6bcdb0b0009",
  "0x5fec3b40af6ee593e2a4a77d78374c1c8e787019",
  "0x97d9aeade7a1e2e9be6fcd85450f9dce9d08fdcf",
  "0x2cab4d881962d247218356b32abc4aa5c46ba0d2",
  "0x3aba7f1a35eed304c53afa44912c3af06b01092e",
  "0xd4403ecb088dd9f46b009aa95e43094cc8811f5d",
  "0x5994cda480e64dfb040dfe7c6397f8f643808801",
  "0xA3BF2697f94b33bFef177f32cD24D033d8804c23",
  "0x037ccb73fd73f956901bcc4851040db81b8769d2",
  "0xe67067c8234ae6a4b84ebbed7a780a7b128c36c5",
  "0x888f8aa938dbb18b28bdd111fa4a0d3b8e10c871",
  "0x1c74387742691a9913ee689edcdbef4c88b9f80e",
  "0xd10ef8798e886e50fb7232d53ccdd734c7970665",
  "0x3c382d39bc6441695b3c0eaa9d418003bd0af408",
  "0x84a9ab98a12379722cb905d685a75be6520091bc",
  "0x7d6cc2509190459d2149c0db903eebb6432fe3ac",
  "0x1d69d3cdebb5c3e2b8b73cc4d49aa145ecb7950f",
  "0x5a08b2acdccdafb2601f1ac3f5c7736eeb1f4566",
  "0xa9c538ea7cec8e2e2dd9e869a36af086f657708b",
  "0xde4b72239f6d6e2342cbc48ca8fb04e05a25f1c7",
  "0x2882898129bfb577f756350d8443265038fce7cc",
  "0xb8be5256edcd6c9da1a0f74b615a2f9403382730",
  "0x9ed5ffbc2ba5cff31ca62fd8af0f241e61a9a27f",
  "0xcc634ad49a8685d5247313fa26e961215c0bbf7f",
  "0x9631b82269c02a7616d990c0bf9ba1dc1bed1a73",
  "0xe757970b801e5b99ab24c5cd9b5152234cff3001",
  "0xd2646e9f4a767c3dc1eeb5a7383b80af97ccfc64",
  "0x641c2fef13fb417db01ef955a54904a6400f8b07",
  "0xd3defd76c42da6f6dd54b38c78cfe6a08b0aaadd",
  "0x0d9043db45efb536b95fa4495e4afdd14005875c",
  "0x3da9b84cd1ed6cecf8c6a9b81cf16054aff69cbf",
  "0x18d6ad7bab3e45126a6802e209038c329d89f480",
  "0x5B05E06988677DfB2f6d60a1aE50888944149d14"].map(x => keccak256(x))
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
      if (network.chainId !== 1) {
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

  if (network.chainId !== 1) {
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
  

  if (network.chainId !== 1) {
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