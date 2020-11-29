export const getBooksInfo = () => fetch('https://the-one-api.dev/v2/book');
export const getFilmsInfo = () => fetch('https://the-one-api.dev/v2/movie');
export const getHeroesInfo = () => fetch('https://the-one-api.dev/v2/character');

export const getOneCharacter = (id) => {
    console.log(`https://the-one-api.dev/v2/character/${id}`);
    return(
        fetch(`https://the-one-api.dev/v2/character/${id}`, {
            headers: {
                'Authorization': 'Bearer TNdpyFs14J2bWMz53NFH'
            }
        })
    )
}

