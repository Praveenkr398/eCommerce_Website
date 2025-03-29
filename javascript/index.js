// Header Section

const navOpen = document.querySelector('.mobile-open-btn')
const navClose = document.querySelector('.mobile-close-btn')
const primaryNavigation = document.getElementById('primary-navigation')

console.log('running')
navOpen.addEventListener('click',()=>{
    const visibility = primaryNavigation.getAttribute('data-visible')
    if(visibility === 'false'){
        primaryNavigation.setAttribute('data-visible', true)
        navClose.setAttribute('data-visible', true)
    }else{
        primaryNavigation.setAttribute('data-visible',false)
        navClose.getAttribute('data-visible',false)
    }
})

navClose.addEventListener('click',()=>{
    console.log('running')
    const visibility = primaryNavigation.getAttribute('data-visible')
    if(visibility === 'true'){ 
        primaryNavigation.setAttribute('data-visible', false)
        navClose.setAttribute('data-visible', false)
    }
})
