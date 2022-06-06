import axios from 'axios';

export const networkCollections = {
  "0x13881": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Test Mages",
      addrs: "0x275d553f426355c20b134D944B5b28D31CDb83DA",
    },
    {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmfLbpeVHxReWKNLaXTPcWiafi49eoAL4gRwMGuXtx2Eqe/images/14.png",
      name: "Pixel Show",
      addrs: "0xCA34404dD8Bd6537BE76F3A51B379F8949bD7973",
    },
  ],
  "0x4": [
    //Add Your Collections here
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmVGHmNdEJAmoPT2Kpp3a1NeoUB1ANh4yqr2dmrWDxwPxT/87.png",
      name: "Test Tokens1",
      addrs: "0x7328829b9aea89933e891687a2683692c92dbb4a",
    },
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmVGHmNdEJAmoPT2Kpp3a1NeoUB1ANh4yqr2dmrWDxwPxT/87.png",
      name: "Test Tokens2",
      addrs: "0x3Eb46C68C8EC47EA76d4bEAb3C71A8Ec3340F348",
    },
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmVGHmNdEJAmoPT2Kpp3a1NeoUB1ANh4yqr2dmrWDxwPxT/87.png",
      name: "Test Tokens2",
      addrs: "0xBa114427Bd05EDb60D055DBb2fAabF408C98f1f8",
    },
    {
      image:
        "https://gateway.pinata.cloud/ipfs/QmVGHmNdEJAmoPT2Kpp3a1NeoUB1ANh4yqr2dmrWDxwPxT/87.png",
      name: "Test Tokens2",
      addrs: "0xaB96f4aC271C96f161699f5283522F0829fae485",
    },
  ],
};

export const getCollections = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/collection/all`);
    // let collections = res.data.map((item) => {
    //   return {
    //     image: `${process.env.REACT_APP_SERVER_URL}${item.image}`,
    //     name: item.title,
    //     addrs: item.collectionAddr
    //   }
    // });
    return res.data;
  } catch(ex) {
    console.log(ex);
    return null;
  }
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
