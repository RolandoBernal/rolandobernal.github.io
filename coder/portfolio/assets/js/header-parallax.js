// Controls the animation of elements when user scrolls and said elements are on the viewport range.
const parallaxEls = document.querySelectorAll("[data-speed]");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
    for (const parallaxEl of parallaxEls) {
        const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
        const transformY = this.pageYOffset * parallaxEl.dataset.speed;
        if (parallaxEl.classList.contains("banner-title")) {
            parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
        } else if (parallaxEl.classList.contains("banner-subtitle")) {
            parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
        } else {
            parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
        }
    }
}


// <div class="lb_race_name">${datarecord.Name}</div>
//         <div class="lb_race_rank ${(datarecord.NumberOfRoutines > 0) ? "checkmark" : "cross"}">
//         ${(datarecord.NumberOfRoutines > 0) ? "✔" : "✗"}</div>
//         <div class="lb_race_points"><span class="${
//             datarecord.CheckMarkClass
//         }">${
//         datarecord.NumberOfRoutines



        {/* const data = [
    {
        Name: "Marychuy",
        NumberOfRoutines: 2,
        Genre: "female",
        ImageName: "ma",
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    },
    {
        Name: "Bety",
        NumberOfRoutines: 4,
        Genre: "female",
        ImageName: "cy"
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    },
    {
        Name: "Cynthia",
        NumberOfRoutines: 3,
        Genre: "female",
        ImageName: "cy"
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    },
    {
        Name: "El Profe",
        NumberOfRoutines: 5,
        Genre: "male",
        ImageName: "ep"
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    },
    {
        Name: "Martha",
        NumberOfRoutines: 4,
        Genre: "female",
        ImageName: "ma"
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    },
    // {
    //     Name: "LiS",
    //     NumberOfRoutines: 0,
    //     Genre: "female",
    //     ImageName: "0f",
    //     CheckMark: "✗",
    //     CheckMarkClass: "cross"
    // },
    {
        Name: "Kary",
        NumberOfRoutines: 2,
        Genre: "female",
        ImageName: "ka"
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    },
    {
        Name: "Cristian",
        NumberOfRoutines: 0,
        Genre: "male",
        ImageName: "0m"
        // CheckMark: "✔",
        // CheckMarkClass: "cross"
    },
    {
        Name: "Emily",
        NumberOfRoutines: 0,
        Genre: "female",
        ImageName: "0f"
        // CheckMark: "✗",
        // CheckMarkClass: "cross"
    },
    {
        Name: "Coach",
        NumberOfRoutines: 6,
        Genre: "male",
        ImageName: "to"
        // CheckMark: "✔",
        // CheckMarkClass: "checkmark"
    }
]; */}
