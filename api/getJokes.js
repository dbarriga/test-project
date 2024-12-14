export const getJokes = async () => {
  const url = `https://official-joke-api.appspot.com/jokes/random/250`;
  try {
    const data = await fetch(url);
    const json = await data.json();
    return json.map(joke => {
      return {
        ...joke,
        rating: Math.ceil(Math.random() * 5)
      }
    })
  } catch {

  }
}

export const removeJokeById = (jokeId, jokes) => {
  jokes.splice(jokes.findIndex(function(joke){
    return joke.id === jokeId;
}), 1);
  return jokes;
}