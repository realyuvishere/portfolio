function renderSoftwareWork() {
    /*
    <div class="card work-card" >
        <div class="card-header">
            <h3>The project name</h3>
        </div>
        <div class="card-body">
            <p>
                some lorem ipsum description
            </p>
            <a class="stretched-link" href="https://realyuvishere.github.io/ordin">Check it out</a>
        </div>
    </div>
    */
    const data = [
        {
            name: 'ftplogin',
            description: 'FTP CLI utility written in Python for *nix systems.',
            url: 'https://github.com/realyuvishere/ftplogin'
        },
        {
            name: 'NoteZ',
            description: 'An open source initiative for students to create, learn and use student utility tools.',
            url: './work/notez'
        },
        {
            name: 'Paradox \'22 website',
            description: 'Official website of the first ever tech fest conducted by IIT Madras BS Degree students',
            url: 'https://www.iitmparadox.org/'
        },
        {
            name: 'Coroverify',
            description: 'An open source initiative to help the users in gathering information regarding COVID-19.',
            url: 'https://github.com/realyuvishere/coroverify'
        },
        {
            name: 'Krishi Kalyan',
            description: 'A virtual marketplace which allows farmers to list their produced goods and interact with buyers directly.',
            url: 'https://krishi-kalyan.herokuapp.com/'
        },
        {
            name: 'Ordin@trix 19.0 website',
            description: 'Official website of the inter-school computer festival of Tagore International School, Vasant Vihar',
            url: './work/ordin/'
        },
        {
            name: 'The Thrive Magazine',
            description: 'Official website (old) of the first e-magazine for the LGBTQI+ community.',
            url: 'http://v1.thethrivemag.in/'
        },
        {
            name: 'Miscelleneous designs',
            description: 'A collection of all my new and old designs which I created along the way.',
            url: './work/misc/'
        },
    ]
    
    const container = document.getElementById('software-work')
    
    data.forEach(function(item) {
        const card = document.createElement('div')
        card.className = 'card work-card'
        
        const cardHeader = document.createElement('div')
        cardHeader.className = 'card-header'
        
        const itemName = document.createElement('h4')
        itemName.innerHTML = item.name
        cardHeader.appendChild(itemName)
        
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        
        const itemDescription = document.createElement('p')
        itemDescription.innerHTML = item.description
        cardBody.appendChild(itemDescription)
        
        const itemUrl = document.createElement('a')
        itemUrl.className = 'stretched-link'
        itemUrl.href = item.url
        itemUrl.innerHTML = 'View'
        cardBody.appendChild(itemUrl)
        
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        
        container.appendChild(card)
    })
}

