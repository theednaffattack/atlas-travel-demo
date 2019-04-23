export const HotelModel = ({ id = null, genNum }) => {
  console.log("VIEW HotelModel");
  console.log(id);
  console.log(genNum);
  return {
    id: id ? id : Math.random(),
    photos: [],
    title: "Mt. Catlin Hotel"
  };
};
