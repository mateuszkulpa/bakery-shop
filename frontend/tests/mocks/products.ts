import Product from "@/types/product";

export function getSingleProductMock(id: number = 1): Product {
  return {
    id: id,
    name: "Tort weselny maliowy",
    slug: "tort-weselny-maliowy",
    description:
      "Bacon ipsum dolor amet ball tip landjaeger fatback shankle pork short loin. Ribeye beef pancetta ham hock short loin, sirloin buffalo rump kevin meatloaf meatball pork belly bacon prosciutto chislic. Jerky chislic jowl tongue drumstick pancetta, pig prosciutto hamburger short loin rump. Buffalo swine andouille frankfurter prosciutto tail short loin pork belly ground round turkey brisket biltong. Chislic andouille ham hock turducken short ribs shankle doner beef ribs kevin fatback short loin venison rump pork chop. Short ribs frankfurter shank t-bone pastrami biltong.\n\nShort ribs ball tip meatball kevin landjaeger cow drumstick prosciutto. Pork chop tenderloin meatball, short loin ham turducken beef ribs frankfurter doner shankle kevin buffalo salami rump. Flank tenderloin shank tail burgdoggen sausage, ham pancetta. Corned beef short ribs pork belly, bresaola capicola chislic chicken bacon pork. Short loin rump beef ribs salami shoulder strip steak spare ribs. Meatball ham landjaeger biltong boudin flank tri-tip shank picanha. Picanha hamburger doner kevin venison landjaeger capicola beef alcatra shankle.",
    pricePerKg: 75,
    minKg: 2,
    maxKg: 5,
    featured: true,
    published_at: 1620333366196,
    created_at: "2021-05-06T20:35:43.958Z",
    updated_at: "2021-06-15T16:52:28.625Z",
    coverImage: {
      id: 3,
      name: "photo-1596567836640-3c13eb102106.jpg",
      alternativeText: "Tort weselny maliowy",
      caption: "",
      width: 1070,
      height: 695,
      formats: {},
      hash: "photo_1596567836640_3c13eb102106_31d60d1397",
      ext: ".jpg",
      mime: "image/jpeg",
      size: 63.69,
      url: "/uploads/photo_1596567836640_3c13eb102106_31d60d1397.jpg",
      previewUrl: null,
      provider: "local",
      provider_metadata: null,
      created_at: "2021-05-06T20:35:21.871Z",
      updated_at: "2021-05-06T20:35:21.882Z",
    },
    images: [
      {
        id: 4,
        name: "photo-1581344797783-b6f505d6300e.jpg",
        alternativeText: "",
        caption: "",
        width: 1050,
        height: 700,
        formats: {},
        hash: "photo_1581344797783_b6f505d6300e_171439849a",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 118.44,
        url: "/uploads/photo_1581344797783_b6f505d6300e_171439849a.jpg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        created_at: "2021-05-06T20:35:21.904Z",
        updated_at: "2021-05-06T20:35:21.915Z",
      },
      {
        id: 3,
        name: "photo-1596567836640-3c13eb102106.jpg",
        alternativeText: "",
        caption: "",
        width: 1070,
        height: 695,
        formats: {},
        hash: "photo_1596567836640_3c13eb102106_31d60d1397",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 63.69,
        url: "/uploads/photo_1596567836640_3c13eb102106_31d60d1397.jpg",
        previewUrl: null,
        provider: "local",
        provider_metadata: null,
        created_at: "2021-05-06T20:35:21.871Z",
        updated_at: "2021-05-06T20:35:21.882Z",
      },
    ],
    categories: [
      {
        id: 2,
        name: "Tort na chrzest",
        created_at: "2021-05-06T20:33:49.506Z",
        updated_at: "2021-05-06T20:35:59.555Z",
        image: {
          id: 2,
          name: "photo-1557979619-445218f326b9.jpg",
          alternativeText: "",
          caption: "",
          width: 1050,
          height: 701,
          formats: {},
          hash: "photo_1557979619_445218f326b9_4807612f6f",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 71.85,
          url: "/uploads/photo_1557979619_445218f326b9_4807612f6f.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          created_at: "2021-05-06T20:33:47.209Z",
          updated_at: "2021-05-06T20:33:47.221Z",
        },
      },
    ],
  };
}

export function getFeaturedProductsMock(): Product[] {
  return [
    getSingleProductMock(1),
    getSingleProductMock(2),
    getSingleProductMock(3),
  ];
}

export function getProductsMock(): Product[] {
  return new Array(10).fill(0).map((_, i) => getSingleProductMock(i + 1));
}
