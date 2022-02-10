export const characterProfileSerializer = ( responseObject ) => {
  const { data } = responseObject;

  const profileData = data.results[0];

  return {
    id: profileData.id,
    name: profileData.name,
    image: profileData.thumbnail.path + '.' + profileData.thumbnail.extension,
    series: profileData.series,
    stories: profileData.stories,
    comics: profileData.comics,
    description: profileData.description.length > 0 ?
      profileData.description :
      'No description available for this character'
  };

};
