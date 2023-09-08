const express = require("express")

const app = express()

// const currentTime = new Date()
// const refUtcTime = new Date()

// refUtcTime.setMinutes(refUtcTime.getMinutes() - 2)
// const timeDiff = currentTime - refUtcTime

// console.log(Math.abs(currentTime));

// if ( Math.abs(currentTime) <=  120000 ) {

// }


app.get("/", (req, res) => {

    res.status(200).json({
        slack_name: req.query.slack_name,
        current_day: (new Date).getDay(),
        utc_time: "",
        track: req.query.track,
        github_file_url: "",
        github_repo_url: "",
        status_code: 200
    })
})

app.listen(9090, () => {
    console.log(`server is running on port 9090`);
})