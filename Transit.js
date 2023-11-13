
const transitEvents= [
    {"date": "12/13/23" ,"name" : "Christmas Party" , "description": "Party"},
    {"date": "idk", "name": "idk we doin something" ,} ,
    {"date": "12/20/23", "name" : "No Transit" , "description" : "Happy Thanksgiving"} ,
   {"date": "12/27/23" , "name" : "No Transit" , "description" : "Merry Christmas!"} ,
     {"date" : "1/3/24" , "name" : "No Transit" , "description" : "Happy New Year!"}
]

function addEventsToTable () {
    let eventList=document.getElementById("eventList")
    for (eventInfo of transitEvents) {
        eventList.appendChild(makeEventItem(eventInfo))
    }
    
    
}

function makeEventItem(eventInfo) {
    let eventItem =document.createElement("li")
    let eventName =document.createElement("h4")
    addTextToElement(eventName, eventInfo.name)
    eventItem.appendChild(eventName)
    let eventDate = document.createElement("p")
    addTextToElement(eventDate, `Date: ${eventInfo.date}`)
    eventItem.appendChild(eventDate)
    let eventDesc= document.createElement("p")
    addTextToElement(eventDesc, eventInfo.description)
    eventItem.appendChild(eventDesc)
    return eventItem
}



function addTextToElement(ele, text) {
    let textEle= document.createTextNode(text)
    ele.appendChild(textEle)
}

addEventsToTable()