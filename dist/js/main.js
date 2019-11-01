(function(win, doc){

    const openEl = doc.getElementById('hamburger');
    let changeIcon = true;
    const contactButton = doc.getElementById('contactButton');
    const featuresButton = doc.getElementById('featuresButton')
    const formEl = doc.getElementById('form');
    const formInputsEl = form.querySelectorAll('input')
    const contactEl = doc.getElementById('contact');
    const FeaturesEl = doc.getElementById('features');
    const icon = doc.querySelector('.menu-toggle i');
    
    openEl.addEventListener("click", function(){
    
        let overlay = doc.querySelector('.overlay');
        let nav = doc.querySelector('nav');
    
        overlay.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");
    
        if (changeIcon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
    
            changeIcon = false;
        }
        else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            changeIcon = true;
        }
    });

    /* TOGGLE NAVBAR */

    function scrollToContact(e){

        e.preventDefault();
        if(!changeIcon)
            icon.click()
        
        contactEl.scrollIntoView({behavior: "smooth"});
    }

    function scrollToFeatures(e){

        e.preventDefault();
        if(!changeIcon)
            icon.click()
        
        FeaturesEl.scrollIntoView({behavior: "smooth"});
    }

    contactButton.addEventListener('click', scrollToContact);
    featuresButton.addEventListener('click', scrollToFeatures);

    /* SCROLL TO ELEMENT */
    
    formEl.addEventListener('submit', function(e) {

        e.preventDefault()
        
        let data = {};
        let url = 'https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register';
        
        for(let i=0; i < formInputsEl.length;i++){
            let input = form[i];
            data[input.name] = input.value;
        }
        
        let json = (JSON.stringify(data));
        
        let xml = new XMLHttpRequest();
            xml.open('POST', url);
            xml.setRequestHeader('Content-Type', 'application/json');
            xml.setRequestHeader('Authorization', 'hdk.bruno@gmail.com');
            xml.send(json);
            console.log('Enviando...')
    
            form.reset();

            xml.onreadystatechange = () => {
                
                if(xml.onreadystatechange === 4)
                    console.log('Enviado com sucesso', xml.responseText);
            }
        });

    /* JSON POST */

}(window, document))
