export const products = [
  /* =========================
     REFRIGERATION GASES
  ========================== */
  {
    id: "r134a",
    name: "R134a Refrigerant Gas",
    category: "gases",
    slug: "r134a",
    shortDescription:
      "Widely used refrigerant for commercial and domestic refrigeration systems.",
    description:
      "R134a is a hydrofluorocarbon (HFC) refrigerant commonly used in air conditioning and refrigeration applications. It offers stable performance and compatibility with many systems.",
    specs: {
      type: "HFC",
      application: "Refrigeration & Air Conditioning",
      packaging: "Disposable & Refillable Cylinders",
      compliance: "ASHRAE Standard",
    },
    image: "/images/products/gases/r134a.jpg",
    featured: true,
    availability: "In Stock",
  },



  {
    id: "r404a",
    name: "R404A Refrigerant Gas",
    category: "gases",
    slug: "r404a",
    shortDescription:
      "High-performance refrigerant for low and medium temperature applications.",
    description:
      "R404A is designed for commercial refrigeration systems including supermarkets and cold storage facilities.",
    specs: {
      type: "HFC Blend",
      application: "Commercial Refrigeration",
      packaging: "Disposable Cylinders",
      compliance: "ASHRAE Standard",
    },
    image: "/images/products/gases/r404a.jpg",
    featured: false,
    availability: "On Request",
  },

  /* =========================
     SPARE PARTS
  ========================== */
  {
    id: "compressor-valve",
    name: "Compressor Service Valve",
    category: "spare-parts",
    slug: "compressor-service-valve",
    shortDescription:
      "High-quality service valve suitable for refrigeration compressors.",
    description:
      "Durable compressor service valve designed to ensure reliable sealing and long operational life in refrigeration systems.",
    specs: {
      material: "Brass",
      compatibility: "Multiple compressor brands",
      usage: "Service & Maintenance",
    },
    image: "/images/products/spare-parts/compressor-valve.jpg",
    featured: true,
    availability: "In Stock",
  },
];
