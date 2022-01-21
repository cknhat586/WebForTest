let data = {
  info: {
    name: "My Name",
    status: { class: "danger", name: "F0" },
  },
  noti: [
    {
      title: "Payment",
      msg: "Unpaid debt: 100.000",
    },
  ],
  profile: {
    date_birth: "01/01/2001",
    address: "Q1, HCM",
    id: "123456789",
    phone: "0122334456",
    email: "abc@email.com",
  },
  history: [
    {
      id: "3nasd3",
      manager: "admin",
      date: "02/04/2021",
      description: "Change status from f0 to safe",
    },
    {
      id: "sdhs23f",
      manager: "admin",
      date: "19/03/2021",
      description: "Change location from district 5 to district 10",
    },
    {
      id: "je932js",
      manager: "admin",
      date: "06/03/2021",
      description: "Change location from district 4 to district 5",
    },
    {
      id: "236s3",
      manager: "admin",
      date: "03/03/2021",
      description: "Change status from f1 to f0",
    },
    {
      id: "123ds3",
      manager: "admin",
      date: "02/03/2021",
      description: "Create user",
    },
  ],
  combo: [
    {
      id: "1232323sd",
      name: "Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "ds34sadsdsd",
      name: "Combo abc",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "656rfws343",
      name: "the Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "2342refr34",
      name: "Abc Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "76fr4fvs",
      name: "No Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "mjrty56t23",
      name: "Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "1edasd34s",
      name: "Haha Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "452qedwsd34",
      name: "Combo 2",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "acdx3wq232",
      name: "UU Haha Combo 1",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
    {
      id: "32qr3ra23",
      name: "BSL Combo 2",
      image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
      price: 50000,
      count: 4,
      date: 15,
    },
  ],
  product: {
    id: "asdasdas2323",
    name: "The combo",
    price: 227000,
    image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
    list: [
      {
        id: "2121344s",
        name: "Mi goi",
        number: 5,
        price: 3000,
        min: 5,
        max: 20,
      },
      {
        id: "sdf343sd",
        name: "Trung ga",
        number: 3,
        price: 4000,
        min: 0,
        max: 10,
      },
      {
        id: "432323dsa2",
        name: "Xuc xich xong khoi",
        number: 10,
        price: 6000,
        min: 0,
        max: 20,
      },
      {
        id: "das23435",
        name: "Chao dinh duong",
        number: 5,
        price: 4000,
        min: 0,
        max: 20,
      },
      {
        id: "1232dasdsd",
        name: "Bia tiger",
        number: 10,
        price: 12000,
        min: 5,
        max: 50,
      },
    ],
  },
  payment: {
    id: "012345678",
    surplus: 500000,
    debit: 10000,
    // connect: {
    //   id: "545214545",
    //   name: "My Name",
    // },

    history: [
      {
        id: "sdsh233",
        date: "06/03/2021",
        description: "Pay off the debt",
        change: "-800.000",
      },
      {
        id: "sdsh233",
        date: "05/03/2021",
        description: "Pay off the debt",
        change: "-500.000",
      },
      {
        id: "sdsh233",
        date: "04/03/2021",
        description: "Pay off the debt",
        change: "-200.000",
      },
      {
        id: "sdsh233",
        date: "03/03/2021",
        description: "Recharge",
        change: "+10.000.000",
      },
    ],
  },
};
class NormalUserController {
  user(req, res) {
    res.render("normal-user", {
      sideIndex: 0,
      info: data.info,
      noti: data.noti,
      profile: data.profile,
    });
  }

  history(req, res) {
    res.render("normal-user", {
      sideIndex: 1,
      info: data.info,
      noti: data.noti,
      history: data.history,
    });
  }

  necessities(req, res) {
    res.render("normal-user", {
      sideIndex: 2,
      info: data.info,
      noti: data.noti,
      combo: data.combo,
      history: new Array(11).fill({ ...data.product, list: data.product.list }),
    });
  }

  payment(req, res) {
    res.render("normal-user", {
      sideIndex: 3,
      info: data.info,
      noti: data.noti,
      payment: data.payment,
    });
  }

  combo(req, res) {
    let _product = data.combo.find((item) => item.id == req.query.id);

    res.render("normal-user", {
      sideIndex: 2,
      info: data.info,
      noti: data.noti,
      product: { ..._product, list: data.product.list },
    });
  }

  buyCombo(req, res) {
    let _combo = data.combo.find((item) => item.id == req.body.id);

    let product = {
      ..._combo,
      list: data.product.list.map((item) => {
        return { ...item, number: parseInt(req.body[item.id]), disable: true };
      }),
    };

    let sum = product.list.reduce((total, item) => {
      return total + item.price * item.number;
    }, 0);

    res.render("normal-user", {
      sideIndex: 2,
      info: data.info,
      noti: data.noti,
      product: { ...product, price: sum },
      success: true,
    });
  }
}

module.exports = new NormalUserController();
