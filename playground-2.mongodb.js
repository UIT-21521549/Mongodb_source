use('QLBH');
db.createCollection('CTHD')

db.getCollection('CTHD').insertMany([
    {
        "_id": "6483031074c9d48e5fe19908",
        "SOHD": 1001,
        "MASP": "BC01"
      },
      {
        "_id": "6483031074c9d48e5fe19909",
        "SOHD": 1001,
        "MASP": "BC02"
      },
      {
        "_id": "6483031074c9d48e5fe1990a",
        "SOHD": 1001,
        "MASP": "ST01"
      },
      {
        "_id": "6483031074c9d48e5fe1990b",
        "SOHD": 1001,
        "MASP": "ST08"
      },
      {
        "_id": "6483031074c9d48e5fe1990c",
        "SOHD": 1001,
        "MASP": "TV02"
      },
      {
        "_id": "6483031074c9d48e5fe1990d",
        "SOHD": 1002,
        "MASP": "BB01"
      },
      {
        "_id": "6483031074c9d48e5fe1990e",
        "SOHD": 1002,
        "MASP": "BB02"
      },
      {
        "_id": "6483031074c9d48e5fe1990f",
        "SOHD": 1002,
        "MASP": "BC04"
      },
      {
        "_id": "6483031074c9d48e5fe19910",
        "SOHD": 1003,
        "MASP": "BB03"
      },
      {
        "_id": "6483031074c9d48e5fe19911",
        "SOHD": 1004,
        "MASP": "TV01"
      }
    
]);

db.getCollection('CTHD').find()
db.createCollection('HOADON')

