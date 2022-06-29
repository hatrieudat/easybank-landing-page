const nav = ['Home', 'About', 'Contact', 'Blog', 'Careers']

const renderNavTab = () => {
    const navTab = nav.map((item, idx) => (
        `<li key=${idx} class="nav-item mt-2">
            <a href="#" class="nav-link mx-1 mt-1 custom-nav-link text-graylish-blue">
                ${item}
            </a>
        </li>`
    ))
    return navTab.join(' ')
}

const navbar =
    `
        <!-- Header Component -->
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container text-center text-md-start py-4 py-md-0">            
                <a class="navbar-brand mt-2" href="#">
                    <img src="./images/logo.svg" alt="Logo"/>
                </a>

                <button 
                    class="navbar-toggler" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto pb-2 pb-md-0">
                        ${renderNavTab()}
                    </ul>
                    <button class="btn btn-md custom-btn py-2 px-4">
                        Request Invite
                    </button>
                </div>
            </div>
        </nav>
        <!-- End Header Component -->
    `
export default navbar