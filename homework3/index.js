// Question 1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const thead = document.querySelector("table").querySelector("thead");
const tbody = document.querySelector("table").querySelector("tbody");
const n = tableInfo.tableHeader.length;

for (let i = 0; i < n; i++) {
  const th = document.createElement("th");
  th.innerHTML = tableInfo.tableHeader[i];
  thead.appendChild(th);
}
for (let i = 0; i < n; i++) {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let k in tableInfo.tableContent[i]) {
    const td = document.createElement("td");
    td.innerHTML = tableInfo.tableContent[i][k];
    tr.appendChild(td);
  }
}

// Question 2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const ol = document.querySelector("ol");
const ul = document.querySelector("ul");
for (let i = 0; i < list.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = list[i];
  ol.appendChild(li);
}
for (let i = 0; i < list.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = list[i];
  ul.appendChild(li);
}

// Question 3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const select = document.querySelector("select");
for (let i = 0; i < dropDownList.length; i++) {
  const option = document.createElement("option");
  option.value = dropDownList[i].value;
  option.innerHTML = dropDownList[i].content;
  select.appendChild(option);
}
