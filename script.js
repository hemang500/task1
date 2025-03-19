document.addEventListener("DOMContentLoaded",()=>{



const personStatus=document.querySelector(".status-para");
const approveButton=document.querySelector(".employee-details-approve-btn")
const rejectButton=document.querySelector(".employee-details-reject-btn")


console.log(approveButton);
console.log(rejectButton);
 
// console.log(personStatus.innerText ="Status: Rejected");




function employeeApproveButton(){

    
    approveButton.addEventListener('click',()=>{
        
        let check=confirm("Are sure to Approved")
    if(check){

        personStatus.classList.add("status-para-approve")
        personStatus.innerText = "Status: Approved";
    }

    approveButton.disabled = true;

        
   })

   
    
    
} 

employeeApproveButton();

function  employeeRejectButton(){ 

            
    rejectButton.addEventListener('click',()=>{
        
        let check=confirm("Are sure to Rejected")
    if(check){

        personStatus.classList.add("status-para-reject")
        personStatus.innerText = "Status: Rejected";
    }

    approveButton.disabled = true;

        
   })

    
}

employeeRejectButton()




// DOMContentLoaded
});