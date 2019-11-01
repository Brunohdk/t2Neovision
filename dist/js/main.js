(function(win, doc){

    const openEl = doc.getElementById('hamburger');
    let changeIcon = true;
    const contactButton = doc.getElementById('contactButton');
    const featuresButton = doc.getElementById('featuresButton')
    const formEl = doc.getElementById('form');
    const formInputsEl = form.querySelectorAll('input')
    const contactEl = doc.getElementById('contact');
    const FeaturesEl = doc.getElementById('features');
    
    openEl.addEventListener("click", function(){
    
        let overlay = doc.querySelector('.overlay');
        let nav = doc.querySelector('nav');
        let icon = doc.querySelector('.menu-toggle i');
    
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

    function ScrollToContact(){

        contactEl.scrollIntoView()
        console.log(contactEl)
    }
    contactButton.addEventListener('click', ScrollToContact);

    featuresButton.addEventListener('click', function(){
        FeaturesEl.scrollIntoView();
    })
    
    
    formEl.addEventListener('submit', function(e) {

        e.preventDefault()
        
        let data = {};
        for(let i=0; i < formInputsEl.length;i++){
            let input = form[i];
            data[input.name] = input.value;
        }

        console.log(data)
        console.log(JSON.stringify(data))

        
        
                /* 'Content-Type': 'application/json',
                'Authorization': 'hdk.bruno@gmail.com' */
            });

}(window, document))
            /* e.preventDefault();
    
            let toJson = {
                Name: inputName.value,
                Email: inputEmail.value
            }
            let json = JSON.stringify(toJson);
            
            let xml = new XMLHttpRequest();
            xml.open('POST', 'http://localhost:3000/user');
            xml.setRequestHeader('Content-Type', 'application/json');
            xml.setRequestHeader('Authorization', 'hdk.bruno@gmail.com');
            xml.send(json);
            console.log('Enviando...')
    
            form.reset();
            xml.onreadystatechange = () => {
                
                if(xml.onreadystatechange === 4)
                    console.log('Enviado com sucesso', xml.responseText);
            } */