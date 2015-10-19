var createSublist = function() {
    var ul = document.createElement("div");
    ul.setAttribute("class", "keyword-index-sublist")
    return ul;
}

var createLink = function(href, text) {
    var a = document.createElement("a");
    a.textContent = text;
    a.setAttribute("href", href);
    return a;
}

var createHeader = function() {
    var header = document.createElement("div");
    header.setAttribute("class", "keyword-index-h2");
    return header;
}

var container = document.getElementById("keyword-index-container");
var currentLetter = null;
var currentList = null;

// keywordIndex is defined in docs_index.html
keywordIndex.forEach(function(entry) {
    // Create a separate sublist for each letter
    if(currentLetter !== entry.name.charAt(0).toUpperCase()) {
        if(currentList) {
            var letterHeader = createHeader();
            letterHeader.textContent = currentLetter;

            var letterSection = document.createElement("div");
            letterSection.setAttribute("class", "col-sm-4");
            letterSection.appendChild(letterHeader);
            letterSection.appendChild(currentList);
            container.appendChild(letterSection);
        }

        currentList = createSublist();
        currentLetter = entry.name.charAt(0).toUpperCase();
    }

    var listItem = document.createElement("div");
    listItem.appendChild(createLink(entry.url, entry.name));

    currentList.appendChild(listItem);
});