function renderMusicWork() {
    /*
    <div class="card work-card">
        <div class="card-header">
            <h4>
                name
            </h4>
        </div>
        <div class="card-body">
            <p>
                description
            </p>
            <div class="link-container">
                <div class="me-3">
                    <i class="fab fa-youtube fa-lg"></i>
                </div>
                <div>
                    <a class="link stretched-link" href="http://link">
                        http://link
                    </a>
                </div>
            </div>
        </div>
    </div>
    */
    const data = [
        {
            name: 'Performance at The Piano Man Jazz Club, Safdurjung Enclave',
            description: 'A clip from the first gig that I played out of school. I was the bassist of the group called "The Samanvay Collective". We played a number of ballad, pop and jazz songs for the evening, along with some originals written by Samanvay Dubey.',
            urls: {
                spotify: '',
                youtube: 'https://youtu.be/2-5FUNLCKGk?si=aOn1cGn6YgMF0Tkm',
                amazon: '',
                apple: '',
            },
        },
        {
            name: 'Dead Letters EP',
            description: 'An EP written by Samanvay Dubey and produced by me that was released in the early months of 2020. Available on all major streaming platforms.',
            urls: {
                spotify: 'https://open.spotify.com/album/4KXQCoELEHRYPFAfH9UUon?si=QzgUEpvVQM2bXD3UaZDvHQ',
                youtube: 'https://youtube.com/playlist?list=PLX2tFu3Rv68huAyVSy6cQKU5hRR-ITKSE&si=aMxIvS-xurSNDziJ',
                amazon: 'https://music.amazon.in/albums/B08NZC3BXD?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=IN&ref=dm_sh_AEJOnzGqQSFn9CuBTRy7IT0AK',
                apple: 'https://music.apple.com/us/album/dead-letters-ep/1543373958',
            },
        },
        {
            name: 'Ordin@trix 19.0 Theme',
            description: 'An original theme composed for the inter-school computer festival of Tagore International School, Vasant Vihar, Ordin@trix 19.0.',
            urls: {
                spotify: '',
                youtube: 'https://youtu.be/dHl_OSylZ0Y?si=dJZvGsJuRWtcmB_o',
                amazon: '',
                apple: '',
            },
        },
    ]

    const container = document.getElementById('music-work')
    
    data.forEach(function(item) {
        const card = document.createElement('div')
        card.className = 'card work-card'
        
        const cardHeader = document.createElement('div')
        cardHeader.className = 'card-header'
        
        const itemName = document.createElement('h4')
        itemName.innerHTML = item.name
        cardHeader.appendChild(itemName)
        
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        
        const itemDescription = document.createElement('p')
        itemDescription.innerHTML = item.description
        cardBody.appendChild(itemDescription)

        
        Object.keys(item.urls).forEach(function(key) {
            if (item.urls[key] !== '') {
                
                const linkMainContainer = document.createElement('div')
                linkMainContainer.className = 'link-container'

                const linkIconContainer =  document.createElement('div')
                linkIconContainer.className = 'me-3'

                const linkIcon = document.createElement('i')
                linkIcon.className = 'fab fa-lg'

                switch (key) {
                    case 'spotify':
                        linkIcon.className += ' fa-spotify'
                        break
                    case 'youtube':
                        linkIcon.className += ' fa-youtube'
                        break
                    case 'amazon':
                        linkIcon.className += ' fa-amazon'
                        break
                    case 'apple':
                        linkIcon.className += ' fa-apple'
                        break
                }

                linkIconContainer.appendChild(linkIcon)

                const linkContainer = document.createElement('div')
                const link = document.createElement('a')
                link.className = 'link stretched-link'
                link.href = item.urls[key]
                link.innerHTML = item.urls[key]
                linkContainer.appendChild(link)

                linkMainContainer.appendChild(linkIconContainer)
                linkMainContainer.appendChild(linkContainer)
                cardBody.appendChild(linkMainContainer)
            }
        })

        
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        
        container.appendChild(card)
    })
    
}

function renderMiscWork() {
    /*
    <div class="card work-card" >
        <div class="card-header">
            <h3>The project name</h3>
        </div>
        <div class="card-body">
            <p>
                some lorem ipsum description
            </p>
            <a class="stretched-link" href="https://realyuvishere.github.io/ordin">Check it out</a>
        </div>
    </div>
    */
    const data = [
        {
            name: 'Behind the scenes #1',
            description: 'A behind the scenes video shot by me.',
            url: 'https://www.youtube.com/watch?v=YvCSeMZEyR4'
        },
        {
            name: 'Tune Mere Dil Ko Chuna - Music Video',
            description: 'Videography was done by me. Music by Samanvay Dubey. Used only a DSLR camera and a tripod.',
            url: 'https://youtu.be/_Jv8DleXenU?si=C5AmFfj7vQtJk2lY'
        },
    ]
    
    const container = document.getElementById('misc-work')
    
    data.forEach(function(item) {
        const card = document.createElement('div')
        card.className = 'card work-card'
        
        const cardHeader = document.createElement('div')
        cardHeader.className = 'card-header'
        
        const itemName = document.createElement('h4')
        itemName.innerHTML = item.name
        cardHeader.appendChild(itemName)
        
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        
        const itemDescription = document.createElement('p')
        itemDescription.innerHTML = item.description
        cardBody.appendChild(itemDescription)
        
        const itemUrl = document.createElement('a')
        itemUrl.className = 'stretched-link'
        itemUrl.href = item.url
        itemUrl.innerHTML = 'View'
        cardBody.appendChild(itemUrl)
        
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        
        container.appendChild(card)
    })
}

(function() {
    renderSoftwareWork()
    renderMusicWork()
    renderMiscWork()
})()
