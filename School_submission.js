document.getElementById("assignmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("assignmentTitle").value;
    const description = document.getElementById("assignmentDescription").value;
    const dueDate = document.getElementById("dueDate").value;

    alert(`Assignment "${title}" has been pushed to students!\nDue Date: ${dueDate}`);
    
    // Clear the form fields after submission
    document.getElementById("assignmentForm").reset();
});
