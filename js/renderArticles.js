const arrArticles = [
    {
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        detail: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
        img: "image-currency.jpg"
    },
    {
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        detail: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each months...",
        img: "image-restaurant.jpg"
    },
    {
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        detail: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you...",
        img: "image-plane.jpg"
    },
    {
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        detail: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...",
        img: "image-confetti.jpg"
    }
]

const renderArticles = () => {
    const articles = arrArticles.map(item => (
        `
        <div class="col visually-hidden">
            <div class="card border-0 bg-transparent py-5 h-100">
                <img data-src="./images/${item.img}" alt="${item.title}" class="card-img-top rounded"/>
                <div class="card-body px-4">
                    <div class="text-graylish-blue pt-2 pb-1"><small>By ${item.author}</small></div>
                    <h6 class="card-title text-dark-blue fw-light py-1">${item.title}</h6>
                    <p class="card-text text-graylish-blue">${item.detail}</p>
                </div>
            </div>
        </div>
        `
    ))

    return articles.join(' ')
}

const articles =     
    `
        <div class="row row-cols-1 row-cols-md-4">
            ${renderArticles()}
        </div>
    `

export default articles

