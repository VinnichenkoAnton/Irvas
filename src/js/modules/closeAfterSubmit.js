const closeAfterSubmit = (form, block) => {
    const concreteForm = document.querySelector(form),
           blockToHide= document.querySelector(block);
    
    concreteForm.addEventListener('submit', ()=> setTimeout(function() {
        blockToHide.style.display = 'none';
        document.body.style.overflow = '';
    }, 2000));
    

};

export default closeAfterSubmit;