export const characterListSerializer = ( responseObject ) => {

  let characterList = [];
  let { data } = responseObject;
  characterList = data.results.map(( character ) => (
    {
      id: character.id,
      name: character.name,
      description: character.description.length > 0 ?
        character.description : 'No description available for this character' ,
      image: character.thumbnail.path + '.' + character.thumbnail.extension,
      amountSeries: character.series.available,
      amountComics: character.comics.available,
      amountStories: character.stories.available,
      tagList: [
        `${ character.comics.available } Comics`,
        `${ character.series.available } Series`,
        `${ character.stories.available } Stories`
      ]
    }
  ));

  return characterList;
};