db.getCollection('HOADON').insertMany([
        {
          "_id": "648304bf74c9d48e5fe1995e",
          "SOHD": 1001,
          "NGHD": new Date("2006-07-22T17:00:00.000Z"),
          "MAKH": "KH01",
          "MANV": "NV01"
        },
        {
          "_id": "648304bf74c9d48e5fe1995f",
          "SOHD": 1002,
          "NGHD": new Date("2006-08-11T17:00:00.000Z"),
          "MAKH": "KH01",
          "MANV": "NV02"
        },
        {
          "_id": "648304bf74c9d48e5fe19960",
          "SOHD": 1003,
          "NGHD": new Date("2006-08-22T17:00:00.000Z"),
          "MAKH": "KH02",
          "MANV": "NV01"
        },
        {
          "_id": "648304bf74c9d48e5fe19961",
          "SOHD": 1004,
          "NGHD": new Date("2006-08-31T17:00:00.000Z"),
          "MAKH": "KH02",
          "MANV": "NV01"
        },
        {
          "_id": "648304bf74c9d48e5fe19962",
          "SOHD": 1005,
          "NGHD": new Date("2006-10-19T17:00:00.000Z"),
          "MAKH": "KH01",
          "MANV": "NV02"
        },
        {
          "_id": "648304bf74c9d48e5fe19963",
          "SOHD": 1006,
          "NGHD": new Date("2006-10-15T17:00:00.000Z"),
          "MAKH": "KH01",
          "MANV": "NV03"
        },
        {
          "_id": "648304bf74c9d48e5fe19964",
          "SOHD": 1007,
          "NGHD": new Date("2006-10-27T17:00:00.000Z"),
          "MAKH": "KH03",
          "MANV": "NV03"
        },
        {
          "_id": "648304bf74c9d48e5fe19965",
          "SOHD": 1008,
          "NGHD": new Date("2006-10-27T17:00:00.000Z"),
          "MAKH": "KH01",
          "MANV": "NV03"
        },
        {
          "_id": "648304bf74c9d48e5fe19966",
          "SOHD": 1009,
          "NGHD": new Date("2006-10-27T17:00:00.000Z"),
          "MAKH": "KH03",
          "MANV": "NV04"
        },
        {
          "_id": "648304bf74c9d48e5fe19967",
          "SOHD": 1010,
          "NGHD": new Date("2006-10-31T17:00:00.000Z"),
          "MAKH": "KH01",
          "MANV": "NV01"
        }
      
]);
db.getCollection('HOADON').find()
db.createCollection('KHACHHANG')
db.getCollection('KHACHHANG').insertMany(
    [
        {
          "_id": "6483044974c9d48e5fe1994f",
          "MAKH": "KH01",
          "HOTEN": "Nguyen Van A",
          "DCHI": "731 Tran Hung Dao, Q5, TpHCH",
          "SODT": 8823451,
          "NGSINH": new Date("1960-10-21T16:00:00.000Z"),
          "DOANHSO": 13060000
        },
        {
          "_id": "6483044974c9d48e5fe19950",
          "MAKH": "KH02",
          "HOTEN": "Tran Ngoc Han",
          "DCHI": "23/5 Nguyen Trai, Q5, TpHCM",
          "SODT": 908256478,
          "NGSINH": new Date("1974-04-02T16:00:00.000Z"),
          "DOANHSO": 280000
        },
        {
          "_id": "6483044974c9d48e5fe19951",
          "MAKH": "KH03",
          "HOTEN": "Tran Ngoc Linh",
          "DCHI": "45 Nguyen Canh Chan, Q1, TpHCM",
          "SODT": 938776266,
          "NGSINH": new Date("1980-06-11T17:00:00.000Z"),
          "DOANHSO": 3860000
        },
        {
          "_id": "6483044974c9d48e5fe19952",
          "MAKH": "KH04",
          "HOTEN": "Tran Minh Long",
          "DCHI": "50/34 Le Dai Hanh, Q10, TpHCM",
          "SODT": 917325476,
          "NGSINH": new Date("1965-03-08T16:00:00.000Z"),
          "DOANHSO": 250000
        },
        {
          "_id": "6483044974c9d48e5fe19953",
          "MAKH": "KH05",
          "HOTEN": "Le Nhat Minh",
          "DCHI": "34 Truong Dinh, Q3, TpHCM",
          "SODT": 8246108,
          "NGSINH": new Date("1950-03-09T16:00:00.000Z"),
          "DOANHSO": 21000
        },
        {
          "_id": "6483044974c9d48e5fe19954",
          "MAKH": "KH06",
          "HOTEN": "Le Hoai Thuong",
          "DCHI": "227 Nguyen Van Cu, Q5, TpHCM",
          "SODT": 8631738,
          "NGSINH": new Date("1981-12-30T17:00:00.000Z"),
          "DOANHSO": 915000
        },
        {
          "_id": "6483044974c9d48e5fe19955",
          "MAKH": "KH07",
          "HOTEN": "Nguyen Van Tam",
          "DCHI": "32/3 Tran Binh Trong, Q5, TpHCM",
          "SODT": 916783565,
          "NGSINH": new Date("1971-04-05T16:00:00.000Z"),
          "DOANHSO": 12500
        },
        {
          "_id": "6483044974c9d48e5fe19956",
          "MAKH": "KH08",
          "HOTEN": "Phan Thi Thanh",
          "DCHI": "45/2 An Duong Vuong, Q5, TpHCM",
          "SODT": 938435756,
          "NGSINH": new Date("1971-01-09T16:00:00.000Z"),
          "DOANHSO": 365000
        },
        {
          "_id": "6483044974c9d48e5fe19957",
          "MAKH": "KH09",
          "HOTEN": "Le Ha Vinh",
          "DCHI": "873 Le Hong Phong, Q5, TpHCM",
          "SODT": 8654763,
          "NGSINH": new Date("1979-09-02T17:00:00.000Z"),
          "DOANHSO": 70000
        },
        {
          "_id": "6483044974c9d48e5fe19958",
          "MAKH": "KH10",
          "HOTEN": "Ha Duy Lap",
          "DCHI": "34/34B Nguyen Trai, Q1, TpHCM",
          "SODT": 8768904,
          "NGSINH": new Date("1983-05-01T17:00:00.000Z"),
          "DOANHSO": 67500
        }
      ]
)

db.getCollection('KHACHHANG').find()

