// storing science jokes in object arrays, object is named after joke subject.
// factory function for jokes
const joke = (setUp, punchLine) => {
    return {
        setUp,
        punchLine
    }
}

mathJoke_1 = joke(`Why did the mathematical tree fall over?`, `Because it had no real roots!`);
mathJoke_2 = joke(`Say,Cube, do you consider yourself to be religious?`, `I believe there are higher powers than us, if thats what you mean`)
mathJoke_3 = joke(`Why is the obtuse triangle always upset?`,`Because it is never right.`);
sciencejoke_1 = joke(`Why cant you trust an atom?`, `Because they make up everything.`);
sciencejoke_2 = joke(`What did the earth say to the other planets?`, `You guys have no life.`);
sciencejoke_3 = joke(`What does a subatomic duck say?`, `Quark!`);
jokeCollection = [mathJoke_1, mathJoke_2, mathJoke_3, sciencejoke_1, sciencejoke_2, sciencejoke_3];

const randomJoke = () => {
    randomNumber = Math.floor(Math.random() * jokeCollection.length);
    return jokeCollection[randomNumber];
}

const combineRandomJokes = () => {
    joke_1 = randomJoke();
    joke_2 = randomJoke();
    if (joke_1 === joke_2) {
        return joke_1;
    } else {
        return {
            setUp: joke_1.setUp,
            punchLine: joke_2.punchLine
        }
    }
};
testJoke = combineRandomJokes();
console.log(testJoke);