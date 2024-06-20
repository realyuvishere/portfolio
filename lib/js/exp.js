(function () {
    const data = [
        {
            name: 'FOSSIT',
            title: 'Founder',
            tenure: 'Nov 2022 - Present',
            details: ''
        },
        {
            name: 'Symatross Gaming',
            title: 'Business Advisor',
            tenure: 'Jan 2022 - Mar 2023',
            details: ''
        },
        {
            name: 'SEMwell Healthcare Solutions',
            title: 'Full Stack Developer',
            tenure: 'Dec 2022 - Feb 2023',
            details: ''
        },
        {
            name: 'digital outcomes',
            title: 'Full Stack Developer',
            tenure: 'Jan 2022 - April 2022',
            details: ''
        },
        {
            name: 'Ownos Studios',
            title: 'Chief Business Officer',
            tenure: 'Nov 2020 - Dec 2021',
            details: ''
        },
        {
            name: 'Ownos Technologies',
            title: 'Chief Technical Officer',
            tenure: 'May 2021 - Dec 2021',
            details: ''
        },
        {
            name: 'Nitrownos',
            title: 'Member of the Board of Advisors',
            tenure: 'April 2021 - Dec 2021',
            details: ''
        },
        {
            name: 'Masko Digital Pvt. Ltd.',
            title: 'Chief Product Officer',
            tenure: 'May 2020 - Aug 2021',
            details: ''
        },
        {
            name: 'Climber Knowledge and Careers Pvt. Ltd.',
            title: 'Sales & Marketing Intern',
            tenure: 'May 2020 - Jun 2020',
            details: ''
        },
        {
            name: 'Freelance Developer',
            title: 'I am a freelancer, what possibly could be the title anyway',
            tenure: 'Feb 2018 - Forever',
            details: ''
        },
    ]
    
    const container = document.getElementById('exp-cards')
    
    data.forEach(function(item) {
        const card = document.createElement('div')
        card.className = 'exp-card'
        
        const cardHeader = document.createElement('div')
        cardHeader.className = 'card-header'
        
        const itemName = document.createElement('h4')
        itemName.innerHTML = item.name
        cardHeader.appendChild(itemName)
        
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        
        const itemDesignation = document.createElement('div')
        itemDesignation.innerHTML = item.title
        cardBody.appendChild(itemDesignation)
        
        const itemTenure = document.createElement('div')
        itemTenure.innerHTML = item.tenure
        cardBody.appendChild(itemTenure)
        
        const btnContainer = document.createElement('div')
        btnContainer.className = 'd-grid gap-2 col-8 mx-auto mt-3'
        
        const itemBtn = document.createElement('a')
        itemBtn.className = 'btn btn-dark stretched-link'
//        itemUrl.href = item.url
        itemBtn.innerHTML = 'Know more'
        btnContainer.appendChild(itemBtn)
        
        
        cardBody.appendChild(btnContainer)
        
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        
        container.appendChild(card)
    })
})()