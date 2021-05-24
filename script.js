// storing science jokes in object arrays, object is named after joke subject.
// factory function for jokes
const jokeObjects = (joke) => {
    return {
        joke
    }
}

Helium = jokeObjects(`I was reading a book on helium. I couldnt't put it down!`);
Earthquake = jokeObjects(`One tectonic plate bumped into another and said Sorry My Fault!`);
Light = jokeObjects(`Since light travels faster than sound, people may appear bright until they speak.`);
jokes = [Helium, Earthquake, Light];
console.log(Helium);
console.log(Earthquake);
console.log(Light);
console.log(jokes);