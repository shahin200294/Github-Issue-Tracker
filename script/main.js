

const counterOpen = document.getElementById("counterOpen");
const counterClosed = document.getElementById("counterClosed");


const issueSearch = document.getElementById("issueSearch");

issueSearch.addEventListener("click", () => { });

async function scarchPost(data) {
    await  fetch(" https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications")
        .then(res => res.json())
        .then(data => displayIssues(data.data));

}
scarchPost(data);

async function loadIssues(type) {

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();

    let issues = data.data;

    if (type === "open") {
        issues = issues.filter(issue => issue.status === "open");
        issueCount.textContent = `${issues.length} Open Issues`;
    }

    if (type === "closed") {
        issues = issues.filter(issue => issue.status === "closed");
        issueCount.textContent = `${issues.length} Closed Issues`;
    }

    displayIssues(issues);

}


// issues
function displayIssues(issues) {

    const container = document.getElementById("issuesContainer");
    container.innerHTML = "";
    
    issues.forEach(issue => {
        const card = document.createElement("div");

        card.innerHTML += `
        
            <div  onclick="my_modal_5.showModal()" class="bg-white shadow rounded p-4 cursor-pointer border-top-[#00A96E]">
                <div class="flex justify-between items-center mb-2">
                    <div class="open">
                        <img src="./assets/Open-Status.png" alt="">
                    </div>
                    <div class="closed">
                        <img class="hidden" src="./assets/Closed- Status .png" alt="">
                    </div>
                    <span class="bg-[#FEECEC] text-[#EF4444] text-xs font-bold px-2 py-1 rounded">HIGH</span>
                    <span class="bg-[#FFF6D1] text-[#F59E0B] text-xs font-bold px-2 py-1 rounded hidden">Medium</span>
                    <span class="bg[#EEEFF2] text-[#9CA3AF] text-xs font-bold px-2 py-1 rounded hidden">Low</span>
                </div>
                <h3 class="font-semibold text-lg mb-1">${issue.title}</h3>
                <p class="text-gray-600 text-sm mb-2 line-clamp-2">${issue.description}</p>
                <div class="flex justify-between items-center">
                    <span class="bg-[#FEECEC] text-[#EF4444] text-xs font-bold px-2 py-1 rounded">${issue.priority}</span>
                    <span class="bg-[#FDE68A] text-[#D97706] text-xs font-bold px-2 py-1 rounded">${issue.label}</span>
                </div>
                <hr class="my-3 w-full border-gray-200">
                <div class="mt-3 text-gray-500 text-xs">#1 by john_doe <br> 1/15/2024</div>
            </div>
       
`;
        container.appendChild(card);
    });


}
loadIssues();
