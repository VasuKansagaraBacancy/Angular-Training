if (!localStorage.getItem("users")) {
    localStorage.setItem(
        "users",
        JSON.stringify([
            {
                id: 1,
                username: "Vasu Kansagara",
                email: "vasu.kansagara@bacancy.com",
                password: "V@su4144",
            },
            {
                id: 2,
                username: "Shubh Kachhadiya",
                email: "shubh.kachhadiya@bacancy.com",
                password: "Shubh@4144",
            }
        ])
    );
}

if (!localStorage.getItem("blogs")) {
    localStorage.setItem(
        "blogs",
        JSON.stringify([
            {
                id: 1,
                title: "The Future of Web Development",
                image: "../Assets/Images/Web.png",
                content: "Web development is evolving rapidly with new tools and frameworks. Let's dive into what the future holds.",
                comments: [
                    { username: "Alice", content: "Very insightful post!" }
                ]
            },
            {
                id: 2,
                title: "Healthy Living in 2025",
                image: "../Assets/Images/Healthy.png",
                content: "Maintaining health in the modern world can be tough, but here are 5 tips that make it easy.",
                comments: []
            },
            {
                id: 3,
                title: "Top 10 Travel Destinations",
                image: "../Assets/Images/Travel.png",
                content: "Explore the most stunning travel destinations around the world that you must visit at least once.",
                comments: [
                    { username: "Charlie", content: "Adding these to my bucket list!" }
                ]
            },
            {
                id: 4,
                title: "AI is Changing Everything",
                image: "../Assets/Images/AI2.jpg",
                content: "Artificial Intelligence is disrupting industries. Here's how it's changing our lives daily.",
                comments: []
            },
            {
                id: 5,
                title: "Mastering Productivity",
                image: "../Assets/Images/Mastering.png",
                content: "Tired of feeling unproductive? Here are the top habits of highly effective people.",
                comments: [
                    { username: "Diana", content: "These are so practical!" }
                ]
            }
        ])
    );
}