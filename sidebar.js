let sidebar_panel=document.querySelector('ul');
let sidebar=document.querySelector('.sidebar-btn');
sidebar.addEventListener('click',()=>{
    sidebar_panel.classList.toggle('sidebar-active');
})