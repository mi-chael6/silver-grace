const products = [
    {
        product_name: "Silver Grace Ring",
        product_price: 450,
        product_img: [
            {
                product_img_1: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D1.jpg?14875874539205786324",
                product_img_2: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D3.jpg?14875874539205786324",
                product_img_3: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D4.jpg?14875874539205786324",
                product_img_4: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D5.jpg?14875874539205786324",
            }
        ],
        product_description: "A timeless sterling silver ring that enhances any outfit with subtle sophistication.",
        product_ref: "R001",
        product_categories: "Rings",
        product_tags: "silver, minimalist, unisex",
        product_type: "ring"
    },
    {
        product_name: "Elegant Pearl Ring",
        product_price: 620,
        product_img: [
            {
                product_img_1: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D1.jpg?14875874539205786324",
                product_img_2: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D3.jpg?14875874539205786324",
                product_img_3: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D4.jpg?14875874539205786324",
                product_img_4: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D5.jpg?14875874539205786324",
            }
        ],
        product_description: "A stunning silver band adorned with a natural freshwater pearl centerpiece.",
        product_ref: "R002",
        product_categories: "Rings",
        product_tags: "pearl, silver, elegant",
        product_type: "ring"
    },
    {
        product_name: "Golden Halo Ring",
        product_price: 780,
        product_img: [
            {
                product_img_1: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D1.jpg?14875874539205786324",
                product_img_2: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D3.jpg?14875874539205786324",
                product_img_3: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D4.jpg?14875874539205786324",
                product_img_4: "https://cdn.shopify.com/s/files/1/1587/6949/files/Frosted_Silver_Titanium_Wedding_Rings_D5.jpg?14875874539205786324",
            }
        ],
        product_description: "A luxurious 18k gold-plated ring featuring a radiant halo design with cubic zirconia stones.",
        product_ref: "R003",
        product_categories: "Rings",
        product_tags: "gold, halo, luxury",
        product_type: "ring"
    },
    {
        product_name: "Twisted Rope Ring",
        product_price: 380,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
                product_img_2: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
                product_img_3: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
                product_img_4: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
            }
        ],
        product_description: "A delicate twisted silver rope design, perfect for stacking or everyday wear.",
        product_ref: "R004",
        product_categories: "Rings",
        product_tags: "stackable, silver, rope",
        product_type: "ring"
    },
    {
        product_name: "Diamond Accent Ring",
        product_price: 950,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
                product_img_2: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
                product_img_3: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
                product_img_4: "https://zoey.ph/cdn/shop/products/WR-021_d0a59278-f246-4dc7-8318-1bbf9f1e962b_5000x.jpg?v=1536582392",
            }
        ],
        product_description: "A sparkling diamond-accented ring that captures light beautifully for a dazzling look.",
        product_ref: "R005",
        product_categories: "Rings",
        product_tags: "diamond, sparkle, elegant",
        product_type: "ring"
    },
    {
        product_name: "Classic Silver Chain",
        product_price: 520,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
            }
        ],
        product_description: "A classic sterling silver chain that complements both casual and formal looks.",
        product_ref: "N001",
        product_categories: "Necklaces",
        product_tags: "silver, chain, unisex",
        product_type: "necklace"
    },
    {
        product_name: "Heart Pendant Necklace",
        product_price: 690,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
            }
        ],
        product_description: "A romantic heart-shaped pendant necklace crafted in sterling silver with a polished finish.",
        product_ref: "N002",
        product_categories: "Necklaces",
        product_tags: "heart, silver, romantic",
        product_type: "necklace"
    },
    {
        product_name: "Gold Bar Necklace",
        product_price: 750,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
            }
        ],
        product_description: "A minimalist gold-plated bar necklace, perfect for layering or solo wear.",
        product_ref: "N003",
        product_categories: "Necklaces",
        product_tags: "gold, minimalist, bar",
        product_type: "necklace"
    },
    {
        product_name: "Pearl Drop Necklace",
        product_price: 820,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
            }
        ],
        product_description: "Elegant pearl drop necklace featuring a single freshwater pearl on a dainty silver chain.",
        product_ref: "N004",
        product_categories: "Necklaces",
        product_tags: "pearl, elegant, silver",
        product_type: "necklace"
    },
    {
        product_name: "Layered Gold Necklace",
        product_price: 880,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC09481_5000x.jpg?v=1584857569",
            }
        ],
        product_description: "Three-layered gold necklace featuring simple geometric charms for a chic modern look.",
        product_ref: "N005",
        product_categories: "Necklaces",
        product_tags: "layered, gold, chic",
        product_type: "necklace"
    },
    {
        product_name: "Silver Bangle",
        product_price: 480,
        product_img: [
            {
                product_img_1: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_4: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
            }
        ],
        product_description: "A minimalist sterling silver bangle perfect for everyday wear.",
        product_ref: "B001",
        product_categories: "Bracelets",
        product_tags: "silver, bangle, classic",
        product_type: "bracelet"
    },
    {
        product_name: "Charm Bracelet",
        product_price: 690,
        product_img: [
            {
                product_img_1: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_4: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
            }
        ],
        product_description: "A lovely bracelet with multiple charms that represent elegance and personal style.",
        product_ref: "B002",
        product_categories: "Bracelets",
        product_tags: "charm, silver, stylish",
        product_type: "bracelet"
    },
    {
        product_name: "Gold Chain Bracelet",
        product_price: 750,
        product_img: [
            {
                product_img_1: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_4: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
            }
        ],
        product_description: "A bold gold-plated chain bracelet designed for modern minimalists.",
        product_ref: "B003",
        product_categories: "Bracelets",
        product_tags: "gold, chain, modern",
        product_type: "bracelet"
    },
    {
        product_name: "Beaded Bracelet",
        product_price: 390,
        product_img: [
            {
                product_img_1: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_4: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
            }
        ],
        product_description: "A handcrafted beaded bracelet with elegant neutral tones for casual wear.",
        product_ref: "B004",
        product_categories: "Bracelets",
        product_tags: "beaded, handmade, casual",
        product_type: "bracelet"
    },
    {
        product_name: "Rose Gold Cuff",
        product_price: 820,
        product_img: [
            {
                product_img_1: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_2: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
                product_img_4: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo2QxRoH99MkhALesqXh5HLmG_w0hnsPxF1S-Fwi6F6lWEGWOjSND7Tht1l0ynp_ZI2u0QeihFdA7mKOl-fAMU2tEG-4Af0gGERUN41QeuEwIJB6sM5SyT",
            }
        ],
        product_description: "A sleek rose gold cuff bracelet that adds instant elegance to your outfit.",
        product_ref: "B005",
        product_categories: "Bracelets",
        product_tags: "rose gold, cuff, elegant",
        product_type: "bracelet"
    },
    {
        product_name: "Crystal Drop Earrings",
        product_price: 850,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
            }
        ],
        product_description: "Elegant crystal drop earrings that add a touch of sparkle to any outfit.",
        product_ref: "E01",
        product_categories: "Jewelry",
        product_tags: "crystal, drop, elegant",
        product_type: "earrings"
    },
    {
        product_name: "Classic Hoop Earrings",
        product_price: 690,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
            }
        ],
        product_description: "Timeless gold hoop earrings designed for both casual and formal wear.",
        product_ref: "E02",
        product_categories: "Accessories",
        product_tags: "hoop, gold, minimalist",
        product_type: "earrings"
    },
    {
        product_name: "Pearl Stud Earrings",
        product_price: 580,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
            }
        ],
        product_description: "Classic pearl studs that bring sophistication and grace to your everyday look.",
        product_ref: "E03",
        product_categories: "Jewelry",
        product_tags: "pearl, stud, classic",
        product_type: "earrings"
    },
    {
        product_name: "Leaf Dangle Earrings",
        product_price: 720,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
            }
        ],
        product_description: "Nature-inspired leaf earrings crafted with intricate details and fine polish.",
        product_ref: "E04",
        product_categories: "Fashion Jewelry",
        product_tags: "leaf, dangle, nature",
        product_type: "earrings"
    },
    {
        product_name: "Heart Crystal Earrings",
        product_price: 760,
        product_img: [
            {
                product_img_1: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_2: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_3: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
                product_img_4: "https://zoey.ph/cdn/shop/products/DSC02079_2000x.jpg?v=1595489321",
            }
        ],
        product_description: "Charming heart-shaped crystal earrings perfect for special occasions.",
        product_ref: "E05",
        product_categories: "Jewelry",
        product_tags: "heart, crystal, romantic",
        product_type: "earrings"
    }
]
export default products; 