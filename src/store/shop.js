export default {
  state: {
    shopList: [
      {
        id: 1,
        title: "Iphone 13",
        img: "https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1641503745/client/v2/images/iPhone-400-promo/iPhone-400-promo-shop-banner-1280.png",
        gallery: [
          {name: "1", img: "https://img.xfinitymobile.com/image/upload/c_fit,f_auto,q_auto,fl_lossy/v1641503745/client/v2/images/iPhone-400-promo/iPhone-400-promo-shop-banner-1280.png"},
          {name: "2", img: "http://delodom.com/wp-content/uploads/2021/10/iphone-13-pro-family-hero.png"},
          {name: "3", img: "https://hotline.ua/img/tx/300/3001195995.jpg"}
        ],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!"
      },
      {
        id: 2,
        title: "Iphone XR",
        img: "http://suremobiles.co.uk/wp-content/uploads/2021/03/iPhone-XR-Yellow.png",
        gallery: [
          {name: "1", img: "http://suremobiles.co.uk/wp-content/uploads/2021/03/iPhone-XR-Yellow.png"},
          {name: "2", img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-xr-yellow.png"},
          {name: "3", img: "https://almetyevsk.istudio-shop.ru/a/istudio/files/multifile/2353/xr_yellow_0.png"}
        ],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!"
      },
      {
        id: 3,
        title: "Iphone 6",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TrYusLNNWYWz1eV_1Q6yc2Fyjl2Cj0a81I1aJVUfmlx_Fm5AczTgj-lOu0WJgSKLAbw&usqp=CAU",
        gallery: [
          {name: "1", img: "https://www.dhresource.com/0x0/f2/albu/g5/M00/7F/48/rBVaI1ihMt2ADrItAACdnz50Qcs143.jpg"},
          {name: "2", img: "https://i1.stat01.com/1/6574/65736668/075a3e/smartfon-apple-iphone-6-64gb-zolotoj.jpg"},
          {name: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TrYusLNNWYWz1eV_1Q6yc2Fyjl2Cj0a81I1aJVUfmlx_Fm5AczTgj-lOu0WJgSKLAbw&usqp=CAU"}
        ],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!"
      },
      {
        id: 4,
        title: "Iphone 7 plus",
        img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-7-plus-black-back.png",
        gallery: [
          {name: "1", img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-7-plus-black-back.png"},
          {name: "2", img: "https://www.pngitem.com/pimgs/m/22-220431_iphone-7-plus-black-32gb-hd-png-download.png"},
          {name: "3", img: "https://telefon.kg/image/cache/catalog/Products/Phones/Apple/IPhone%207%20Plus/black/5-500x500.jpg"}
        ],
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, perspiciatis numquam aliquam ullam architecto nemo eligendi recusandae quia dolor debitis!"
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
      getShopList (state) {
          return state.shopList
      },
      getProduct: (state) => (id) => {
        return state.shopList.find(item => item.id == id)
      }
  },
};
