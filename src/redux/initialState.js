const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 3,
      isStarred: true,
      promo: 'sale',
      image:
        'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202040/0168/anton-solid-wood-bed-o.jpg',
      newFurniture: true,
      heart: false,
      addCompare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      image:
        'https://ii1.pepperfry.com/media/catalog/product/e/n/568x625/enri-queen-size-bed-with-storage-in-wenge-finish-by-mintwud-enri-queen-size-bed-with-storage-in-weng-x4jyej.jpg',
      newFurniture: true,
      heart: true,
      addCompare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.ulcdn.net/images/products/156488/slide/1332x726/Baltoro_High_Gloss_Hydraulic_Storage_Bed_King_1.jpg?1561442441',
      newFurniture: true,
      heart: false,
      addCompare: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202022/0016/claremont-bed-c.jpg',
      newFurniture: true,
      heart: true,
      addCompare: true,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgYNv7AYfMiJ54VMgLC6HMDyxkAZ_CWQJ7Zw&usqp=CAU',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9qLSe6I_g-Buc6-DRDUhv4PzyHGV68WunUg&usqp=CAU',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhNBk-olTMxGdqE1bM-e7GXg-DpjYfR2xxKA&usqp=CAU',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.lovefurniture.co.uk/bmz_cache/8/882eaa107b0dc95a06592c8aacf8afc1.image.550x550.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://5.imimg.com/data5/FK/AG/MY-61548813/interior-designing-services-for-restaurant-building-500x500.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://cdn.shopify.com/s/files/1/2660/5202/products/ASHAGKBD_AC_1400x.jpg?v=1598897434',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://res-1.cloudinary.com/brosa-design/image/fetch/f_auto,q_auto:good/https://s3-ap-southeast-2.amazonaws.com/brosadesign.com/products/3553/original/bed-frame-queen-solid-acacia-wood-3-brosa.png',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://assets.floydhome.com/spree/images/949/slider/001_D_Masthead.jpg?1583913317',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://cdn.shopify.com/s/files/1/2062/9195/products/84234574_542775326337150_8612521073390387200_n_685x700.jpg?v=1589294249',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://www.andsotobed.co.uk/images/products/standard/214_641.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://s7d5.scene7.com/is/image/UrbanOutfitters/30073654_020_b',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKbQfOW7F1pKXDd6C1g3tzarUbBXCTz8BQtw&usqp=CAU',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.fabindia.com/ccstore/v1/images/?source=/file/v7607727443901456531/products/10606474BD.f.01082019.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image: 'https://media.jeromes.com/content/Image/products/MGN59MBBQ_G.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image: 'https://5.imimg.com/data5/NC/HV/MY-37555897/double-bed-500x500.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEX1cP4_xH3WvpvKdtD4zXHWaZ9nSja4oKCA&usqp=CAU',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXGcqFA1uKcclFu-qDMQon36RRoT0A0oBOxQ&usqp=CAU',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.royaloakindia.com/uploads/ROYIND-royaloak-sunway-queen-bed-lifestyle94.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://www.strefasypialni.pl/userdata/public/gfx/7076/Aranzacja-lozko-smart-bed-zlozonej.jpg',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      image:
        'https://aarsunwoods.com/wp-content/uploads/2019/02/Wooden-Royal-King-Size-Bed-with-Side-Tables-UH-YT-46.jpg',
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
  compare: {
    products: [],
  },
  viewport: 'desktop',

  sales: {
    boxOne: {
      name: 'Guest room',
      category: 'Sofa',
      sale: '-20%',
      image: 'https://i.postimg.cc/pXMYyxT0/sofa.jpg',
    },
    boxTwo: {
      name: 'Office',
      category: 'Chair',
      title: 'collection',
      price: '$200.00',
      image: 'https://i.postimg.cc/9X7YWzWR/chair.jpg',
    },
    boxThree: {
      category: 'bed',
      title: 'special ',
      subtitle: 'collection',
      description: 'save up 45% of furniture',
      image: 'https://i.postimg.cc/jd6679nR/bed.jpg',
    },
  },
};

export default initialState;
