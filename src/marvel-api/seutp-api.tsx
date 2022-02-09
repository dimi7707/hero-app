export const urlBuilderAuth = ( pathRequest: string ) => {

  const baseMarvelAPI = 'http://gateway.marvel.com/';
  const ts = '?ts=1';
  const apiKey = '&apikey=7672b712973a538dbef8bad10a812e07';
  const hash = '&hash=0acf9cd9a34a13d68b5953cd81a142f1';

  return `${baseMarvelAPI}${pathRequest}${ts}${apiKey}${hash}`;
};
