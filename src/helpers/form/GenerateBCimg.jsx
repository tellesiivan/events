export const data = [
  {
    category: "Classic",
    imgURL:
      "https://s1.cdn.autoevolution.com/images/news/this-964-porsche-911-restomod-blends-classic-design-cues-with-modern-engineering-159842_1.jpg",
  },
  {
    category: "Euro",
    imgURL: "https://machineswithsouls.com/wp-content/uploads/2020/10/33.jpg",
  },
  {
    category: "Muscle",
    imgURL:
      "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2018/05/meets.jpg?q=50&fit=crop&w=1500&dpr=1.5",
  },
  {
    category: "JDM",
    imgURL:
      "https://i.pinimg.com/originals/2b/ab/3b/2bab3b68da1b4d2510b9add7ea1536e7.jpg",
  },
  {
    category: "Motorcycle",
    imgURL:
      "https://www.fuel-coffee-house.com/wp-content/uploads/2019/07/Fuel-Coffee-House-Bike-Meet-208.jpg",
  },
  {
    category: "Other",
    imgURL:
      "https://m1concourse.com/wp-content/uploads/2019/04/7E2A7742-e1555336421525.jpg",
  },
];

export default function GenerateBCimg(id) {
  const filteredImg = data.filter((ct) => ct.category === id);

  return filteredImg[0].imgURL;
}
