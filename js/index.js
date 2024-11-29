bookmarkNameInput=document.getElementById('name')
bookmarkURLInput=document.getElementById('url')

productContaine = [];

if(localStorage.getItem('allproducts') !== null){
    productContaine=JSON.parse(localStorage.getItem('allproducts'))
    displayProducts()
}

function addProducts(){
    
    if(bookmarkURLInput.classList.contains('is-valid') && bookmarkNameInput.classList.contains('is-valid')){

        var products={
            pName:bookmarkNameInput.value,
            pUrl:bookmarkURLInput.value,
        }
        productContaine.push(products)
        localStorage.setItem('allproducts',JSON.stringify(productContaine))
        displayProducts();
        clearProducts();
    }
    else{
        
        window.alert(`Site Name or Url is not valid, Please follow the rules below
            
            Site name must contain at least 3 characters
            Site URL must be a valid one`)
    }
}

function clearProducts(){
    bookmarkNameInput.value=''
    bookmarkURLInput.value=''
}

function displayProducts(){
    
    var cartona='';
    for(var i=0; i<productContaine.length ; i++){
        cartona += `<tr>
                    <td>${i}</td>
                    <td>${productContaine[i].pName}</td>
                    <td>
                        <button class="btn btn-success" onclick="welcome()">
                            <i class="fa-solid fa-eye"></i>
                            Visit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick="deleteProducts(${i})">
                            <i class="fa-solid fa-trash-can" ></i>
                            Delete</button>
                    </td>
                </tr>`
    }
    document.getElementById('contant').innerHTML=cartona

}

function deleteProducts(index){
    productContaine.splice(index,1)
    localStorage.setItem('allproducts',JSON.stringify(productContaine))
    displayProducts()
}

function welcome(){
    window.open("https://www.google.com/")
}

// function validateForm(element){
   
//     var regex = {
//         productName: /^\w{3,}/,
//         productURL: /^https?:\/\/[a-z]{3,}\.com/,
//     }

//     if(regex[element.id].test(element.value)){
//         element.classList.add('is-valid')
//         element.classList.remove('is-invalid')
//     }
//     else{
//         element.classList.add('is-invalid')
//         element.classList.remove('is-valid')
//     }
// }

function valid(element){
     var regex=/^https?:\/\/[a-z]{3,}\.com/

     if(regex.test(element.value)){
        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        
    }
    else{
        element.classList.add('is-invalid')
        element.classList.remove('is-valid')
        
    }
}

function validName(element1){
    var regex1=  /^\w{3,}/
    
    if(regex1.test(element1.value)){
       element1.classList.add('is-valid')
       element1.classList.remove('is-invalid')
       
   }
   else{
       element1.classList.add('is-invalid')
       element1.classList.remove('is-valid')
       
   }
}
