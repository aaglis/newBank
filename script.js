function showDetails() {
    const items = document.querySelectorAll('.js-faq-items')
    const hideItems = document.querySelectorAll('.js-faq-items p')
    function activeClass(item, index) {
        item.classList.toggle('ativo')
        hideItems[index].classList.toggle('ativo')
    }


    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeClass(item, index)
        })
    })
}

showDetails()


function activeScroll() {

    const sectionList = document.querySelectorAll('section')
    
    function animatedScroll() {
        sectionList.forEach((item, index) => {
            const topDistance = item.getBoundingClientRect().top
            const isSectionVisible = (topDistance - (window.innerHeight * 0.6)) < 0
            if(isSectionVisible) {
                item.classList.add('ativo')
            } else {
                item.classList.remove('ativo')
            }
        })
    }   
    
    animatedScroll()
    
    window.addEventListener('scroll', animatedScroll)
}

activeScroll()