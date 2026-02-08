export const cars = {
  mercedes: {
    slug: "mercedes",
    brand: "Mercedes-Benz",
    name: "Mercedes Sprinter",
    images: Array.from({ length: 8 }, (_, i) =>
      `/assets/putar/${String(i + 1).padStart(2, "0")}.png`
    ),
  },

  toyota: {
    slug: "Toyota",
    brand: "Toyota",
    name: "Toyota Hiace",
    images:  Array.from({ length: 8 }, (_, i) =>
      `/assets/putar/${String(i + 1).padStart(2, "0")}.png`
  ),
  },
}
