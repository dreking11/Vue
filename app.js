const app = Vue.createApp({
    data() {
        return{
            courseGoal: "Become part of the 24G Culture",
            dueceLink:  "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/who_is_24g.mp4",
            foeLink: "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/ces_overview.mp4",
            droneLink: "https://static-email-hosting.s3.amazonaws.com/24G_Test_Project/videos/future_of_drones.mp4"
        };
    }
});

app.mount('#user-goal');