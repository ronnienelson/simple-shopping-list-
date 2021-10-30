const form=document.querySelector('form')
const commentcontainer=document.querySelector('#comments')
const input=document.querySelector('input')

//form event listener- prevents default, and captures user input
form.addEventListener('submit',(e)=>{
e.preventDefault()
const comment=form.elements.tryme.value
const naming=form.elements.user.value
addcomment(comment,naming)
})


//function in charge of adding/deleting content from the list
const addcomment = (comment,naming) =>{  
const newcomment=document.createElement('p')
const bold=document.createElement('strong')
const inside=document.querySelector('#addtolist')
bold.append(naming)
  newcomment.append(bold)
  newcomment.append(`-${comment}`)
  commentcontainer.append(newcomment)
  form.elements.tryme.value=''
  form.elements.user.value=''
  const del= document.querySelector('#deleting')
  newcomment.addEventListener('click',()=>{
  newcomment.remove()

  })
}

  

