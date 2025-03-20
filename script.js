const leaveRequests = [
    { id: 1, name: "David Brown", role: "Team Lead", date: "2025-03-25", reason: "Vacation", status: "Rejected" },
    { id: 2, name: "Alice Smith", role: "HR Manager", date: "2025-03-22", reason: "Medical checkup", status: "Rejected" },
    { id: 3, name: "John Doe", role: "Software Engineer", date: "2025-03-20", reason: "Family event", status: "Rejected" },
];

const container = document.getElementById("leaveRequests");
const searchInput = document.getElementById("search");
const statusFilter = document.getElementById("statusFilter");
const darkModeToggle = document.getElementById("darkModeToggle");
const approveSelected = document.getElementById("approveSelected");
const rejectSelected = document.getElementById("rejectSelected");

function renderRequests() {
    container.innerHTML = "";
    const searchQuery = searchInput.value.toLowerCase();
    const filterStatus = statusFilter.value;

    leaveRequests.forEach(request => {
        if (
            (filterStatus === "All" || request.status === filterStatus) &&
            request.name.toLowerCase().includes(searchQuery)
        ) {
            const card = document.createElement("div");
            card.className = "leave-card";

            card.innerHTML = `
                <input type="checkbox" class="select-checkbox" data-id="${request.id}">
                <p><strong>Name:</strong> ${request.name}</p>
                <p><strong>Role:</strong> ${request.role}</p>
                <p><strong>Date:</strong> ${request.date}</p>
                <p><strong>Reason:</strong> ${request.reason}</p>
                <p class="status-rejected"><strong>Status:</strong> ${request.status}</p>
                <button class="approve-btn" onclick="updateStatus(${request.id}, 'Approved')">Approve</button>
                <button class="reject-btn" onclick="updateStatus(${request.id}, 'Rejected')">Reject</button>
            `;

            container.appendChild(card);
        }
    });
}

function updateStatus(id, status) {
    const request = leaveRequests.find(req => req.id === id);
    if (request) {
        request.status = status;
        renderRequests();
    }
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Search and filter functionality
searchInput.addEventListener("input", renderRequests);
statusFilter.addEventListener("change", renderRequests);

// Approve/Reject selected
approveSelected.addEventListener("click", () => updateMultiple("Approved"));
rejectSelected.addEventListener("click", () => updateMultiple("Rejected"));

function updateMultiple(status) {
    document.querySelectorAll(".select-checkbox:checked").forEach(checkbox => {
        const id = parseInt(checkbox.getAttribute("data-id"));
        updateStatus(id, status);
    });
}

// Initial render
renderRequests(); 
