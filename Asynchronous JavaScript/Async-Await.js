const HasMeeting = false;

const Meeting = new Promise((resolve, reject) => {
    if (!HasMeeting) {
        const MeetingDetails =
        {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        }
        resolve(MeetingDetails)
    } else {
        reject(new Error("Meeting has been scheduled"))
    }
})

const addToCalender = (MeetingDetails) => {
    const calender = `${MeetingDetails.name} has been scheduled on ${MeetingDetails.location} at ${MeetingDetails.time} `

    return Promise.resolve(calender)
}

async function Mymeeting() {
    try {
        const MeetingDetails = await Meeting
        const calender = await addToCalender(MeetingDetails)
        console.log(calender)
    }
    catch
    {
        console.log(`Error`)
    }

}

Mymeeting()