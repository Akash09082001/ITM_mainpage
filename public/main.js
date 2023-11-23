
// image view modal
const imgModal = document.getElementById("imgModal");
const showImg = document.getElementById("showImg");

function showImage(src) {
    imgModal.classList.remove('hidden');
    showImg.src = src;
}
function closeImage() {
    imgModal.classList.add('hidden');
}



const itmStories = [
    {
        sId: 1,
        sHeading: 'Our Experience. Your Glory.',
        sName: 'ITM Business School',
        sImg: 'assets/itm-stories-img/6qZ8lt54Xrc-SD.jpg',
        sYTLink: '6qZ8lt54Xrc',
    },
    {
        sId: 2,
        sHeading: 'Campus Walkthrough 2022 ',
        sName: 'ITM Institute of Design and Media',
        sImg: 'assets/itm-stories-img/vM3Vn73aeYA-SD.jpg',
        sYTLink: 'vM3Vn73aeYA',
    },
    {
        sId: 3,
        sHeading: 'Vineeta Sharma  ',
        sName: 'Alumni',
        sImg: 'assets/itm-stories-img/AIrc0ky8HTA-SD.jpg',
        sYTLink: 'AIrc0ky8HTA',
    },
    {
        sId: 4,
        sHeading: 'COVID-19 Protected Campus  ',
        sName: 'ITM IHM Nerul',
        sImg: 'assets/itm-stories-img/hTxWRFf51jo-SD.jpg',
        sYTLink: 'hTxWRFf51jo',
    },
    {
        sId: 5,
        sHeading: 'Students',
        sName: 'Safety is a Commitment',
        sImg: 'assets/itm-stories-img/6i-Z10rhSF8-SD.jpg',
        sYTLink: '6i-Z10rhSF8',
    },
    {
        sId: 6,
        sHeading: 'Nerul Campus Walkthrough ',
        sName: 'IHM Nerul Campus Walkthrough',
        sImg: 'assets/itm-stories-img/s58qYDuvwKw-SD.jpg',
        sYTLink: 's58qYDuvwKw',
    },
    {
        sId: 7,
        sHeading: 'Raipur University ',
        sName: 'Raipur University',
        sImg: 'assets/itm-stories-img/GPhAQV-ieb4-SD.jpg',
        sYTLink: 'GPhAQV-ieb4',
    },
    {
        sId: 8,
        sHeading: 'Vocational University ',
        sName: 'Vocational University',
        sImg: 'assets/itm-stories-img/40Ejq2fKq_0-SD.jpg',
        sYTLink: '40Ejq2fKq_0',
    },

];

let output = itmStories.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(itmStories) {
    let listItems = `
    <div class="flex flex-col max-w-xs w-80 border border-gray-300 rounded-md">
      <div class="flex cursor-pointer relative items-center justify-center flex-col w-full rounded-md"
          onclick="openPopup('${itmStories.sYTLink}')">
          <div class="absolute flex w-10 items-center justify-center h-fit z-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  class="w-32 h-32 text-white">
                  <path fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                      clip-rule="evenodd" />
              </svg>
          </div>
          <div class="flex w-full">
          <img class="object-contain aspect-4/3 rounded-md w-full grayscale hover:grayscale-0"
          src=${itmStories.sImg} alt="" />
          </div>
          <div class="flex flex-col px-3 py-2 gap-1 w-full">
            <h3 class="flex text-brand-red w-fit text-base font-bold px-2 py-1 rounded-md ">${itmStories.sHeading}</h3>
              <span
                  class="w-fit px-2 py-1 rounded-md font-bold text-xs">${itmStories.sName}</span>
          </div>
      </div>
    </div>
  `;
    return listItems;
}

//  Video popup  code
var player;

function openPopup(videoId) {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

function closePopup() {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}