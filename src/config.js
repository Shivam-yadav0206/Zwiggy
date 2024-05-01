export const IMAGE_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/";
  
export const REST_MENU_API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=latitude&lng=longitude&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER";


//export const REST_MENU_API_URL = "http://localhost:3500/getRestaurants";

export const REST_LIST_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=latitude&lng=longitude&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const INSTAMART_API_URL =
  "https://www.bigbasket.com/ui-svc/v1/category-tree";
export const BB_IMAGE_URL =
  "https://www.bigbasket.com/media/uploads/banner_images/";
export const DEFAULT_IMAGE_URL =
  "https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?b=1&s=612x612&w=0&k=20&c=2zneB18UvroqNeKhG13kCT-jgMuxvHHpEcWKhNDFxBk=";

// base_url: "https://www.bigbasket.com/media/uploads/banner_images/",

export const BB_CATEGORY_LIST = [
  {
    id: 489,
    image:
      "https://media.post.rvohealth.io/wp-content/uploads/2020/08/fruits-and-vegetables-thumb.jpg",
    name: "Fruits & Vegetables",
    slug: "fruits-vegetables",
    url: "cl/fruits-vegetables",
  },
  {
    id: 367,
    name: "Bakery, Cakes & Dairy",
    image:
      "https://img1.exportersindia.com/product_images/bc-full/2020/4/7058480/bakery-products-1586773585-5369691.jpg",
    slug: "bakery-cakes-dairy",
    url: "cl/bakery-cakes-dairy",
  },
  {
    id: 351,
    name: "Beverages",
    image:
      "https://s.yimg.com/ny/api/res/1.2/ZJoMaAgvPLg1xuxK2WGkNw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/3578762beebb319f6c17eb75fedd66d6",
    slug: "beverages",
    url: "cl/beverages",
  },
  {
    id: 398,
    name: "Snacks & Branded Foods",
    image:
      "https://www.mishry.com/wp-content/uploads/2019/06/packaged-food-brands.png",
    slug: "snacks-branded-foods",
    url: "cl/snacks-branded-foods",
  },
  {
    id: 445,
    name: "Beauty & Hygiene",
    image:
      "https://www.seemattistores.com/s/614c1f7944f0ca7f37d6c0df/64ba1f12f8ed1ed069da3099/beauty-hygiene-removebg-preview-480x480.png",
    slug: "beauty-hygiene",
    url: "cl/beauty-hygiene",
  },
  {
    id: 1800,
    name: "Kitchen, Garden & Pets",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UspH3oU4Dm1qh8vFcFp-rwuNbUAbQfwCfy59VRMm9w&s",
    slug: "kitchen-garden-pets",
    url: "cl/kitchen-garden-pets",
  },
  {
    id: 494,
    name: "Eggs, Meat & Fish",
    image:
      "https://c8.alamy.com/comp/FWG6YT/group-of-important-proteins-meats-fish-dairy-eggs-white-meat-on-a-FWG6YT.jpg",
    slug: "eggs-meat-fish",
    url: "cl/eggs-meat-fish",
  },
  {
    id: 1472,
    name: "Baby Care",
    image:
      "https://himalayababycare.com/images/blog/How-to-choose-the-right-skin-care-products-for-your-baby.jpg",
    slug: "baby-care",
    url: "cl/baby-care",
  },
];

// export default restaurantList;

