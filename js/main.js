import { sections } from "../thecheat/section.js";
import { commands } from "../thecheat/commands.js";

function add_vertical_bar(sections) {
    var vertical_bar = document.createElement("aside")
    document.body.appendChild(vertical_bar)
    vertical_bar.className = "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"

    var vertical_bar_div = document.createElement("div")
    vertical_bar.appendChild(vertical_bar_div)
    vertical_bar_div.className = "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"

    var section_div_list = document.createElement("ul")
    vertical_bar_div.appendChild(section_div_list)
    section_div_list.className = "space-y-2 font-medium"

    for (const sectionName in sections) {
        var a_section = document.createElement("li")
        section_div_list.appendChild(a_section)

        var a_section_link = document.createElement("a")
        a_section.appendChild(a_section_link)
        a_section_link.className = "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        a_section_link.href = "#" + sections[sectionName]

        var section_span = document.createElement("span")
        a_section_link.appendChild(section_span)
        section_span.className = "ms-3"
        section_span.innerHTML = sectionName
    }

}

function add_section_content(elemToAdd, dataJson) {

    for (const commandDescription in dataJson) {
        var commandDescriptionDiv = document.createElement("div")
        elemToAdd.appendChild(commandDescriptionDiv)

        var commandDescriptionHTML = `<label for="role-arn" class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">${commandDescription}</label>
    <div class="relative mb-6">
        <input id="role-arn" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="${dataJson[commandDescription]}" readonly>
        <button data-copy-to-clipboard-target="role-arn" data-tooltip-target="tooltip-role-arn" class="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
            <span id="default-icon-role-arn">
                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                </svg>
            </span>
            <span id="success-icon-role-arn" class="hidden inline-flex items-center">
                <svg class="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                </svg>
            </span>
        </button>
    </div>`

        commandDescriptionDiv.innerHTML = commandDescriptionHTML

        //#var description = document.createElement("div")
        //#commandDescriptionDiv.appendChild(description)
        //#description.innerHTML = commandDescription

        //#var command = document.createElement("div")
        //#commandDescriptionDiv.appendChild(command)
        //#command.innerHTML = dataJson[commandDescription]

    }
}

function add_content(sections) {

    var body_main_div = document.createElement("div")
    document.body.appendChild(body_main_div)
    body_main_div.className = "p-4 sm:ml-64"

    var content = document.createElement("div")
    body_main_div.appendChild(content)
    content.className = "p-4 dark:border-gray-700"

    for (const sectionName in sections) {
        var sectionContentElem = document.createElement("div")
        content.appendChild(sectionContentElem)

        var sectionTitle = document.createElement("div")
        sectionContentElem.appendChild(sectionTitle)
        sectionTitle.className = "text-4xl dark:text-white"
        sectionContentElem.id = sections[sectionName]
        sectionTitle.innerHTML = sectionName

        add_section_content(sectionContentElem, commands[sections[sectionName]])
    }
}

function set_body_color() {
    document.body.className = "bg-zinc-300 dark:bg-gray-600"
}

set_body_color()
add_vertical_bar(sections)
add_content(sections)