const express = require("express")

const app = express()

const xTime = new Date();
xTime.setMilliseconds(0)
console.log((xTime.toString()));

app.get("/api", (req, res) => {

    let weekDays = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]

    const currentTime = new Date()
    const refUtcTime = new Date()

    refUtcTime.setMinutes(refUtcTime.getMinutes() - 2)
    const timeDiff = currentTime - refUtcTime

    let showTime

    if ( Math.abs(timeDiff) <=  120000 ) {
        showTime = currentTime
    }


    res.status(200).json({
        slack_name: req.query.slack_name,
        current_day: weekDays[(new Date).getDay()],
        utc_time: showTime,
        track: req.query.track,
        github_file_url: "https://github.com/Amidsts/HNG10_task1/blob/main/index.js",
        github_repo_url: "https://github.com/Amidsts/HNG10_task1",
        status_code: 200
    })
})

app.listen(9090, () => {
    console.log(`server is running on port 9090`);
})