export const RESTAURANT_LIST = [
  [
    {
      info: {
        id: "90872",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "North Eye",
        areaName: "Sector 74",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "90872",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5800,
        },
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 6,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "6.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-19 03:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-king-north-eye-sector-74-noida-1-90872",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "28797",
        name: "Domino's Pizza",
        cloudinaryImageId: "vhbeexcj4xkytbcghko9",
        locality: "A 3rd Block",
        areaName: "Sector 110",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "28797",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3500,
        },
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-19 00:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/dominos-pizza-a-3rd-block-sector-110-noida-1-28797",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203642",
        name: "The Good Bowl",
        cloudinaryImageId: "6e04be27387483a7c00444f8e8241108",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "203642",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "7918",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-good-bowl-b-block-sector-83-noida-1-203642",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "413001",
        name: "Biryani Blues",
        cloudinaryImageId: "czrcorqk8xoyxrzflbr8",
        areaName: "Sector 110",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Hyderabadi",
          "Lucknowi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "413001",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "13813",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1,
          serviceability: "SERVICEABLE",
          slaString: "17 mins",
          lastMileTravelString: "1.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-19 04:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/biryani-blues-sector-110-noida-1-413001",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "45512",
        name: "Theobroma",
        cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
        locality: "Morna",
        areaName: "Sector 34",
        costForTwo: "₹400 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "45512",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 8300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 8300,
        },
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 8.4,
          serviceability: "SERVICEABLE",
          slaString: "32 mins",
          lastMileTravelString: "8.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "ABOVE ₹159",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/theobroma-morna-sector-34-noida-1-45512",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203628",
        name: "Oven Story Pizza - Standout Toppings",
        cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "203628",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4300,
        },
        parentId: "3534",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "24-34 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-b-block-sector-83-noida-1-203628",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203624",
        name: "Behrouz Biryani",
        cloudinaryImageId: "89fccaa76f2f760e2742b9e53d32bb69",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹500 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "203624",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4300,
        },
        parentId: "1803",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/behrouz-biryani-b-block-sector-83-noida-1-203624",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203621",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹500 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "North Indian",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "203621",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "21809",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹129",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-b-block-sector-83-noida-1-203621",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "314442",
        name: "Natural Ice Cream",
        cloudinaryImageId: "ihfhw9umlilffphilf6d",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹150 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        veg: true,
        feeDetails: {
          restaurantId: "314442",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4300,
        },
        parentId: "2093",
        avgRatingString: "4.6",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "16 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/natural-ice-cream-b-block-sector-83-noida-1-314442",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203655",
        name: "LunchBox - Meals and Thalis",
        cloudinaryImageId: "4edcfc66d91018d69894941ebb3c8d16",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹300 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Punjabi",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "203655",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "4925",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹159",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-b-block-sector-83-noida-1-203655",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203638",
        name: "Sweet Truth - Cake and Desserts",
        cloudinaryImageId: "f548f6063ffb6f64adddc26875c2aff2",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹450 for two",
        cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "203638",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "4444",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-b-block-sector-83-noida-1-203638",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "356221",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Hazipur",
        areaName: "Hajipur",
        costForTwo: "₹450 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "356221",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5500,
        },
        parentId: "547",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 4.3,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "4.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-19 05:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/kfc-hazipur-hajipur-noida-1-356221",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "254106",
        name: "McDonald's",
        cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
        locality: "Advant IT Park",
        areaName: "Sector 135",
        costForTwo: "₹400 for two",
        cuisines: ["American"],
        avgRating: 4.4,
        feeDetails: {
          restaurantId: "254106",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5900,
        },
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-advant-it-park-sector-135-noida-1-254106",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "203635",
        name: "Firangi Bake",
        cloudinaryImageId: "dgweafcptt2f42lidatg",
        locality: "B Block",
        areaName: "Sector 83",
        costForTwo: "₹500 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
          "Mexican",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "203635",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "3952",
        avgRatingString: "4.1",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/firangi-bake-b-block-sector-83-noida-1-203635",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "307485",
        name: "Mad Over Donuts",
        cloudinaryImageId: "524b746adaa25814f5d4f16745cbbc6b",
        locality: "A Block",
        areaName: "Sector 83",
        costForTwo: "₹500 for two",
        cuisines: ["Desserts", "Sweets", "Bakery"],
        avgRating: 4.1,
        veg: true,
        feeDetails: {
          restaurantId: "307485",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4100,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4100,
        },
        parentId: "611",
        avgRatingString: "4.1",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mad-over-donuts-a-block-sector-83-noida-1-307485",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "234763",
        name: "Chaayos Chai+Snacks=Relax",
        cloudinaryImageId: "cace805a6ba74137571d0f7ac92302b1",
        locality: "Advant Navis Business Park",
        areaName: "Sector 142",
        costForTwo: "₹250 for two",
        cuisines: [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Fast Food",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets",
        ],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "234763",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5200,
        },
        parentId: "281782",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-25 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-advant-navis-business-park-sector-142-noida-1-234763",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "288403",
        name: "Starbucks Coffee",
        cloudinaryImageId: "0c958153eeb436db6d515ca36e47e8a4",
        locality: "Uptown Square",
        areaName: "Advant Navis Business Park",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.5,
        feeDetails: {
          restaurantId: "288403",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 6500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 6500,
        },
        parentId: "195515",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "26 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 22:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/starbucks-coffee-uptown-square-advant-navis-business-park-noida-1-288403",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "443505",
        name: "EatFit",
        cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
        locality: "Golf Course",
        areaName: "Sector 49",
        costForTwo: "₹270 for two",
        cuisines: [
          "Chinese",
          "Healthy Food",
          "Tandoor",
          "Pizzas",
          "North Indian",
          "Thalis",
          "Biryani",
        ],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "443505",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5800,
        },
        parentId: "76139",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 6,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "6.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/eatfit-golf-course-sector-49-noida-1-443505",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "76663",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Ach Market",
        areaName: "Sector 72",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "76663",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5200,
        },
        parentId: "2",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5.7,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "5.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-ach-market-sector-72-noida-1-76663",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "177495",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "ugemttaiukyqfhxkfs9i",
        locality: "Pathways School Road",
        areaName: "Hajipur",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "177495",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4600,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4600,
        },
        parentId: "4961",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-12-18 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          logoCtx: {
            logo: "Swiggy%20One%20Lite/One_lite_vertical_logo.png",
          },
          freedelMessage: "FREE DELIVERY",
          badgeType: "BADGE_TYPE_ONE_LITE",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-pathways-school-road-hajipur-noida-1-177495",
        type: "WEBLINK",
      },
    },
  ],
];