db.createCollection('NHANVIEN')
db.getCollection('NHANVIEN').insertMany(
    [
        {
          "_id": "6483053974c9d48e5fe19976",
          "MANV": "NV01",
          "HOTEN": "Nguyen Nhu Nhut",
          "SODT": 927345678
        },
        {
          "_id": "6483053974c9d48e5fe19977",
          "MANV": "NV02",
          "HOTEN": "Le Thi Phi Yen",
          "SODT": 987567390
        },
        {
          "_id": "6483053974c9d48e5fe19978",
          "MANV": "NV03",
          "HOTEN": "Nguyen Van B",
          "SODT": 997047382
        },
        {
          "_id": "6483053974c9d48e5fe19979",
          "MANV": "NV04",
          "HOTEN": "Ngo Thanh Tuan",
          "SODT": 913758498
        },
        {
          "_id": "6483053974c9d48e5fe1997a",
          "MANV": "NV05",
          "HOTEN": "Nguyen Thi Truc Thanh",
          "SODT": 918590387
        }
      ]
)

db.getCollection('NHANVIEN').find()

db.createCollection('SANPHAM')
db.getCollection('SANPHAM').insertMany(
    [
        {
          "_id": "648305b074c9d48e5fe1997c",
          "MASP": "BB01",
          "TENSP": "But bi",
          "DVT": "cay",
          "NUOCSX": "Viet Nam"
        },
        {
          "_id": "648305b074c9d48e5fe1997d",
          "MASP": "BB02",
          "TENSP": "But bi",
          "DVT": "cay",
          "NUOCSX": "Trung Quoc"
        },
        {
          "_id": "648305b074c9d48e5fe1997e",
          "MASP": "BB03",
          "TENSP": "But bi",
          "DVT": "hop",
          "NUOCSX": "Thai Lan"
        },
        {
          "_id": "648305b074c9d48e5fe1997f",
          "MASP": "BC01",
          "TENSP": "But chi",
          "DVT": "cay",
          "NUOCSX": "Singapore"
        },
        {
          "_id": "648305b074c9d48e5fe19980",
          "MASP": "BC02",
          "TENSP": "But chi",
          "DVT": "cay",
          "NUOCSX": " Singapore"
        },
        {
          "_id": "648305b074c9d48e5fe19981",
          "MASP": "BC03",
          "TENSP": "But chi",
          "DVT": "cay",
          "NUOCSX": " Viet Nam"
        },
        {
          "_id": "648305b074c9d48e5fe19982",
          "MASP": "BC04",
          "TENSP": "But chi",
          "DVT": "hop",
          "NUOCSX": "Viet Nam"
        },
        {
          "_id": "648305b074c9d48e5fe19983",
          "MASP": "ST01",
          "TENSP": "So tay 500 trang",
          "DVT": "quyen",
          "NUOCSX": "Trung Quoc"
        },
        {
          "_id": "648305b074c9d48e5fe19984",
          "MASP": "ST02",
          "TENSP": "So tay loai 1",
          "DVT": "quyen",
          "NUOCSX": "Viet Nam"
        },
        {
          "_id": "648305b074c9d48e5fe19985",
          "MASP": "ST03",
          "TENSP": "So tay loai 2",
          "DVT": "quyen",
          "NUOCSX": "Viet Nam"
        }
      ]
)



// tìm ra khách hàng có tên 'Nguyen Van A' 
db.getCollection('KHACHHANG').find({HOTEN:"Nguyen Van A"})


// đếm số khách hàng có doanh số lớn hơn 250000 và nhỏ hơn 1000000
db.getCollection('KHACHHANG').find({
  DOANHSO: {$gt: 250000, $lt: 1000000}
}).count()

// lấy ra thông tin của những sản phẩm do 'Viet Nam' sản xuất, đơn vị tính 'quyen', 'hop'.
//Không lấy _id, MASP
db.getCollection('SANPHAM').aggregate([
  {$match: {
    NUOCSX :'Viet Nam',
    DVT : {$in :['quyen', 'cay']}
  }}
])


// Đếm số sản phẩm sản phẩm của mỗi nước, sắp xếp theo thứ tự giảm dần SL

db.getCollection('SANPHAM').aggregate([
  {
    $group: {
      _id: "$NUOCSX",
      total: { $sum: 1 }
    }
  },
  {
    $sort: {
      total: -1  // Sort by "total" field in descending order
    }
  }
])