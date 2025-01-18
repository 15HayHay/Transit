/* $( window ).on( "load", function() {
    console.log("Am Ready!");
    $("img").on("mouseenter", function(oneImg){
        $(oneImg.target).fadeOut();
        console.log("Hands off!");
    }); 
    
}); */

const transitEvents = [
  {
    start: "3/20/2024",
    title: "Reveal the Transit site",
    description: "Show everyone what I've been up to.",
  },
  {
    start: "3/20/2024",
    title: "Technology Q&A",
    description:
      "Q & A about technology in the life of a Christian w/ Matt Ross",
  },
  {
    start: "3/27/2024",
    title: "Colossians The Supremacy of Christ",
    description: "Regular Transit meeting at The Loft <br> 7:30-9:30",
  },
  { start: "4/3/2024", title: "No Transit", description: "Happy Easter" },
  {
    start: "4/6/2024",
    title: "Bainbridge Swing Dance @ Family Life Center",
    description: "8:00-11:00 PM",
  },
  {
    start: "4/10/2024",
    title: "Regular meeting at The Loft",
    description: "7:30-9:30",
  },
  {
    start: "4/13/2024",
    title: "Roller Skating @ Chagrin Valley Roller Rink",
    description: "7:00 PM",
  },
  {
    start: "4/17/2024",
    title: "Local church Q&A",
    description: "The Loft <br> 7:30-9:30",
  },
  {
    start: "4/24/2024",
    title: "Regular meeting at The Loft",
    description: "7:30-9:30",
  },
  {
    start: "5/1/2024",
    title: "Regular meeting at The Loft",
    description: "7:30-9:30",
  },
  {
    start: "5/4/2024",
    title: "Bainbridge Swing Dance @ Family Life Center",
    description: "8:00-11:00 PM",
  },
  {
    start: "5/8/2024",
    title: "No Transit",
    description: "Off for Basics Conference",
  },
  {
    start: "5/15/2024",
    title: "Group potluck",
    description: "Potluck at The Loft",
  },
  {
    start: "5/22/2024",
    title: "Regular meeting at The Loft",
    description: "7:30-9:30",
  },
  {
    start: "5/29/2024",
    title: "No Transit",
    description: "Happy Memorial Day!",
  },
  {
    start: "6/5/2024",
    title: "Regular meeting at The Loft",
    description: "7:30-9:30",
  },
  {
    start: "6/12/2024",
    title: "Transit night at Solon Park",
    description: "6679 SOM Center Rd, Solon, OH 44139 6:00-9:00",
  },
  {
    start: "6/19/2024",
    title: "Regular meeting at the Loft",
    description: "7:30-9:30",
  },
  {
    start: "6/26/2024",
    title: "Regular meeting at the Loft",
    description: "7:30-9:30",
  },
  {
    start: "7/10/2024",
    title: "Regular meeting at the Loft",
    description: "7:30-9:30",
  },
  {
    start: "7/24/2024",
    title:
      "Go-karts, Mini-golf & ice cream @ Fun n Stuff 661 Highland Rd, Macedonia, OH 44056",
    description:
      '6:00-9:00 <a target="_blank" href="https://parksidechurch.tpsdb.com/OnlineReg/2997"> Register here</a>',
  },

  {
    start: "8/14/2024",
    title: "Guardians game",
    description:
      '<a target="_blank" href="https://parksidechurch.tpsdb.com/OnlineReg/2995"> Register here</a>',
  },
  {
    start: "8/28/2024",
    title: "Regular meeting at the Loft",
    description: "7:30-9:30",
  },
  {
    start: "9/4/2024",
    title: "Regular meeting at the Loft",
    description: "Gospel Relationships: Church Community 7:30-9:30",
  },

  {
    start: "10/16/2024",
    title: "Regular meeting at the Loft",
    description: "Gospel Relationships: Biblical Friendship 7:30-9:30",
  },
  {
    start: "11/6/2024",
    title: "Regular meeting at the Loft",
    description: "Gospel Relationships: Singleness 7:30-9:30",
  },
  {
    start: "11/20/2024",
    title: "Friendsgiving dinner at the Loft",
    description: "",
  },
  {
    start: "12/4/2024",
    title: "Gospel Relationships: Dating and Marriage",
    description: "7:30-9:30",
  },
  {
    start: "12/18/2024",
    title: "Christmas party at the Loft",
    description: "",
  },
  {
    start: "1/15/2025",
    title: "Spiritual Discipines Q&A",
    description: "",
  },
  {
    start: "2/5/2025",
    title: "Game night at the Loft",
    description: "",
  },
  {
    start: "2/26/2025",
    title: "God is: A study on the attributes of God",
    description: "",
  },
  {
    start: "3/12/2025",
    title: "God is: A study on the attributes of God",
    description: "",
  },
];

function addEventsToTable() {
  let eventList = document.getElementById("eventList");
  for (eventInfo of transitEvents) {
    if (isEventInPast(eventInfo) === false) {
      eventList.appendChild(makeEventItem(eventInfo));
    }
  }
}

function isEventInPast(eventInfo) {
  const timeNow = new Date();
  const timeEvent = new Date(eventInfo.start);
  timeEvent.setHours(23, 59, 59);
  return timeNow > timeEvent;
}

function makeEventItem(eventInfo) {
  let eventItem = document.createElement("li");
  let eventName = document.createElement("h4");
  addTextToElement(eventName, eventInfo.title);
  eventItem.appendChild(eventName);
  let dateString = `Date: ${eventInfo.start}`;
  if (eventInfo.end) {
    dateString = dateString + ` - ${eventInfo.end}`;
  }
  let eventDate = document.createElement("p");
  addTextToElement(eventDate, dateString);
  eventItem.appendChild(eventDate);
  let eventDesc = document.createElement("p");
  eventDesc.innerHTML = eventInfo.description;
  eventItem.appendChild(eventDesc);
  return eventItem;
}

function addTextToElement(ele, text) {
  let textEle = document.createTextNode(text);
  ele.appendChild(textEle);
}

document.addEventListener("DOMContentLoaded", function () {
  addEventsToTable();
  let calendarEl = document.getElementById("calendar");
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: transitEvents.map((item) => {
      return {
        title: item.title,
        start: new Date(item.start),
        end: new Date(item.end),
      };
    }),
  });
  calendar.render();
});
