

export const getOneCharacter = (id) => {
    return(
        fetch(`https://the-one-api.dev/v2/character/${id}`, {
            headers: {
                'Authorization': 'Bearer TNdpyFs14J2bWMz53NFH'
            }
        })
    )
}

