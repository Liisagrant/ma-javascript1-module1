const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Question 1:

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}
cat.complain();

//Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3:

heading.style.fontSize = "2em";

//Question 4:

heading.classList.add("subheading");
console.log(heading);

//Question 5:

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

console.log(paragraphs);

//Question 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `
    <p> New paragraph</p>
`;

resultsContainer.style.backgroundColor = "yellow";
console.log(resultsContainer);

//Question 7

/*function findCat(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}*/

//findCat(cats);

function findCat(list) {
    for (item of list) {
        console.log(item.name);
    }
}

findCat(cats);

//Question 8

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {

    let html = "";

    for (let i = 0; i < cats.length; i++) {

        let theCatAge = "";

        if (cats[i].age) {
            theCatAge = cats[i].age;
        } else {
            theCatAge = "unknown age";
        }


        html += `
    <div>
    <h5>Name: ${cats[i].name}</h5>
    <p>Age: ${theCatAge}</p>
    </div>`;

    }

    return html;
}

//console.log(finalHtml)
catContainer.innerHTML = createCats(cats);


