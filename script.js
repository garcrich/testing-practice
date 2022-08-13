const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecacts.com'
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

module.exports = googleSearch;