document.addEventListener("DOMContentLoaded", function () {
    // Hide intro screen after a delay
    setTimeout(function () {
        document.getElementById("intro-screen").classList.add("fade-out");
    }, 2000); // Adjust time (2000ms = 2 seconds)

    function toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        if (!dropdown) return; // Ensure dropdown exists

        // Check if already visible
        const isVisible = dropdown.classList.contains("show");

        // Hide all other dropdowns first
        document.querySelectorAll(".dropdown-content").forEach((otherDropdown) => {
            otherDropdown.classList.remove("show");
        });

        // Toggle dropdown visibility
        if (!isVisible) {
            dropdown.classList.add("show");
        }
    }

    // Attach event listeners dynamically to each card
    document.querySelectorAll(".card-body").forEach((cardBody) => {
        cardBody.addEventListener("click", function () {
            const dropdownId = this.parentElement.querySelector(".dropdown-content").id;
            if (dropdownId) {
                toggleDropdown(dropdownId);
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".card")) {
            document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
                dropdown.classList.remove("show");
            });
        }
    });
});