// restaurantList = [
//   {
//     id: 1,
//     data: {
//       name: "Burger King",
//       address: "123 Main St.",
//       cuisines: ["Burgers", "Fast Food"],
//       distance: "6 Km",
//       rating: "4",
//     },
//   },
//   {
//     id: 2,
//     data: {
//       name: "Punjabi Tadka",
//       address: "123 Main St.",
//       cuisines: ["Indian", "Punjabi", "Spicy"],
//       distance: "6 Km",
//       rating: "5",
//     },
//   },
//   {
//     id: 3,
//     data: {
//       name: "Dominos",
//       address: "123 Main St.",
//       cuisines: ["Italian", "Fast Food", "Pizza"],
//       distance: "6 Km",
//       rating: "3",
//     },
//   },
//   {
//     id: 4,
//     data: {
//       name: "KFC",
//       address: "123 Main St.",
//       cuisines: ["Non Veg", "Fast Food"],
//       distance: "6 Km",
//       rating: "5",
//     },
//   },
//   {
//     id: 5,
//     data: {
//       name: "Burger King",
//       address: "123 Main St.",
//       cuisines: ["Burgers", "Fast Food"],
//       distance: "6 Km",
//       rating: "4",
//     },
//   },
//   {
//     id: 6,
//     data: {
//       name: "Punjabi Tadka",
//       address: "123 Main St.",
//       cuisines: ["Indian", "Punjabi", "Spicy"],
//       distance: "6 Km",
//       rating: "5",
//     },
//   },
//   {
//     id: 7,
//     data: {
//       name: "Dominos",
//       address: "123 Main St.",
//       cuisines: ["Italian", "Fast Food", "Pizza"],
//       distance: "6 Km",
//       rating: "3",
//     },
//   },
//   {
//     id: 8,
//     data: {
//       name: "KFC",
//       address: "123 Main St.",
//       cuisines: ["Non Veg", "Fast Food"],
//       distance: "6 Km",
//       rating: "5",
//     },
//   },
//   {
//     id: 9,
//     data: {
//       name: "Burger King",
//       address: "123 Main St.",
//       cuisines: ["Burgers", "Fast Food"],
//       distance: "6 Km",
//       rating: "4",
//     },
//   },
//   {
//     id: 10,
//     data: {
//       name: "Punjabi Tadka",
//       address: "123 Main St.",
//       cuisines: ["Indian", "Punjabi", "Spicy"],
//       distance: "6 Km",
//       rating: "5",
//     },
//   },
//   {
//     id: 11,
//     data: {
//       name: "Dominos",
//       address: "123 Main St.",
//       cuisines: ["Italian", "Fast Food", "Pizza"],
//       distance: "6 Km",
//       rating: "3",
//     },
//   },
//   {
//     id: 12,
//     data: {
//       name: "KFC",
//       address: "123 Main St.",
//       cuisines: ["Non Veg", "Fast Food"],
//       distance: "6 Km",
//       rating: "5",
//     },
//   },
// ];
//export default restaurantList;

// const [allRestaurants, setAllRestaurants] = useState([]);
// const [searchText, setSearchText] = useState("");
// const [filteredRestaurants, setFilteredRestaurants] = useState([]);
// const [loading, setLoading] = useState(true); // Add loading state

// useEffect(() => {
//   getRestaurants();
// }, []);

// async function getRestaurants() {
//   try {
//     const list = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.413859&lng=80.407504&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const restaurantList = await list.json();
//     //console.log(restaurantList?.data);
//     const restaurantsData =
//       restaurantList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants ||
//       restaurantList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants ||
//       restaurantList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
//         ?.restaurants ||
//       [];
//     //console.log(restaurantsData);
//     setFilteredRestaurants(restaurantsData);
//     setAllRestaurants(restaurantsData);
//     setLoading(false); // Set loading to false once data is fetched
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     setLoading(false); // Set loading to false in case of an error
//   }
// }
