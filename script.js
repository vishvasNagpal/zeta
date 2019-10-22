(function () {


const sampleData = [
    {
        "name": "Afghanistan"
    },
    {
        "name": "Ã…land Islands"
    },
    {
        "name": "Albania"
    },
    {
        "name": "Algeria"
    },
    {
        "name": "American Samoa"
    },
    {
        "name": "Andorra"
    },
    {
        "name": "Angola"
    },
    {
        "name": "Anguilla"
    },
    {
        "name": "Antarctica"
    },
    {
        "name": "Antigua and Barbuda"
    },
    {
        "name": "Argentina"
    },
    {
        "name": "Armenia"
    },
    {
        "name": "Aruba"
    },
    {
        "name": "Australia"
    },
    {
        "name": "Austria"
    },
    {
        "name": "Azerbaijan"
    },
    {
        "name": "Bahamas"
    },
    {
        "name": "Bahrain"
    },
    {
        "name": "Bangladesh"
    },
    {
        "name": "Barbados"
    },
    {
        "name": "Belarus"
    },
    {
        "name": "Belgium"
    },
    {
        "name": "Belize"
    },
    {
        "name": "Benin"
    },
    {
        "name": "Bermuda"
    },
    {
        "name": "Bhutan"
    },
    {
        "name": "Bolivia (Plurinational State of)"
    },
    {
        "name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "name": "Bosnia and Herzegovina"
    },
    {
        "name": "Botswana"
    },
    {
        "name": "Bouvet Island"
    },
    {
        "name": "Brazil"
    },
    {
        "name": "British Indian Ocean Territory"
    },
    {
        "name": "United States Minor Outlying Islands"
    },
    {
        "name": "Virgin Islands (British)"
    },
    {
        "name": "Virgin Islands (U.S.)"
    },
    {
        "name": "Brunei Darussalam"
    },
    {
        "name": "Bulgaria"
    },
    {
        "name": "Burkina Faso"
    },
    {
        "name": "Burundi"
    },
    {
        "name": "Cambodia"
    },
    {
        "name": "Cameroon"
    },
    {
        "name": "Canada"
    },
    {
        "name": "Cabo Verde"
    },
    {
        "name": "Cayman Islands"
    },
    {
        "name": "Central African Republic"
    },
    {
        "name": "Chad"
    },
    {
        "name": "Chile"
    },
    {
        "name": "China"
    },
    {
        "name": "Christmas Island"
    },
    {
        "name": "Cocos (Keeling) Islands"
    },
    {
        "name": "Colombia"
    },
    {
        "name": "Comoros"
    },
    {
        "name": "Congo"
    },
    {
        "name": "Congo (Democratic Republic of the)"
    },
    {
        "name": "Cook Islands"
    },
    {
        "name": "Costa Rica"
    },
    {
        "name": "Croatia"
    },
    {
        "name": "Cuba"
    },
    {
        "name": "CuraÃ§ao"
    },
    {
        "name": "Cyprus"
    },
    {
        "name": "Czech Republic"
    },
    {
        "name": "Denmark"
    },
    {
        "name": "Djibouti"
    },
    {
        "name": "Dominica"
    },
    {
        "name": "Dominican Republic"
    },
    {
        "name": "Ecuador"
    },
    {
        "name": "Egypt"
    },
    {
        "name": "El Salvador"
    },
    {
        "name": "Equatorial Guinea"
    },
    {
        "name": "Eritrea"
    },
    {
        "name": "Estonia"
    },
    {
        "name": "Ethiopia"
    },
    {
        "name": "Falkland Islands (Malvinas)"
    },
    {
        "name": "Faroe Islands"
    },
    {
        "name": "Fiji"
    },
    {
        "name": "Finland"
    },
    {
        "name": "France"
    },
    {
        "name": "French Guiana"
    },
    {
        "name": "French Polynesia"
    },
    {
        "name": "French Southern Territories"
    },
    {
        "name": "Gabon"
    },
    {
        "name": "Gambia"
    },
    {
        "name": "Georgia"
    },
    {
        "name": "Germany"
    },
    {
        "name": "Ghana"
    },
    {
        "name": "Gibraltar"
    },
    {
        "name": "Greece"
    },
    {
        "name": "Greenland"
    },
    {
        "name": "Grenada"
    },
    {
        "name": "Guadeloupe"
    },
    {
        "name": "Guam"
    },
    {
        "name": "Guatemala"
    },
    {
        "name": "Guernsey"
    },
    {
        "name": "Guinea"
    },
    {
        "name": "Guinea-Bissau"
    },
    {
        "name": "Guyana"
    },
    {
        "name": "Haiti"
    },
    {
        "name": "Heard Island and McDonald Islands"
    },
    {
        "name": "Holy See"
    },
    {
        "name": "Honduras"
    },
    {
        "name": "Hong Kong"
    },
    {
        "name": "Hungary"
    },
    {
        "name": "Iceland"
    },
    {
        "name": "India"
    },
    {
        "name": "Indonesia"
    },
    {
        "name": "CÃ´te d'Ivoire"
    },
    {
        "name": "Iran (Islamic Republic of)"
    },
    {
        "name": "Iraq"
    },
    {
        "name": "Ireland"
    },
    {
        "name": "Isle of Man"
    },
    {
        "name": "Israel"
    },
    {
        "name": "Italy"
    },
    {
        "name": "Jamaica"
    },
    {
        "name": "Japan"
    },
    {
        "name": "Jersey"
    },
    {
        "name": "Jordan"
    },
    {
        "name": "Kazakhstan"
    },
    {
        "name": "Kenya"
    },
    {
        "name": "Kiribati"
    },
    {
        "name": "Kuwait"
    },
    {
        "name": "Kyrgyzstan"
    },
    {
        "name": "Lao People's Democratic Republic"
    },
    {
        "name": "Latvia"
    },
    {
        "name": "Lebanon"
    },
    {
        "name": "Lesotho"
    },
    {
        "name": "Liberia"
    },
    {
        "name": "Libya"
    },
    {
        "name": "Liechtenstein"
    },
    {
        "name": "Lithuania"
    },
    {
        "name": "Luxembourg"
    },
    {
        "name": "Macao"
    },
    {
        "name": "Macedonia (the former Yugoslav Republic of)"
    },
    {
        "name": "Madagascar"
    },
    {
        "name": "Malawi"
    },
    {
        "name": "Malaysia"
    },
    {
        "name": "Maldives"
    },
    {
        "name": "Mali"
    },
    {
        "name": "Malta"
    },
    {
        "name": "Marshall Islands"
    },
    {
        "name": "Martinique"
    },
    {
        "name": "Mauritania"
    },
    {
        "name": "Mauritius"
    },
    {
        "name": "Mayotte"
    },
    {
        "name": "Mexico"
    },
    {
        "name": "Micronesia (Federated States of)"
    },
    {
        "name": "Moldova (Republic of)"
    },
    {
        "name": "Monaco"
    },
    {
        "name": "Mongolia"
    },
    {
        "name": "Montenegro"
    },
    {
        "name": "Montserrat"
    },
    {
        "name": "Morocco"
    },
    {
        "name": "Mozambique"
    },
    {
        "name": "Myanmar"
    },
    {
        "name": "Namibia"
    },
    {
        "name": "Nauru"
    },
    {
        "name": "Nepal"
    },
    {
        "name": "Netherlands"
    },
    {
        "name": "New Caledonia"
    },
    {
        "name": "New Zealand"
    },
    {
        "name": "Nicaragua"
    },
    {
        "name": "Niger"
    },
    {
        "name": "Nigeria"
    },
    {
        "name": "Niue"
    },
    {
        "name": "Norfolk Island"
    },
    {
        "name": "Korea (Democratic People's Republic of)"
    },
    {
        "name": "Northern Mariana Islands"
    },
    {
        "name": "Norway"
    },
    {
        "name": "Oman"
    },
    {
        "name": "Pakistan"
    },
    {
        "name": "Palau"
    },
    {
        "name": "Palestine, State of"
    },
    {
        "name": "Panama"
    },
    {
        "name": "Papua New Guinea"
    },
    {
        "name": "Paraguay"
    },
    {
        "name": "Peru"
    },
    {
        "name": "Philippines"
    },
    {
        "name": "Pitcairn"
    },
    {
        "name": "Poland"
    },
    {
        "name": "Portugal"
    },
    {
        "name": "Puerto Rico"
    },
    {
        "name": "Qatar"
    },
    {
        "name": "Republic of Kosovo"
    },
    {
        "name": "RÃ©union"
    },
    {
        "name": "Romania"
    },
    {
        "name": "Russian Federation"
    },
    {
        "name": "Rwanda"
    },
    {
        "name": "Saint BarthÃ©lemy"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha"
    },
    {
        "name": "Saint Kitts and Nevis"
    },
    {
        "name": "Saint Lucia"
    },
    {
        "name": "Saint Martin (French part)"
    },
    {
        "name": "Saint Pierre and Miquelon"
    },
    {
        "name": "Saint Vincent and the Grenadines"
    },
    {
        "name": "Samoa"
    },
    {
        "name": "San Marino"
    },
    {
        "name": "Sao Tome and Principe"
    },
    {
        "name": "Saudi Arabia"
    },
    {
        "name": "Senegal"
    },
    {
        "name": "Serbia"
    },
    {
        "name": "Seychelles"
    },
    {
        "name": "Sierra Leone"
    },
    {
        "name": "Singapore"
    },
    {
        "name": "Sint Maarten (Dutch part)"
    },
    {
        "name": "Slovakia"
    },
    {
        "name": "Slovenia"
    },
    {
        "name": "Solomon Islands"
    },
    {
        "name": "Somalia"
    },
    {
        "name": "South Africa"
    },
    {
        "name": "South Georgia and the South Sandwich Islands"
    },
    {
        "name": "Korea (Republic of)"
    },
    {
        "name": "South Sudan"
    },
    {
        "name": "Spain"
    },
    {
        "name": "Sri Lanka"
    },
    {
        "name": "Sudan"
    },
    {
        "name": "Suriname"
    },
    {
        "name": "Svalbard and Jan Mayen"
    },
    {
        "name": "Swaziland"
    },
    {
        "name": "Sweden"
    },
    {
        "name": "Switzerland"
    },
    {
        "name": "Syrian Arab Republic"
    },
    {
        "name": "Taiwan"
    },
    {
        "name": "Tajikistan"
    },
    {
        "name": "Tanzania, United Republic of"
    },
    {
        "name": "Thailand"
    },
    {
        "name": "Timor-Leste"
    },
    {
        "name": "Togo"
    },
    {
        "name": "Tokelau"
    },
    {
        "name": "Tonga"
    },
    {
        "name": "Trinidad and Tobago"
    },
    {
        "name": "Tunisia"
    },
    {
        "name": "Turkey"
    },
    {
        "name": "Turkmenistan"
    },
    {
        "name": "Turks and Caicos Islands"
    },
    {
        "name": "Tuvalu"
    },
    {
        "name": "Uganda"
    },
    {
        "name": "Ukraine"
    },
    {
        "name": "United Arab Emirates"
    },
    {
        "name": "United Kingdom of Great Britain and Northern Ireland"
    },
    {
        "name": "United States of America"
    },
    {
        "name": "Uruguay"
    },
    {
        "name": "Uzbekistan"
    },
    {
        "name": "Vanuatu"
    },
    {
        "name": "Venezuela (Bolivarian Republic of)"
    },
    {
        "name": "Viet Nam"
    },
    {
        "name": "Wallis and Futuna"
    },
    {
        "name": "Western Sahara"
    },
    {
        "name": "Yemen"
    },
    {
        "name": "Zambia"
    },
    {
        "name": "Zimbabwe"
    }
];

    const search = document.getElementById("search");
    const customSearch = document.getElementById("customSearch");
    const searchArea = document.getElementById("searchArea");
    const tagList = document.getElementById("tagList");
    let listNodeListener;
    const tags = new Map();

    search.addEventListener("keyup", function (e) {
       const searchText = e.target.value.toLocaleLowerCase();
       let filteredItems = [];
        if(!searchText) {
            if(e.keyCode == 8 || e.keyCode == 46) {
                removeTags();
            }

        } else {
            filteredItems = filterData(searchText);
            addListItems(filteredItems);
        }
    });
    function removeTags() {
        if(tags.size > 0) {
            const keys = Array.from(tags.keys());
            tags.delete(keys[keys.length-1]);
            tagList.removeChild(tagList.lastChild);
        }
    }
    window.addEventListener("click", hideList);
    customSearch.addEventListener("click", function (e) {
       e.stopPropagation();
    });

    search.addEventListener("focus", function (e) {
        addListItems(sampleData.slice(0, 10));
    });
    function hideList(e) {
        const list = document.getElementById("list");
        if(list) {
            list.style.display = "none";
        }
    }
    tagList.addEventListener("click", function (e) {
        const item = e.target;
       if (item.classList.contains("close")) {
           const name = item.attributes[0].nodeValue;
           tags.delete(name);
           const id = item.parentNode.id;
           const parent = document.getElementById(id);
           parent.parentNode.removeChild(parent);
       }

    });

    function addListItems(data) {
        if (listNodeListener) {removeEventListener(listNodeListener)};
        const list = document.getElementById("list");
        if(list) {
            list.parentNode.removeChild(list)
        };
        const listNode = document.createElement("UL");
        listNode.setAttribute("id", "list");
        listNode.setAttribute("class", "list");
        data.forEach(function (item) {
            const node = document.createElement("LI");
            node.setAttribute("data-set", JSON.stringify(item));
            const textnode = document.createTextNode(item.name);
            node.appendChild(textnode);
            listNode.appendChild(node);
        });
        listNodeListener = listNode.addEventListener("click", addTags);
        customSearch.appendChild(listNode);
    }
    function addTags(e) {
        const dataSet = JSON.parse(e.target.attributes[0].nodeValue);
        if(!tags.has(dataSet.name)) {
            tags.set(dataSet.name, dataSet);
            renderTags(dataSet);
        }
        search.value = "";
        hideList();
    }
    function renderTags(item) {
        const node = document.createElement("span");
        node.setAttribute("id", "tag" + tags.size);
        node.setAttribute("class", "tag");
        const text = document.createElement("span");
        text.setAttribute("class", "tagText");
        const textnode = document.createTextNode(item.name);
        text.appendChild(textnode);
        text.setAttribute("title", item.name);
        node.appendChild(text);
        const closeNode = document.createElement("span");
        const corss = document.createTextNode("x");
        closeNode.appendChild(corss);
        closeNode.setAttribute("data-set", item.name);
        closeNode.setAttribute("class", "close");
        node.appendChild(closeNode);
        tagList.appendChild(node);
    }
    function filterData(searchText) {
        const filteredItems = sampleData.filter(function (item) { return item.name.toLocaleLowerCase().includes(searchText) });
        return filteredItems;
    }

})();