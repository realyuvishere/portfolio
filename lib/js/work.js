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
            name: 'r-cipher',
            description: 'CLI utility / game written in Python for *nix systems for encrypting / decrypting a string using the r-cipher developed by me.',
            url: 'https://github.com/realyuvishere/r-cipher',
            github: ''
        },
        {
            name: 'mathgames',
            description: 'CLI utility / game written in Python for *nix systems to practice basic math concepts for getting better at calculations and reasoning.',
            url: 'https://github.com/realyuvishere/mathgames',
            github: ''
        },
        {
            name: 'gopuram',
            description: 'CLI utility / game written in Python for *nix systems to create an ASCII gopuram of a given height.',
            url: 'https://github.com/realyuvishere/mathgames',
            github: ''
        },
        {
            name: 'Gunsmith Simulator VR Mobile (prototype)',
            description: 'A prototype of a VR game where the player can assemble and disassemble guns in VR on their mobile devices using cardboard VR.',
            url: 'https://paradox24.iitmparadox.org/',
            github: ''
        },
        {
            name: 'Paradox Central App',
            description: 'Online portal to manage the events and activities of Paradox, the annual fest conducted by IIT Madras BS Degree students',
            url: 'https://paradox24.iitmparadox.org/',
            github: ''
        },
        {
            name: 'Paradox \'24 website',
            description: 'Official website of the annual fest conducted by IIT Madras BS Degree students',
            url: 'https://paradox24.iitmparadox.org/',
            github: ''
        },
        {
            name: 'ftplogin',
            description: 'FTP CLI utility written in Python for *nix systems.',
            url: 'https://github.com/realyuvishere/ftplogin',
            github: ''
        },
        {
            name: 'Paradox \'22 website',
            description: 'Official website of the first ever tech fest conducted by IIT Madras BS Degree students',
            url: 'https://paradox22.iitmparadox.org/',
            github: ''
        },
        {
            name: 'Coroverify',
            description: 'An open source initiative to help the users in gathering information regarding COVID-19.',
            url: '',
            github: 'https://github.com/realyuvishere/coroverify'
        },
        {
            name: 'Krishi Kalyan',
            description: 'A virtual marketplace which allows farmers to list their produced goods and interact with buyers directly.',
            url: '',
            github: ''
        },
        {
            name: 'Ordin@trix 19.0 website',
            description: 'Official website of the inter-school computer festival of Tagore International School, Vasant Vihar',
            url: './work/ordin/',
            github: ''
        },
        {
            name: 'The Thrive Magazine',
            description: 'Official website (old) of the first e-magazine for the LGBTQI+ community.',
            url: 'http://v1.thethrivemag.in/',
            github: ''
        },
        {
            name: 'Project Drishti',
            description: 'Official website (old) of a digitisation initiative to enable the visually impaired students to have enriching classroom experiences.',
            url: 'https://realyuvishere.github.io/tis2',
            github: ''
        },
        {
            name: 'Miscelleneous designs',
            description: 'A collection of all my new and old designs which I created along the way.',
            url: './work/misc/',
            github: ''
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

        if (item.url !== '') {
            const itemUrl = document.createElement('a')
            const itemUrlIcon = document.createElement('i')
            // itemUrl.className = 'stretched-link'
            itemUrlIcon.className = 'fas fa-link'
            itemUrl.appendChild(itemUrlIcon)
            itemUrl.href = item.url
            itemUrl.appendChild(document.createTextNode(' View'))

            cardBody.appendChild(itemUrl)
        }

        if (item.github !== '') {
            const itemGithubUrl = document.createElement('a')
            const itemGithubUrlIcon = document.createElement('i')
            // itemGithubUrl.className = 'stretched-link'
            itemGithubUrlIcon.className = 'fab fa-github'
            itemGithubUrl.appendChild(itemGithubUrlIcon)
            itemGithubUrl.href = item.github
            itemGithubUrl.appendChild(document.createTextNode(' GitHub'))
            cardBody.appendChild(itemGithubUrl)
        }
        
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
