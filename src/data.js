export const categories = ["Concerts", "Sports", "Arts, Theater & Comedy", "Family"];
const hue = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
export const art = (s) => `linear-gradient(135deg, hsl(${hue(s)} 55% 16%), hsl(${(hue(s) + 50) % 360} 70% 42%))`;

export const homeImages = {
  hero: "https://s1.ticketm.net/dam/a/abe/98126acc-e812-4b18-beff-d0c28f09babe_TABLET_LANDSCAPE_LARGE_16_9.jpg?fit=cover&optimize=high&auto=webp",
  trending: {
    "Olivia Rodrigo": "https://s1.ticketm.net/dam/a/4e1/ca96dd03-8def-46ae-b6d3-9441e992c4e1_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Steve Lacy": "https://s1.ticketm.net/dam/a/736/9b65a2e3-c29e-4710-97b1-a60425077736_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Harry Styles": "https://s1.ticketm.net/dam/a/2c8/8b6d9420-66c7-4bcb-877b-0ff0238da2c8_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Doja Cat": "https://s1.ticketm.net/dam/a/b3f/bb7ae999-2e8c-4af5-97c5-73e396c67b3f_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Jonas Brothers": "https://s1.ticketm.net/dam/a/378/809a1187-1545-43be-b5ab-e2d220621378_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Dallas Cowboys": "https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    Journey: "https://s1.ticketm.net/dam/a/f9d/80e7f1f1-5db4-4a72-8cfa-7e36d66b4f9d_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    WWE: "https://s1.ticketm.net/dam/a/380/bf11c4a6-7591-40d0-babc-f357525e0380_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    RUSH: "https://s1.ticketm.net/dam/a/6bd/c02199ad-8d22-4668-8973-f400d85826bd_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "New York Rangers": "https://s1.ticketm.net/dam/a/ea0/6f2e2a07-db6a-4f14-85ed-ee9ec4970ea0_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
  },
  popular: {
    Concerts: [
      "https://s1.ticketm.net/dam/a/f3b/4e5c700e-50bb-4b8c-9673-9e4f9f2bef3b_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/531/e32ef1da-b869-442c-9357-428baa6f0531_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/4ec/1e6d3beb-bfd6-4d63-a460-63cb6125f4ec_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/6bf/4d98a9bf-2443-4152-8137-143cfa25a6bf_1853051_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/8e0/15e0d087-63ae-4e60-af6e-8f5bce1df8e0_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/a88/8ce79178-686d-4c44-b6be-935a46622a88_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/67a/76f9a65d-a143-45df-b4c1-0a175847a67a_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/2c8/8b6d9420-66c7-4bcb-877b-0ff0238da2c8_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/db5/bb0c5c84-2a51-4c64-8f4a-6371d39f1db5_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/f72/4c583e8a-6739-4fb2-9861-e73978841f72_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    ],
    Sports: [
      "https://s1.ticketm.net/dam/a/593/de5707a0-fc3b-4ad8-bdfc-4f880b488593_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/f48/2869041d-ebac-48fb-bf4f-54e797fa4f48_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/f63/ea7f23c1-c9b2-4f85-9f98-535efd9d0f63_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/455/612b13a2-822a-4cda-9920-098692170455_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/d76/b3cd0d22-8210-416e-951b-248cc76a8d76_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/608/ad100b89-b729-4822-8165-5b626c21a608_1325251_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    ],
    "Arts, Theater & Comedy": [
      "https://s1.ticketm.net/dam/a/faa/8f1da435-0ffe-48c7-96b4-6c935dfb4faa_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/d7a/6ffed4d3-61d3-44c3-8e63-cc776582fd7a_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/00f/b9aebee0-d1cb-4a5c-8e0e-0ca03fd4d00f_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/d43/8a728326-0f79-42d0-bd75-8af0a7dd6d43_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/e69/931eff58-62a7-4240-adb3-cf67a084ee69_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/b30/ccd9ebe2-c301-4487-bbe4-5bd6be744b30_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/411/3f944dde-1402-4026-9e41-80c1b5d25411_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/888/c17d98b9-4505-4332-8ec0-475dd6f41888_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/238/b3bb5076-6b92-45d8-b5a5-e5e700a50238_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/fb8/e45d0f19-ccb4-4ee3-93d3-7c3b1ff8efb8_1486581_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    ],
    Family: [
      "https://s1.ticketm.net/dam/a/057/3dc88133-61df-47f6-9665-f3a83a4dd057_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/b04/3b084064-27f7-42f3-ade1-1964f41fab04_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/fe3/376c1774-f232-4aea-a6fc-7e389a4d8fe3_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/d58/6feaee29-9eeb-42ae-8c12-241ee3faad58_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/fe3/376c1774-f232-4aea-a6fc-7e389a4d8fe3_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/f53/8c9693f6-5e8b-4c39-9758-c2b2c834af53_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/c11/66d1c452-63a9-4833-8181-3d6173fedc11_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/654/b07e2979-e523-483b-a209-ba7c1c04a654_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/0ba/19c51120-81c3-4dd5-895e-d79e286e40ba_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
      "https://s1.ticketm.net/dam/a/2c5/afcac6d1-4de4-4bb1-9cc9-e460577b72c5_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    ],
  },
  events: {
    "Empire of the Sun - Ask That God: Afterlife North American Tour": "https://s1.ticketm.net/dam/a/646/1b8fbcb9-46d0-45e4-ba5c-867795b8c646_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "WWE Monday Night RAW": "https://s1.ticketm.net/dam/a/380/bf11c4a6-7591-40d0-babc-f357525e0380_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Jonas Brothers: The Burning Up Tour All Over Again": "https://s1.ticketm.net/dam/a/378/809a1187-1545-43be-b5ab-e2d220621378_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "$uicideboy$ present Grey Day Tour 2026 w. Shoreline Mafia & more": "https://s1.ticketm.net/dam/a/ea8/fe1025a1-d118-4c3f-b53a-29810fd0bea8_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Bruno Mars - The Romantic Tour": "https://s1.ticketm.net/dam/a/386/bdd143e5-4726-49af-9523-7927682c9386_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "WQMX Bosom Buddies with Chase Matthew, McCoy Moore & Taylor Austin Dye": "https://s1.ticketm.net/dam/a/9a8/472e04b4-2cd6-4395-a352-4edcee6399a8_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "The Wizard of Oz at Sphere": "https://s1.ticketm.net/dam/a/411/3f944dde-1402-4026-9e41-80c1b5d25411_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Staind: Break The Cycle 25th Anniversary Tour": "https://s1.ticketm.net/dam/a/ee8/4b2c8989-f966-4978-93e1-c974f679aee8_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Bryson Tiller Presents: The Neo Trapsoul Tour": "https://s1.ticketm.net/dam/a/433/021fc7b3-815d-4f88-9fce-83b31a96d433_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Pinstripe Pass * 2026 NY Yankees Division Series Game 3": "https://s1.ticketm.net/dam/a/d18/a111a8b9-53e4-4497-9d2d-06b49a911d18_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Rod Wave: Don't Look Down Tour": "https://s1.ticketm.net/dam/a/f72/4c583e8a-6739-4fb2-9861-e73978841f72_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Fuerza Regida - This Is Our Dream Tour 2026": "https://s1.ticketm.net/dam/a/a5b/d253e4da-483a-4720-b191-7c4be1ceca5b_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "KAROL G - VIAJANDO POR EL MUNDO TROPITOUR": "https://s1.ticketm.net/dam/a/aae/d27e184b-9f69-4963-9027-d3b5572a4aae_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Phish": "https://s1.ticketm.net/dam/a/9ee/eb20d782-fea5-4edf-a2dc-d21cf8af59ee_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Monster Jam": "https://s1.ticketm.net/dam/a/648/bee96ceb-7d32-4b5d-bb15-6a8615501648_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Polo & Pan - Americas Tour Block Party - Ages 21+": "https://s1.ticketm.net/dam/a/339/280659c4-b88f-4d93-af34-074547fea339_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Ed Sheeran: LOOP Tour": "https://s1.ticketm.net/dam/a/7ac/222f0ea8-3b7e-4039-b40b-04a68ccde7ac_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Luke Bryan: Word On The Street Tour": "https://s1.ticketm.net/dam/a/975/02e31abe-ffb0-4ccc-9185-ae6fcc229975_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "49 Winchester (16 and Over)": "https://s1.ticketm.net/dam/a/ec8/ab9217fe-241e-48e1-99ec-ea02f8969ec8_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
    "Limp Bizkit": "https://s1.ticketm.net/dam/a/64c/eb497eb3-ff71-4ed5-a798-a14d1b16764c_SOURCE?width=720&height=405&fit=cover&optimize=high&auto=webp",
  },
  spotlights: [
    "https://s3.us-east-1.amazonaws.com/prd3318.tmp-digital-assets.prod.us-east-1.tmaws/assets/VIP_Guide_720x405.jpg?fit=cover&optimize=high&auto=webp",
    "https://s3.us-east-1.amazonaws.com/prd3318.tmp-digital-assets.prod.us-east-1.tmaws/assets/Static_Outdoor_1024x576_RollingLoud_2026_Onsale.jpg?fit=cover&optimize=high&auto=webp",
    "https://s1.ticketm.net/dam/a/d49/63d21920-3adb-4160-a213-72eb06965d49_TABLET_LANDSCAPE_LARGE_16_9.jpg?fit=cover&optimize=high&auto=webp",
    "https://s1.ticketm.net/dam/a/007/c8a22313-f355-4dbd-8a5e-994183aa3007_TABLET_LANDSCAPE_LARGE_16_9.jpg?fit=cover&optimize=high&auto=webp",
  ],
  cities: {
    "New York City": "https://prismic-images.tmol.io/ticketmaster-tm-global/aExodLNJEFaPX9H4_new-york-city-city-page.jpg?auto=webp&rect=950%2C0%2C4379%2C3620&w=500&h=413",
    "Los Angeles": "https://prismic-images.tmol.io/ticketmaster-tm-global/aExg-7NJEFaPX9Ff_los-angeles-city-page.jpg?auto=webp&rect=672%2C0%2C2863%2C2367&w=500&h=413",
    "Las Vegas": "https://prismic-images.tmol.io/ticketmaster-tm-global/aHf3QUMqNJQqH-wl_lasvegas.jpg?auto=webp&rect=99%2C0%2C826%2C683&w=500&h=413",
    Chicago: "https://prismic-images.tmol.io/ticketmaster-tm-global/aHqxSEMqNJQqIHRT_chicagoheader.jpg?auto=webp&rect=375%2C0%2C3115%2C2575&w=500&h=413",
    Atlanta: "https://prismic-images.tmol.io/ticketmaster-tm-global/aH-wIFGsbswqTJCP_atlantaheader.jpg?auto=webp&rect=374%2C0%2C3116%2C2576&w=500&h=413",
    Nashville: "https://prismic-images.tmol.io/ticketmaster-tm-global/aMMnhmGNHVfTPERY_nashvilleheader.jpg?auto=format%2Ccompress&rect=434%2C0%2C3633%2C3003&w=500&h=413",
    Denver: "https://prismic-images.tmol.io/ticketmaster-tm-global/aLscKmGNHVfTOuJy_denver.jpg?auto=format%2Ccompress&rect=634%2C0%2C2894%2C2392&w=500&h=413",
    Miami: "https://prismic-images.tmol.io/ticketmaster-tm-global/aK4vB2GNHVfTOV6j_Miami.jpg?auto=format%2Ccompress&rect=838%2C0%2C2731%2C2258&w=500&h=413",
  },
  guides: [
    "https://prismic-images.tmol.io/ticketmaster-tm-global/bb2a1549-dcf2-406f-ac0b-b504d176bf49_nba.jpeg?auto=format%2Ccompress&rect=0%2C12%2C810%2C432&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/0acea291-c558-4d31-8a72-b9a53501bff8_discover-nhl.jfif?auto=format%2Ccompress&rect=0%2C11%2C812%2C433&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/c75f5bc9-4709-45d9-8144-e708d8663543_DiscoverySports_MLS.jpg?auto=format%2Ccompress&rect=0%2C30%2C2048%2C1092&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/aJJASaTt2nPbZ3R__MLB-1024x576.jpg?auto=format%2Ccompress&rect=0%2C15%2C1024%2C546&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/f9df8212-227b-47ff-a132-47419af51c64_iStock_000011675169_broadway-1024x583.jpg?auto=format%2Ccompress&rect=0%2C18%2C1024%2C546&w=720&h=405&fit=crop",
  ],
  discover: [
    "https://prismic-images.tmol.io/ticketmaster-tm-global/1VPuYshAp4r8uNX2_IMG_5253.png?auto=format%2Ccompress&rect=0%2C0%2C2000%2C1123&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/Wvuuscx5AScCzapq_what-to-bring-to-a-concert-1024x614-2-.jpg?auto=format%2Ccompress&rect=0%2C19%2C1024%2C575&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/aYuB5t0YXLCxVqgZ_2026soccerworldcup.jpg?auto=format%2Ccompress&rect=19%2C0%2C1243%2C698&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/nq67UbwPJf_VjV25_Account-Manager-Featured-Image-1024x536.jpg?auto=format%2Ccompress&rect=35%2C0%2C954%2C536&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/Z7a8IJ7c43Q3f_lc_mlb-faqs-2025.png?auto=format%2Ccompress&rect=0%2C0%2C1024%2C575&w=720&h=405&fit=crop",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/BYlo9-FVTsHNUDOO_fall-broadway-shows.png?auto=format%2Ccompress&rect=0%2C0%2C1024%2C575&w=720&h=405&fit=crop",
  ],
  featured: [
    "https://prismic-images.tmol.io/ticketmaster-tm-global/adfwkp1ZCF7ETDNs_TMTravel_AdUnit_300x168.75_EN_9Apr2026%402x.png?auto=webp&rect=0%2C0%2C600%2C338&w=300&h=169",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/f0113677-a22e-4487-8d62-72fd2c95d97c_Discovery-Ticket-Deals-Tile.jpg?auto=webp&rect=2%2C0%2C2045%2C1152&w=300&h=169",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/aEihoLNJEFaPX2D2_VIPHomepage.jpg?auto=webp&rect=1%2C0%2C343%2C193&w=300&h=169",
    "https://prismic-images.tmol.io/ticketmaster-tm-global/aNLahZ5xUNkB1CCO_SellFeatureTitle.jpg?auto=webp&rect=1%2C0%2C719%2C405&w=300&h=169",
  ],
  social: {
    Facebook: "https://uk.tmconst.com/rc-9231efb8/images/logo/facebook.svg",
    X: "https://uk.tmconst.com/rc-9231efb8/images/logo/x.svg",
    Blog: "https://uk.tmconst.com/rc-9231efb8/images/logo/blog.svg",
    YouTube: "https://uk.tmconst.com/rc-9231efb8/images/logo/youtube.svg",
    Instagram: "https://uk.tmconst.com/rc-9231efb8/images/logo/instagram.svg",
  },
  stores: {
    "App Store": "https://uk.tmconst.com/rc-9231efb8/images/logo/apple-store/en.svg",
    "Google Play": "https://uk.tmconst.com/rc-9231efb8/images/logo/google-store/en.svg",
  },
  payments: {
    PayPal: "https://uk.tmconst.com/rc-9231efb8/images/ads/paypal_small.svg",
    Citi: "https://uk.tmconst.com/rc-9231efb8/images/logo/citi-logo.svg",
  },
};

const week = `Empire of the Sun - Ask That God: Afterlife North American Tour|Petco Park|San Diego, CA|Mon · Oct 05 · 6:25 PM|Concerts
WWE Monday Night RAW|Enterprise Center|Saint Louis, MO|Mon · Oct 05 · 6:30 PM|Sports
Jonas Brothers: The Burning Up Tour All Over Again|Kaseya Center|Miami, FL|Mon · Oct 05 · 7:30 PM|Concerts
$uicideboy$ present Grey Day Tour 2026 w. Shoreline Mafia & more|Save Mart Center|Fresno, CA|Tue · Oct 06 · 6:30 PM|Concerts
Bruno Mars - The Romantic Tour|SoFi Stadium|Inglewood, CA|Tue · Oct 06 · 7:00 PM|Concerts
WQMX Bosom Buddies with Chase Matthew, McCoy Moore & Taylor Austin Dye|Goodyear Theater|Akron, OH|Tue · Oct 06 · 7:30 PM|Concerts
The Wizard of Oz at Sphere|Sphere|Las Vegas, NV|Wed · Oct 07 · 2:00 PM|Arts, Theater & Comedy
Staind: Break The Cycle 25th Anniversary Tour|Utah First Credit Union Amphitheatre|West Valley City, UT|Wed · Oct 07 · 6:00 PM|Concerts
Bryson Tiller Presents: The Neo Trapsoul Tour|KFC Yum! Center|Louisville, KY|Wed · Oct 07 · 7:30 PM|Concerts
Pinstripe Pass * 2026 NY Yankees Division Series Game 3|Yankee Stadium|Bronx, NY|Wed · Oct 07 · 8:00 PM|Sports
Rod Wave: Don't Look Down Tour|Golden 1 Center|Sacramento, CA|Thu · Oct 08 · 8:00 PM|Concerts
Fuerza Regida - This Is Our Dream Tour 2026|Truliant Amphitheater|Charlotte, NC|Thu · Oct 08 · 8:00 PM|Concerts
KAROL G - VIAJANDO POR EL MUNDO TROPITOUR|Raymond James Stadium|Tampa, FL|Fri · Oct 09 · 7:00 PM|Concerts
Phish|VyStar Veterans Memorial Arena|Jacksonville, FL|Fri · Oct 09 · 7:00 PM|Concerts
Monster Jam|Bert Ogden Arena|Edinburg, TX|Sat · Oct 10 · 1:00 PM|Family
Polo & Pan - Americas Tour Block Party - Ages 21+|The Midway|San Francisco, CA|Sat · Oct 10 · 3:00 PM|Concerts
Ed Sheeran: LOOP Tour|Lucas Oil Stadium|Indianapolis, IN|Sat · Oct 10 · 5:30 PM|Concerts
Luke Bryan: Word On The Street Tour|White River Amphitheatre|Auburn, WA|Sat · Oct 10 · 7:00 PM|Concerts
49 Winchester (16 and Over)|Gothic Theatre|Englewood, CO|Sat · Oct 10 · 8:00 PM|Concerts
Limp Bizkit|The Truth|Nashville, TN|Sun · Oct 11 · 8:00 PM|Concerts`;
export const events = week.split("\n").map((l, i) => {
  const [title, venue, city, date, cat] = l.split("|");
  return { id: i + 1, title, venue, city, date, cat, price: 20 + ((i * 7) % 60), art: art(title), image: homeImages.events[title] };
});

const pairs = (s) => s.split(";").map((x) => x.split("|"));
export const trending = pairs("Pop|Olivia Rodrigo;R&B|Steve Lacy;Pop|Harry Styles;Hip-Hop/Rap|Doja Cat;Pop|Jonas Brothers;Football|Dallas Cowboys;Rock|Journey;Wrestling|WWE;Rock|RUSH;Hockey|New York Rangers");
export const popular = {
  Concerts: pairs("Rock|Oasis;Pop|Eagles;Urban|JAŸ-Z;Heavy Metal|Metallica;Country|Lady A;Pop|Z100's Jingle Ball;R&B|Usher Raymond & Chris Brown;Pop Rock|Harry Styles;R&B|The Spinners;Hip-Hop/Rap|Rod Wave"),
  Sports: pairs("NBA|Brooklyn Nets;NBA|Phoenix Suns;NBA|Atlanta Hawks;NBA|Golden State Warriors;NBA|Miami Heat;NBA|Charlotte Hornets;NBA|Orlando Magic;NBA|San Antonio Spurs;NBA|Portland Trail Blazers;NFL|Las Vegas Raiders"),
  "Arts, Theater & Comedy": pairs("Symphonic|Long Beach Symphony Pops;Musical|Hamilton (Touring);Musical|Hamilton (NY);Ice Shows|Disney On Ice presents Find Your Hero;Comedy|Dave Chappelle;Comedy|John Mulaney;Spectacular|The Wizard of Oz at Sphere;Comedy|Franco Escamilla;Comedy|Matt Rife;Comedy|Jo Koy"),
  Family: pairs("Ice Shows|Disney On Ice presents Find Your Hero;Alternative Rock|Coachella Valley Music and Arts Festival;Bullriding|PBR: Unleash the Beast;Other|Westminster Kennel Club Dog Show;Bullriding|PBR: Unleash the Beast;Rodeo|San Antonio Stock Show and Rodeo;Rodeo|The Hondo Rodeo Fest;Ice Shows|Disney On Ice presents Magic in the Stars;Other|Harlem Globetrotters;Ice Shows|Disney On Ice presents Spotlight Magic!"),
};
export const spotlights = pairs("Meet & Greets, Special Access and more|Browse Available VIP Packages;NOW PLAYING|ROLLING LOUD: THE MOVIE;Undefined|Disney Worlds Collide Concert Tour;Rock|Pentatonix");
export const guides = pairs("NBA Basketball Tickets|See your favorite team hit the court and get tickets for the new season.;NHL Hockey Tickets|Be there live when your favorite team hits the ice.;MLS Soccer Tickets|Catch every action-packed game this season.;MLB Baseball Tickets|Answers to your questions about the 2026 MLB season, including how to get tickets.;Broadway Tickets|Browse Broadway tickets and discover upcoming shows.");
export const discover = pairs("General Info|All In Prices Explained|Here's what you need to know about All In Prices, and why there are fees on top of the ticket price.;Ticket Tips|What to Bring to a Concert|Read our ultimate packing checklist before you go to your next show.;Sports|MLS 2026 Season FAQs|Get ready for your next match with our 2026 MLS guide.;General Info|Get the Most Out of Your Account|Learn what's possible with this guide of ticket tips and info.;Sports|A Look at the 2026 MLB Schedule and New Rules|MLB's 2026 season is bringing big schedule changes and new rules. Here's what fans need to know before first pitch.;Local Guide|6 Broadway Shows to See This Fall in NYC|Need ideas for family activities in NYC this fall? Here are the best Broadway shows and musicals to see in 2026.");
export const cities = ["New York City", "Los Angeles", "Las Vegas", "Chicago", "Atlanta", "Nashville", "Denver", "Miami"];
export const featured = ["Hotels", "Ticket Deals", "VIP Packages", "Sell on TicketBubby"];

export const presales = [
  {
    title: "STRANGERS, FRIENDS, AND LOVERS: A NIGHT OUT WITH ESTHER PEREL",
    date: "Sun · May 02 · 7:00 PM",
    city: "Boston, MA",
    venue: "MGM Music Hall at Fenway",
    presaleStart: "Tue · Oct 06 · 10:00 AM",
    image: "https://s1.ticketm.net/dam/a/b18/1551dcb7-9235-4a62-92f2-96eb8dbffb18_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    href: "https://www.ticketmaster.com/strangers-friends-and-lovers-a-night-boston-massachusetts-05-02-2027/event/01006541CDA2B318",
  },
  {
    title: "Warren Zeiders: No Brakes Tour",
    date: "Thu · Apr 22 · 7:30 PM",
    city: "Philadelphia, PA",
    venue: "The Met Presented by Highmark",
    presaleStart: "Tue · Oct 06 · 10:00 AM",
    image: "https://s1.ticketm.net/dam/a/9e0/a1e35d95-ffa9-4b54-906c-a82f0c9a49e0_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    href: "https://www.ticketmaster.com/warren-zeiders-no-brakes-tour-philadelphia-pennsylvania-04-22-2027/event/0200653DC346439C",
  },
  {
    title: "LIL WAYNE: 20 YEARS OF CARTER CLASSICS",
    date: "Sat · Dec 05 · 7:00 PM",
    city: "Savannah, GA",
    venue: "Enmarket Arena",
    presaleStart: "Wed · Oct 07 · 10:00 AM",
    image: "https://s1.ticketm.net/dam/a/feb/da63459e-8148-453b-8863-e464f25acfeb_RETINA_PORTRAIT_16_9.jpg?width=720&height=405&fit=cover&optimize=high&auto=webp",
    href: "https://www.ticketmaster.com/lil-wayne-20-years-of-carter-savannah-georgia-12-05-2026/event/0E00652A99D38572",
  },
];
export const footerCols = {
  "Helpful Links": ["Help/FAQ", "Sell", "My Account", "Contact Us", "Gift Cards", "Do Not Sell or Share My Personal Information", "Get Started on TicketBubby"],
  "Our Network": ["Venues", "Promoters", "Festivals", "Box Offices", "Universe", "NFL", "NBA", "NHL"],
  "About Us": ["TicketBubby Blog", "Ticketing Truths", "Ad Choices", "Careers", "Ticket Your Event", "Innovation"],
  "Friends & Partners": ["Payments", "Event Protection", "Cloud Hosting", "Affiliates"],
};
