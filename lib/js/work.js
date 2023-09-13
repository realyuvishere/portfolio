(function() {
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
})()

(function() {
    const data = [
        {
            name: '',
            urls: {
                spotify: '',
                youtube: '',
                amazon: '',
                apple: '',
            },
        },
    ]
    
})()