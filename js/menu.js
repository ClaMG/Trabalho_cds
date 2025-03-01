function aparecer(el){
    if(document.getElementById(el).style.display === 'flex'){
        document.getElementById(el).style.display = 'none'
    } else{
        document.getElementById(el).style.display = 'flex'
    }
}
    
