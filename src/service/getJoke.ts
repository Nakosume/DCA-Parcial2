export async function getJoke(){
    try {
        const joke = await fetch('https://api.chucknorris.io/jokes/random?category={category}').then(res => res.json());
        console.log(joke);
        
    } catch (error) {
        console.error(error);
    }
}