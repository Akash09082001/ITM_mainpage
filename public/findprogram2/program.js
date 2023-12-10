
// Your existing JavaScript code...

// Function to handle button clicks
const handleButtonClick = (button) => {
    // Get the data-id and data-filter attributes values
    const id = button.getAttribute('data-id');
    const filter = button.getAttribute('data-filter');

    // Update the URL
    const newUrl = window.location.pathname + '?id=' + id + '&filter=' + filter;
    history.pushState({ path: newUrl }, '', newUrl);

    // Fetch JSON data dynamically
    fetch('../findprogram2/program.json')
        .then(response => response.json())
        .then(data => {
            // Apply additional filters based on the selected institute or location
            const filteredData = applyFilters(data, id, filter);

            // Populate HTML with the filtered data
            populateHTML(filteredData, id);
        })
        .catch(error => console.error('Error fetching data:', error));
};

// Function to apply filters based on institute and location
const applyFilters = (data, id, filter,) => {
    let filteredData = data;

    if (id) {
        // Filter by id (institute)
        filteredData = filteredData.filter(category => category.id === id);
    }

    if (filter) {
        // Filter by location
        filteredData = filteredData.map(category => {
            const filteredCategory = {
                ...category,
                data: category.data.filter(item => item.location || item.type || item.title === filter),
            };

            return filteredCategory;
        });
    }

    return filteredData;
};

// Function to handle search input
const handleSearchInput = () => {
    const searchText = document.getElementById('search').value.toLowerCase();
    const filteredData = filterData(originalData, searchText);
    populateHTML(filteredData);
};

// Function to set up event listeners for buttons
const setupButtonListeners = () => {
    // Get the buttons with data-id attributes
    const buttons = document.querySelectorAll('[data-id]');

    // Add click event listeners to the buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => handleButtonClick(button));
    });
};

// Function to populate HTML with fetched data
const populateHTML = (data, id = null) => {
    let title = document.querySelector("#programTitle");

    // Set default title to "All Programs" if id is null
    title.innerHTML = id === null ? "All Programs" : "";

    // Clear existing content in the main container
    document.getElementById('main').innerHTML = "";

    data.forEach(category => {
        if (id === null || category.id === id) {
            // Update title only if id matches the current category
            if (id !== null) {
                title.innerHTML = category.title;
            }

            const main = document.getElementById('main');

            category.data.forEach(item => {
                // const newItem = document.createElement('div');
                // newItem.setAttribute('class', )

                let programOutput = `
                    <a href=${item.pUrl} class="flex flex-col h-fit divide-y divide-gray-300 max-w-xs w-full border border-gray-300 rounded-md group hover:shadow-md cursor-pointer hover:border-brand-red hover:bg-brand-red hover:text-white bg-white">
                        <div class="flex w-full flex-col px-5 py-3 h-[72px]">
                            <div class="flex w-full">
                                <span id="title" class="flex text-sm font-bold">
                                    ${item.title}
                                </span>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col w-full justify-between px-5 gap-5 py-5">
                                <div class="flex w-full gap-3">
                                    <span class="flex p-1 text-white rounded-md bg-brand-red group-hover:bg-white group-hover:text-brand-red">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </span>
                                    <p id="location" class="flex text-sm text-justify">
                                        ${item.location}
                                    </p>
                                </div>
                                <div class="grid grid-cols-2 w-full">
                                    <div class="flex w-full items-center gap-4">
                                        <span class="flex p-1 text-white rounded-md bg-brand-red group-hover:bg-white group-hover:text-brand-red">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                            </svg>
                                        </span>
                                        <span id="duration" class="text-sm">
                                            ${item.duration}
                                        </span>
                                    </div>
                                    <div class="flex w-full items-center gap-4">
                                        <span class="flex p-1 text-white rounded-md bg-brand-red group-hover:bg-white group-hover:text-brand-red">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                            </svg>
                                        </span>
                                  
                                        <span id="type" class="text-sm">
                                            ${item.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                `;
                main.innerHTML += programOutput;
            });
        }
    });
};
// Your existing JavaScript code...

// Function to filter data based on search text
const filterData = (data, searchText) => {
    if (!searchText) {
        return data;
    }

    searchText = searchText.toLowerCase();

    return data.map(category => {
        const filteredCategory = {
            ...category,
            data: category.data.filter(item => {
                // Check if any property (title, location, duration, type) contains the search text
                return (
                    (item.title && item.title.toLowerCase().includes(searchText)) ||
                    (item.location && item.location.toLowerCase().includes(searchText)) ||
                    (item.duration && item.duration.toLowerCase().includes(searchText)) ||
                    (item.institute && item.institute.toLowerCase().includes(searchText)) ||
                    (item.type && item.type.toLowerCase().includes(searchText))
                );
            }),
        };

        return filteredCategory;
    });
};



// Function to fetch and populate with data
const fetchDataAndPopulate = () => {
    fetch('../findprogram2/program.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            originalData = data; // Save the original data for filtering
            // Get the id and filter from the URL parameters
            const searchParams = new URLSearchParams(window.location.search);
            const id = searchParams.get("id");
            const filter = searchParams.get("filter");

            // Populate HTML with the fetched data and applied filters
            const filteredData = applyFilters(data, id, filter);
            populateHTML(filteredData, id);
        })
        .catch(error => console.error('Error fetching or parsing data:', error));
};
// Attach event listener to the search input
document.getElementById('search').addEventListener('input', handleSearchInput);

// Initial setup
setupButtonListeners();

// Variable to store the original data for filtering
let originalData;

// Fetch and populate with data when the page loads
fetchDataAndPopulate();
