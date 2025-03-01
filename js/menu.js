function aparecer_g(el){
    if(document.getElementById('sumir_g').style.display === 'flex'){
        document.getElementById('sumir_g').style.display = 'none'
    } else{
        document.getElementById('sumir_g').style.display = 'flex'
    }
}
    
function aparecer_a(el){
    if(document.getElementById('sumir_a').style.display === 'flex'){
        document.getElementById('sumir_a').style.display = 'none'
    } else{
        document.getElementById('sumir_a').style.display = 'flex'
    }
}
    
if(document.getElementById('sumir_g').style.display === 'flex'){
    document.getElementById('sumir_a').style.display = 'none'
}else if(document.getElementById('sumir_a').style.display === 'flex'){
    document.getElementById('sumir_g').style.display = 'none'
}