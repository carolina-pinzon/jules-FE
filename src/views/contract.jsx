export const saleAuctionForm = {
  "contractName": "Fight",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "generateRandom",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "kittyId",
          "type": "uint256"
        }
      ],
      "name": "seeCurrentState",
      "outputs": [
        {
          "name": "kittyHP",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "kittyId",
          "type": "uint256"
        }
      ],
      "name": "startFight",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6101a38061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302e4af011461005c5780630e426ffe1461008557806331d03820146100bc575b600080fd5b341561006757600080fd5b61006f6100df565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100a660048080359060200190919050506100e8565b6040518082815260200191505060405180910390f35b34156100c757600080fd5b6100dd600480803590602001909190505061013c565b005b6000600a905090565b600080600090506103e891505b600082118015610118575043600080858152602001908152602001600020548201105b15610136576101256100df565b8203915080806001019150506100f5565b50919050565b60008060008381526020019081526020016000205414151561015d57600080fd5b4360008083815260200190815260200160002081905550505600a165627a7a723058207a47c010ac99daaf9dd857c989150c842250d94a2bf4b46dbe37dd79e30c2b9b0029",
  "deployedBytecode": "0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806302e4af011461005c5780630e426ffe1461008557806331d03820146100bc575b600080fd5b341561006757600080fd5b61006f6100df565b6040518082815260200191505060405180910390f35b341561009057600080fd5b6100a660048080359060200190919050506100e8565b6040518082815260200191505060405180910390f35b34156100c757600080fd5b6100dd600480803590602001909190505061013c565b005b6000600a905090565b600080600090506103e891505b600082118015610118575043600080858152602001908152602001600020548201105b15610136576101256100df565b8203915080806001019150506100f5565b50919050565b60008060008381526020019081526020016000205414151561015d57600080fd5b4360008083815260200190815260200160002081905550505600a165627a7a723058207a47c010ac99daaf9dd857c989150c842250d94a2bf4b46dbe37dd79e30c2b9b0029",
  "sourceMap": "26:642:0:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "26:642:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;248:75;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;329:337;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;99:143;;;;;;;;;;;;;;;;;;;;;;;;;;248:75;288:7;314:2;307:9;;248:75;:::o;329:337::-;398:15;434:20;457:1;434:24;;478:4;468:14;;492:168;509:1;499:7;:11;:70;;;;;557:12;529:16;:25;546:7;529:25;;;;;;;;;;;;514:12;:40;:55;499:70;492:168;;;605:16;:14;:16::i;:::-;595:7;:26;585:36;;635:14;;;;;;;492:168;;;329:337;;;;:::o;99:143::-;183:1;154:16;:25;171:7;154:25;;;;;;;;;;;;:30;146:39;;;;;;;;223:12;195:16;:25;212:7;195:25;;;;;;;;;;;:40;;;;99:143;:::o",
  "source": "pragma solidity ^0.4.17;\n\ncontract Fight {\n    mapping (uint256 => uint256) kittyBlockNumber;\n\n    function startFight(uint256 kittyId) {\n        require(kittyBlockNumber[kittyId] == 0);\n        kittyBlockNumber[kittyId] = block.number;\n    }\n\n    function generateRandom() view returns (uint256) {\n        return 10;\n    }\n\n    function seeCurrentState(uint256 kittyId) view returns\n    (\n        uint256 kittyHP\n    )\n    {\n        uint256 blockCounter = 0;\n        kittyHP = 1000;\n        while (kittyHP > 0 && blockCounter + kittyBlockNumber[kittyId] < block.number) {\n            kittyHP = kittyHP - generateRandom();\n            blockCounter++;\n        }\n    }\n}\n",
  "sourcePath": "/Users/jdourlens/Documents/lol/contract/contracts/Fight.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/jdourlens/Documents/lol/contract/contracts/Fight.sol",
      "exportedSymbols": {
        "Fight": [
          75
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            75
          ],
          "name": "Fight",
          "scope": 76
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "kittyBlockNumber",
              "scope": 75,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 2,
                    "name": "ElementaryTypeName",
                    "src": "56:7:0"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 3,
                    "name": "ElementaryTypeName",
                    "src": "67:7:0"
                  }
                ],
                "id": 4,
                "name": "Mapping",
                "src": "47:28:0"
              }
            ],
            "id": 5,
            "name": "VariableDeclaration",
            "src": "47:45:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "startFight",
              "payable": false,
              "scope": 75,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "kittyId",
                      "scope": 26,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 6,
                        "name": "ElementaryTypeName",
                        "src": "119:7:0"
                      }
                    ],
                    "id": 7,
                    "name": "VariableDeclaration",
                    "src": "119:15:0"
                  }
                ],
                "id": 8,
                "name": "ParameterList",
                "src": "118:17:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 9,
                "name": "ParameterList",
                "src": "136:0:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 90,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 10,
                            "name": "Identifier",
                            "src": "146:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5,
                                      "type": "mapping(uint256 => uint256)",
                                      "value": "kittyBlockNumber"
                                    },
                                    "id": 11,
                                    "name": "Identifier",
                                    "src": "154:16:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7,
                                      "type": "uint256",
                                      "value": "kittyId"
                                    },
                                    "id": 12,
                                    "name": "Identifier",
                                    "src": "171:7:0"
                                  }
                                ],
                                "id": 13,
                                "name": "IndexAccess",
                                "src": "154:25:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 14,
                                "name": "Literal",
                                "src": "183:1:0"
                              }
                            ],
                            "id": 15,
                            "name": "BinaryOperation",
                            "src": "154:30:0"
                          }
                        ],
                        "id": 16,
                        "name": "FunctionCall",
                        "src": "146:39:0"
                      }
                    ],
                    "id": 17,
                    "name": "ExpressionStatement",
                    "src": "146:39:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5,
                                  "type": "mapping(uint256 => uint256)",
                                  "value": "kittyBlockNumber"
                                },
                                "id": 18,
                                "name": "Identifier",
                                "src": "195:16:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7,
                                  "type": "uint256",
                                  "value": "kittyId"
                                },
                                "id": 19,
                                "name": "Identifier",
                                "src": "212:7:0"
                              }
                            ],
                            "id": 20,
                            "name": "IndexAccess",
                            "src": "195:25:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "number",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 79,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 21,
                                "name": "Identifier",
                                "src": "223:5:0"
                              }
                            ],
                            "id": 22,
                            "name": "MemberAccess",
                            "src": "223:12:0"
                          }
                        ],
                        "id": 23,
                        "name": "Assignment",
                        "src": "195:40:0"
                      }
                    ],
                    "id": 24,
                    "name": "ExpressionStatement",
                    "src": "195:40:0"
                  }
                ],
                "id": 25,
                "name": "Block",
                "src": "136:106:0"
              }
            ],
            "id": 26,
            "name": "FunctionDefinition",
            "src": "99:143:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "generateRandom",
              "payable": false,
              "scope": 75,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 27,
                "name": "ParameterList",
                "src": "271:2:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 34,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 28,
                        "name": "ElementaryTypeName",
                        "src": "288:7:0"
                      }
                    ],
                    "id": 29,
                    "name": "VariableDeclaration",
                    "src": "288:7:0"
                  }
                ],
                "id": 30,
                "name": "ParameterList",
                "src": "287:9:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 30
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "3130",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 10",
                          "value": "10"
                        },
                        "id": 31,
                        "name": "Literal",
                        "src": "314:2:0"
                      }
                    ],
                    "id": 32,
                    "name": "Return",
                    "src": "307:9:0"
                  }
                ],
                "id": 33,
                "name": "Block",
                "src": "297:26:0"
              }
            ],
            "id": 34,
            "name": "FunctionDefinition",
            "src": "248:75:0"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "seeCurrentState",
              "payable": false,
              "scope": 75,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "kittyId",
                      "scope": 74,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 35,
                        "name": "ElementaryTypeName",
                        "src": "354:7:0"
                      }
                    ],
                    "id": 36,
                    "name": "VariableDeclaration",
                    "src": "354:15:0"
                  }
                ],
                "id": 37,
                "name": "ParameterList",
                "src": "353:17:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "kittyHP",
                      "scope": 74,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 38,
                        "name": "ElementaryTypeName",
                        "src": "398:7:0"
                      }
                    ],
                    "id": 39,
                    "name": "VariableDeclaration",
                    "src": "398:15:0"
                  }
                ],
                "id": 40,
                "name": "ParameterList",
                "src": "388:31:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        42
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "blockCounter",
                          "scope": 74,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 41,
                            "name": "ElementaryTypeName",
                            "src": "434:7:0"
                          }
                        ],
                        "id": 42,
                        "name": "VariableDeclaration",
                        "src": "434:20:0"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 43,
                        "name": "Literal",
                        "src": "457:1:0"
                      }
                    ],
                    "id": 44,
                    "name": "VariableDeclarationStatement",
                    "src": "434:24:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 39,
                              "type": "uint256",
                              "value": "kittyHP"
                            },
                            "id": 45,
                            "name": "Identifier",
                            "src": "468:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "31303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1000",
                              "value": "1000"
                            },
                            "id": 46,
                            "name": "Literal",
                            "src": "478:4:0"
                          }
                        ],
                        "id": 47,
                        "name": "Assignment",
                        "src": "468:14:0"
                      }
                    ],
                    "id": 48,
                    "name": "ExpressionStatement",
                    "src": "468:14:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&&",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 39,
                                  "type": "uint256",
                                  "value": "kittyHP"
                                },
                                "id": 49,
                                "name": "Identifier",
                                "src": "499:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 50,
                                "name": "Literal",
                                "src": "509:1:0"
                              }
                            ],
                            "id": 51,
                            "name": "BinaryOperation",
                            "src": "499:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "+",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "uint256",
                                      "value": "blockCounter"
                                    },
                                    "id": 52,
                                    "name": "Identifier",
                                    "src": "514:12:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5,
                                          "type": "mapping(uint256 => uint256)",
                                          "value": "kittyBlockNumber"
                                        },
                                        "id": 53,
                                        "name": "Identifier",
                                        "src": "529:16:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 36,
                                          "type": "uint256",
                                          "value": "kittyId"
                                        },
                                        "id": 54,
                                        "name": "Identifier",
                                        "src": "546:7:0"
                                      }
                                    ],
                                    "id": 55,
                                    "name": "IndexAccess",
                                    "src": "529:25:0"
                                  }
                                ],
                                "id": 56,
                                "name": "BinaryOperation",
                                "src": "514:40:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "number",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 79,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 57,
                                    "name": "Identifier",
                                    "src": "557:5:0"
                                  }
                                ],
                                "id": 58,
                                "name": "MemberAccess",
                                "src": "557:12:0"
                              }
                            ],
                            "id": 59,
                            "name": "BinaryOperation",
                            "src": "514:55:0"
                          }
                        ],
                        "id": 60,
                        "name": "BinaryOperation",
                        "src": "499:70:0"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 39,
                                      "type": "uint256",
                                      "value": "kittyHP"
                                    },
                                    "id": 61,
                                    "name": "Identifier",
                                    "src": "585:7:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 39,
                                          "type": "uint256",
                                          "value": "kittyHP"
                                        },
                                        "id": 62,
                                        "name": "Identifier",
                                        "src": "595:7:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            null
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "uint256",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                null
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 34,
                                              "type": "function () view returns (uint256)",
                                              "value": "generateRandom"
                                            },
                                            "id": 63,
                                            "name": "Identifier",
                                            "src": "605:14:0"
                                          }
                                        ],
                                        "id": 64,
                                        "name": "FunctionCall",
                                        "src": "605:16:0"
                                      }
                                    ],
                                    "id": 65,
                                    "name": "BinaryOperation",
                                    "src": "595:26:0"
                                  }
                                ],
                                "id": 66,
                                "name": "Assignment",
                                "src": "585:36:0"
                              }
                            ],
                            "id": 67,
                            "name": "ExpressionStatement",
                            "src": "585:36:0"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 42,
                                      "type": "uint256",
                                      "value": "blockCounter"
                                    },
                                    "id": 68,
                                    "name": "Identifier",
                                    "src": "635:12:0"
                                  }
                                ],
                                "id": 69,
                                "name": "UnaryOperation",
                                "src": "635:14:0"
                              }
                            ],
                            "id": 70,
                            "name": "ExpressionStatement",
                            "src": "635:14:0"
                          }
                        ],
                        "id": 71,
                        "name": "Block",
                        "src": "571:89:0"
                      }
                    ],
                    "id": 72,
                    "name": "WhileStatement",
                    "src": "492:168:0"
                  }
                ],
                "id": 73,
                "name": "Block",
                "src": "424:242:0"
              }
            ],
            "id": 74,
            "name": "FunctionDefinition",
            "src": "329:337:0"
          }
        ],
        "id": 75,
        "name": "ContractDefinition",
        "src": "26:642:0"
      }
    ],
    "id": 76,
    "name": "SourceUnit",
    "src": "0:669:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1521665469731": {
      "events": {},
      "links": {},
      "address": "0x507c903b4f0a9a6b747dd879be8286466b538c55"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-21T20:54:30.574Z"
}
