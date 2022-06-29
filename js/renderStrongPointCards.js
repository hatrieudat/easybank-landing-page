const points = [
    {
        title: "Online Banking",
        detail: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        img: "icon-online.svg"
    },
    {
        title: "Simple Budgeting",
        detail: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
        img: "icon-budgeting.svg"
    },
    {
        title: "Fast Onboarding",
        detail: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        img: "icon-onboarding.svg"
    },
    {
        title: "Open API",
        detail: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        img: "icon-api.svg"
    }  
]

const renderCard = () => {
    const card = points.map(item => (
        `
        <div class="col visually-hidden"> 
            <div class="card border-0 bg-transparent py-5">
                <img data-src="./images/${item.img}" alt="${item.title}" class="card-img-top w-25"/>
                <div class="card-body ps-0">
                    <h4 class="card-title text-dark-blue fw-light py-4">${item.title}</h4>
                    <p class="card-text text-graylish-blue">${item.detail}</p>
                </div>
            </div>
        </div>
        `
    ))

    return card.join(' ')
}

const cards =     
    `
        <div class="row row-cols-1 row-cols-md-4">
            ${renderCard()}
        </div>
    `
export default cards