let homes = [
    {
        id: 1,
        images:["image1", "image2", "image3"],
        type: "hotel",
        location: {country: "London", city: "SouthEast London", neighbourhood: "DeptFord" },
        distance: 1435,
        availableFrom: "May 20",
        availableUntil: "May 25",
        rating: 4.1,
        title: "Serene House by Muturi",
        guests: 2,
        bedroom: 4,
        beds: 6,
        baths: 8,
        about: "This is a house located in deptform",
        host: {
            name: "Muturi",
            isVerified: true,
            languages: ['Spanish', "Kenyan", "English"],
            mobileNumber: 2349682584
        },
        reviews: [
            {
                id: 1,
                name: "Peagasus Thansis",
                comment: "Really nice place",
                rating: 4,
                image: "image"
            }
        ],
        pricePerNight: 542,
        cleaningFess: 12,
        amenities: [
            'wifi',
            'washing machine',
            'air conditioner',
            'kitchen and utensils',
            'smoke alarm'
        ]
    },
    {
        id: 2,
        type: "home",
        images: ["image1", "image2", "image3"],
        location: {country:"Spain", city: "El Port de la Selva", neighbourhood: "Catalonia" },
        distance: 7356,
        availableFrom: "Oct 10",
        availableUntil: "Oct 15",
        rating: 4.75,
        title: "Sunflower House",
        guests: 10,
        bedroom: 4,
        beds: 5,
        baths: 3,
        about: "Beatiful 3 bedroom architectrally designed villa",
        host: {
            name: "James",
            isVerified: true,
            languages: ['Espanol', "Francais", "English"],
            mobileNumber: 35029452232
        },
        reviews: [
            {
                id: 1,
                name: "Laila",
                comment: "Astonishing",
                rating: 4,
                image: "image"
            },
            {
                id: 2,
                name: "Anna",
                comment: "Beatiful Surrounding",
                rating: 6,
                image: "image"
            },
        ],
        pricePerNight: 400,
        cleaningFess: 80,
        amenities: [
            'wifi',
            'beach access',
            'Tv with standard guide',
            'kprivate pool',
        ]
    },
]

module.exports = homes