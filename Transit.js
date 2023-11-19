
const transitEvents= [
    {"start": "idk", "end": "idk" , "title" : "idk we doin something", "description" : "I told you idk" } ,
    {"start": "11/22/2023", "title" : "No Transit" , "description" : "Happy Thanksgiving"} ,
    {"start": "12/13/2023 7:30 PM", "end": "12/13/2023 9:30 PM", "title" : "Christmas Party" , "description": "Party"},
    {"start": "12/20/23" , "title" : "No Transit" , "description" : "Merry Christmas!"} ,
    {"start": "12/27/23" , "title" : "No Transit" , "description" : "Merry Christmas!"} ,
    {"start" : "1/3/24" , "title" : "No Transit" , "description" : "Happy New Year!"}
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
    addTextToElement(eventName, eventInfo.title)
    eventItem.appendChild(eventName)
    let dateString = `Date: ${eventInfo.start}`
    if (eventInfo.end) {
        dateString = dateString + ` - ${eventInfo.end}`
    }
    let eventDate = document.createElement("p")
    addTextToElement(eventDate, dateString)
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

document.addEventListener('DOMContentLoaded', function() {
    addEventsToTable();
    let calendarEl = document.getElementById('calendar');
    let calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: transitEvents.map(
        (item) => {
            return {"title": item.title, "start" : new Date(item.start) , "end" : new Date (item.end)}
        }
      )
    });
    calendar.render();
  });



