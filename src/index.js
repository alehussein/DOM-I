const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images["logo-img"]

const catImg = document.querySelector('#cta-img')
catImg.src = siteContent.images['cta-img']

const accentImg = document.querySelector('#middle-img')
accentImg.src = siteContent.images['accent-img']

//Footer
const footerLink = document.querySelector('footer a')
footerLink.textContent = siteContent.footer.copyright
footerLink.classList.add('bold')

//contact
const contacts = document.querySelector('section.contact')
contacts.children[0].textContent = siteContent.contact['contact-h4']
contacts.children[1].textContent = siteContent.contact['address']
contacts.children[2].textContent = siteContent.contact['phone']
contacts.children[3].textContent = siteContent.contact['email']

//main-content

const topcontent = document.querySelector('.top-content')
topcontent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topcontent.children[0].children[1].textContent = siteContent["main-content"]["features-content"]
topcontent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topcontent.children[1].children[1].textContent = siteContent["main-content"]["about-content"]

const buttoncontent = document.querySelector('.bottom-content')
buttoncontent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"]
buttoncontent.children[0].children[1].textContent = siteContent["main-content"]["services-content"]
buttoncontent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"]
buttoncontent.children[1].children[1].textContent = siteContent["main-content"]["product-content"]
buttoncontent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
buttoncontent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"]


// cta

const ctaSection = document.querySelector('.cta-text')
ctaSection.children[0].textContent = siteContent.cta.h1
ctaSection.children[1].textContent = siteContent.cta.button

//nav 

const navlinks = document.querySelectorAll('header nav a')
const navlinkstext = Object.values(siteContent.nav)
navlinks.forEach((link, idx) => {
  link.textContent = navlinkstext[idx]
  link.classList.add('italic')
})


