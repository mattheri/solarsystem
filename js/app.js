$("#dwarf-planets-modal").on("show.bs.modal", function (event) {
    const button = $(event.relatedTarget);
    const planet = button.data("planet");
    $("#dwarf-planets-modal img").each(function (index) {
        let ext = `jpg`;
        index += 1;
        if (index === 3) {
            ext = `gif`;
        }
        const path = `./media/${planet}/${planet}${index}.${ext}`;
        $(this).attr("src", path);
    });

    $("#dwarf-planets-modal h4").text(planet);
});

(async function fetchNasaImageOfTheDay() {
    let apiResponse = await fetch("https://api.nasa.gov/planetary/apod?api_key=qszyv2cxR6ufa34GJBRNijZfu3OvTaSi0GAZrcMN");
    let response = await apiResponse.json();
    document.querySelector("#APOD").setAttribute("src", response.hdurl);
    document.querySelector("#APOD-card-h4").textContent = response.title
    document.querySelector("#APOD-card-p").textContent = response.explanation;
})();