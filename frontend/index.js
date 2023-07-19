
async function getData(){
    try {
        const res=await fetch("https://h2skill-task1-backend.onrender.com/getdata")
        const result =await res.json()
       
        console.log(result)
        renderData(result)
    } catch (error) {
        console.log(error)
    }
}


function renderData(result){
    document.querySelector("table").style.display="block"
    const tbody = document.querySelector('#displayData');
    tbody.innerHTML=""

    const finalData=result.map((ele)=>{
        return `
        <tr>
      <td>${ele.team[0]?.team_name}</td>
      <td>${ele.full_name}</td>
      <td>${ele.email}</td>
      <td>${ele.number}</td>
      <td>${ele.city}</td>
      <td>${ele.url}</td>
      </tr>
        `
    })
   tbody.innerHTML=finalData.join("")
}


const Data=document.querySelector(".data")

Data.addEventListener("click",()=>{
  
getData()
    
})