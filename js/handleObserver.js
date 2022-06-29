const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('visually-hidden')
            entry.target.classList.add('animated-fadeinout')
            observer.unobserve(entry.target)
        }
    });
}

const handleLazyLoadImg = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('visually-hidden')
            entry.target.classList.add('animated-fadeinright')
            const img = entry.target.querySelector('img')
            img.src = img.dataset.src
            observer.unobserve(entry.target)
        }
    })
}

const createObserver = (objectTarget, isLazyLoadImg) => {
    const option = {
        root: null,
        rootMargin: '0px',
        threehold: 0.5
    }
    if (isLazyLoadImg) {
        const observer = new IntersectionObserver(handleLazyLoadImg, option)
        objectTarget.querySelectorAll('.col').forEach((img) => {
            observer.observe(img)
        })
    } else {
        const observer = new IntersectionObserver(handleIntersect, option)
        observer.observe(objectTarget)
    }
}

export default createObserver