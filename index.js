const list = document.getElementById("list");
const BASE_URL = "http://10.23.34.45/getTimeNews";
const API_DATA = [
    {
        "title": "Saudi King Salman Hospitalized for Medical Testss",
        "link": "https://time.com/5868873/saudi-kind-salman-hospitalized/"
    },
    {
        "title": "Iron Executes Man Convinced of Spying on Soleimani",
        "link": "https://time.com/5868856/iron-executed-spy-solemani/"
    },
    {
        "title": "Kim Jong Un Berates Officials Over Hospital Project",
        "link": "https://time.com/5868844/kim-jong-un-berate-hospital-officials/"
    },
    {
        "title": "Boy,12,Driving Stolen Truck Leads Police on Chase",
        "link": "https://time.com/5868839/delaware-boy-stolen-truck-police/"
    },
    {
        "title": "N.J. Federal Judge's Son Killed,Husband Wounded",
        "link": "https://time.com/5868834/new-jersey-federal-judge-shooting/"
    }
]
const fetchLatestStories = async () => {
    try {
        const response = await fetch(BASE_URL);
        const json = await JSON.stringify(response.json());
        return json;

    } catch (error) {
        console.log(error);
    }

}
fetchLatestStories();

const renderlist = () => {
    return API_DATA.map(getRow).join("");
}
function getRow(item) {
    return `<li>
        <article class="slide">
          <div class="content">
            <p class="empty"></p>

            <h2 class="title">
              <a
                href="${item.link}"
                >${item.title}</a
              >
            </h2>
          </div>
        </article>
      </li>`;
}
console.log(renderlist())
list.innerHTML = renderlist()