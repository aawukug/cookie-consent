// INITIALIZATION
const modal = document.getElementById('modal')

const modalCloseBtn = document.getElementById('modal-close-btn')

const modalInner = document.getElementById('modal-inner')

const consentForm = document.getElementById('consent-form')

const declineBtn = document.getElementById('decline-btn')

const modalChoiceBtns = document.getElementById('modal-choice-btns')


// SET TIMEOUT FUNCTION TO DISPLAY MODAL AFTER 0.5 SECOND
setTimeout(function(){
    modal.style.display = 'inline'
},500)


//MODAL CLOSE EVENTLISTENET TO CLOSE MODAL 
modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})


// DECLINE BTN MOUSE ENTER EVENTLISTENER TO TOGGLE CLASSLIST WHEN CURSOR HOVERS ON DECLINE BTN
declineBtn.addEventListener('mouseenter', function(){
    modalChoiceBtns.classList.toggle('modal-choice-btns-reverse')
})


// CONST FORM SUBMIT EVENTLISTENER 
consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    // CHANGING CURSOR TO WAIT WHEN USER ENTERS INFORMATION
    document.body.style.cursor = 'wait'

    // GETTING FORM DATA OBJECT
    const consentFormData = new FormData(consentForm)

    // GETTING FULLNAME INPUT FROM THE FORM DATA OBJECT
    const fullName = consentFormData.get('fullName')

    // CHANGING THE INNER HTML OF MODAL INNER AS SOON USER ENTERS DETAILS
    modalInner.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`


    // SET TIMEOUT FUNCTION TO CHANGE THE UPLOAD TEXT IN THE MODAL INNER AFTER 1.5 SECONDS
    setTimeout(function(){
        modalInner.querySelector('#upload-text').innerText = `Making the sale...`
    },1500)

    // SET TIMEOUT FUNCTION TO DISPLAY LAST MESSAGE AND USER NAME  IN MODAL INNER AFTER 3 SECONS 
    setTimeout(function(){
        modalInner.innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/idi-amin-laugh.gif">
        </div>`

    // MAKING MODAL CLOSE BTN VISIBLE FOR USER AFTER LAST MESSAGE HAS BEEN DISPLAYED
    modalCloseBtn.disabled = false


    // CHANGING CURSOR POINTER AFTER LAST MESSAGE
    document.body.style.cursor = 'default'
    },3000)
})


