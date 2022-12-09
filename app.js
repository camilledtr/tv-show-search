const form = document.querySelector('form');
const input = document.querySelector("input");

form.addEventListener("input", async (e) => {
    const contain = document.querySelector(".container");
    contain.innerHTML = "";

    e.preventDefault();
    const title = input.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${title}`);

    for (i = 0; i < res.data.length; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const descr = document.createElement("p");

        if (res.data[i].show.image) {
            img.src = res.data[i].show.image.medium;
        }
        else {
            img.src = "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
        }

        descr.innerText = res.data[i].show.name;

        const contain = document.querySelector(".container");

        contain.append(div);
        div.append(img);
        div.append(descr);
    }

})