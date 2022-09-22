let homes = [
    {
        id: 1,
        images: ["image1", "image2", "image3"],
        type: "hotel",
        location: { country: "London", city: "SouthEast London"},
        distance: 1435,
        rating: 4.1,
        title: "Serene House by Muturi",
        about: "This is a house located in deptform",
        reviews: [
            {
                id: 1,
                name: "Peagasus Thansis",
                comment: "Really nice place",
                rating: 4,
                image: "image"
            }
        ]
    },
    {
        id: 2,
        images: ["image1", "image2", "image3"],
        type: "apartment",
        location: { country: "Nigeria", city: "Port Harcourt"},
        distance: 3635,
        rating: 4.1,
        title: "Duplex",
        about: "Lovely design",
        reviews: [
            {
                id: 1,
                name: "Giannis Thansis",
                comment: "Cool house",
                rating: 5,
                image: "image"
            }
        ]
    },
    
   
]

module.exports = homes