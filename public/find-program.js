import dataUrl from "./program.json" assert {type: 'json'}
const searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get("id")

// Populate the HTML with the fetched data
const populateHTML = (data, id = null) => {

    data.forEach(category => {
        if (category.id === id) {
            let title = document.querySelector("#programTitle")
            title.innerHTML = category.title
            category.data.forEach(item => {
                const newItem = document.createElement('div');

                newItem.innerHTML = `
                                <div
                                    class="flex flex-col divide-y divide-gray-300 max-w-xs w-full border border-gray-300 rounded-md hover:shadow-md cursor-pointer">

                                    <div class="flex w-full flex-col px-5 py-3 h-[72px]">
                                        <div class="flex w-full">
                                            <span id="title" class="flex text-base">
                                                ${item.title}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex flex-col w-full justify-between px-5 gap-5 py-5">
                                            <div class="flex w-full gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                </svg>
                                                <p id="location" class="flex text-sm text-justify">
                                                    ${item.location}
                                                </p>
                                            </div>
                                            <div class="grid grid-cols-2 w-full">
                                                <div class="flex w-full items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                    </svg>
                                                    <span id="duration" class="text-sm">
                                                        ${item.duration}
                                                    </span>
                                                </div>
                                                <div class="flex w-full items-center gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                                    </svg>
                                                    <span id="type" class="text-sm">
                                                        ${item.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                document.getElementById('main').appendChild(newItem);
            });
        }
    });

};
populateHTML(dataUrl, id)



function handleButtonClick() {
    const urlParams = new URLSearchParams(window.location.search);
    var filterId = this.getAttribute('data-id'); 
    urlParams.set('id', filterId);
    window.location.search = urlParams;
}

const buttons = document.querySelectorAll('.select-btn');

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

