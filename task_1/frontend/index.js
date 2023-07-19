let get_data = document.getElementById("get_data")
let main_container = document.getElementById("main_container")
let loader_div = document.getElementById("loader_div")
async function getData(){
    main_container.style.display="none"
    loader_div.style.display="flex"
    try {
        const res=await fetch("https://h2skill-task1-backend.onrender.com/getdata")
        const data =await res.json()
        renderData(data)
    } catch (err) {
        console.log(err)
    }
}


function renderData(result){
    loader_div.style.display="none"
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



get_data.addEventListener("click",()=>{
  
    getData()
    
})