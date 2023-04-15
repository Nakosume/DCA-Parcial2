export async function getCatg() {
    try{
        const catg = fetch('https://api.chucknorris.io/jokes/categories').then(res=>res.json())
        console.log(catg)
        return catg;
    }catch(error){
        console.error('error')
    }
}