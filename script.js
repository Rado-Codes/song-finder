let term = ''

const updateTerm = () => {
    term = document.querySelector('#searchInput').value;
    
    if(!term || term === '') {
        alert('please enter a search term')
    } else {
        const url = `https://itunes.apple.com/search?&media=music&term=${term}`
        fetch(url)
        .then( (response) => response.json() )
        .then( (data) => {
            // console.log(data.results);
            const artists = data.results;
            return artists.map(result => {
                const songContainer = document.querySelector('#songs')
                const article = document.createElement('article'),
                        artist = document.createElement('p'),
                        song = document.createElement('p'),
                        img = document.createElement('img'),
                        audio = document.createElement('audio'),
                        audioSource = document.createElement('source')
                        
                        artist.innerHTML = result.artistName
                        song.innerHTML = result.trackName
                        img.src = result.artworkUrl100
                        audioSource.src = result.previewUrl
                        audio.setAttribute('controls', '')

                        article.appendChild(img)
                        article.appendChild(artist)
                        article.appendChild(song)
                        article.appendChild(audio)
                        audio.appendChild(audioSource)
                        songContainer.appendChild(article)

                        
            })
        })
        .catch(error => console.log('Request failed: ', error))
    }

}

const searchBtn = document.querySelector('button')
searchBtn.addEventListener('click', updateTerm)




