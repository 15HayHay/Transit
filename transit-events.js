/* $( window ).on( "load", function() {
    console.log("Am Ready!");
    $("img").on("mouseenter", function(oneImg){
        $(oneImg.target).fadeOut();
        console.log("Hands off!");
    }); 
    
}); */



const transitEvents= [
    {"start": "3/20/2024", "title" : "Reveal the Transit site", "description" : "Show everyone what I've been up to." } ,
    {"start": "3/20/2024", "title": "Technology Q&A" ,"description" :" Q & A about technology in the life of a Christian w/ Matt Ross"} ,
    {"start": "3/27/2024","title": "Colossians The Supremacy of Christ", "description":"Regular Transit meeting at The Loft"},
    {"start": "4/3/2024","title": "No Transit", "description":"Happy Easter"},
    {"start": "4/10/2024", "title": "Regular meeting at The Loft", "description": ""},
    {"start":"4/17/2024" ,"title": "Local church Q&A" , "description": ""},
    {"start" :"4/24/2024", "title":"Regular meeting at The Loft", "description":""},
    {"start": "5/1/2024", "title":"Regular meeting at The Loft","description":""},
    {"start": "5/8/2024","title":"No Transit","description": "Off for Basics Conference"},
    {"start": "5/15/2024","title":"Group potluck", "description" : "Potluck at The Loft"},
    {"start":"5/22/2024","title":"Regular meeting at The Loft","description":""},
    {"start":"5/29/2024","title":"No Transit","description":"Happy Memorial Day"},
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