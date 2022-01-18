class NormalUserController {
  user(req, res) {
    res.render("normal-user", {
      sideIndex: 0,
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
    });
  }

  history(req, res) {
    res.render("normal-user", {
      sideIndex: 1,
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
    });
  }

  necessities(req, res) {
    res.render("normal-user", {
      sideIndex: 2,
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
          id: "1232323sd",
          name: "Combo abc",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "the Combo 1",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "Abc Combo 1",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "No Combo 1",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "Combo 1",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "Haha Combo 1",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "Combo 2",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "UU Haha Combo 1",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
        {
          id: "1232323sd",
          name: "BSL Combo 2",
          image: "https://en.pimg.jp/066/591/867/1/66591867.jpg",
          price: 50000,
          count: 4,
          date: 15,
        },
      ],
    });
  }

  payment(req, res) {
    res.render("normal-user", {
      sideIndex: 3,
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
      payment: {
        id: "012345678",
        surplus: 500000,
        debit: 10000,
        connect: {
          id: "545214545",
          name: "My Name",
        },

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
    });
  }
}

module.exports = new NormalUserController();
