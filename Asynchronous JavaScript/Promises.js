const HasMeeeting = false;

const Meeeting = new Promise((resolve, reject) => {
    if (!HasMeeeting) {
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


Meeeting
    .then(addToCalender)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })