// list of quotes provided by https://gist.github.com/b1nary/ea8fff806095bcedacce
import motivation from './motivation.json';

export const handler = async (event) => {
    const randomIndex = Math.floor(Math.random() * motivation.length)
    const randomMotivation = motivation[randomIndex]
    
    return {
        statusCode: 200,
        body: JSON.stringify(randomMotivation)
    }
}
