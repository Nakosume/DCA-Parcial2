export async function getCatg() {
    try{
        const catg = fetch('https://api.chucknorris.io/jokes/categories').then(res=>res.json())
        console.log(catg)
        return catg;
    }catch(error){
        console.error('error')
    }
}

export async function getJoke(cate:string){
    try {
        const joke = await fetch('https://api.chucknorris.io/jokes/random?category='+cate).then(res => res.json());
        console.log(joke.value);
        return joke.value;
        
    } catch (error) {
        console.error(error);
    }
}