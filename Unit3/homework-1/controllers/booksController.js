export const getAllBooks = (request, response) => {
  return response.send([
    "The Stand",
    "The Shining",
    "Misery",
    "Salems Lot",
    "IT",
  ]);
};
