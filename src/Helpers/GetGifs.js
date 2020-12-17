

export const GetGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${category}&api_key=mSwO3F8oPNamgtF1QtCCvE0vpYJZGRsh`;
    const resp =  await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title?img.title:img.slug,
            url: img.images?.downsized_medium.url
        }
    })
    return (gifs); 
}