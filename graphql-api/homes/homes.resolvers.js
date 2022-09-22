const homesController =  require('./homes.controller')
module.exports = {
    Query: {
        homes: () => {
            return homesController.getAllHomes()
        },
        getHomeById: (_, args) => {
            return homesController.getHomeById(args.id)
        },
    },
    Mutation: {
        addNewHome: (_, args) => {
            const newHome = {
                id: args.id,
                images: ["image1", "image2", "image3"],
                type: args.type,
                location: { country: "Nigeria", city: "Benin City" },
                distance: 8356,
                rating: 2.4,
                title: "Hut",
                about: "Traditional Escape",
                reviews: [
                    {
                        id: 1,
                        name: "Obasuyi Omeregie",
                        comment: "A place to feel at home",
                        rating: 5,
                        image: "image"
                    }
                ]
            }
            return homesController.addNewHome(newHome)
        },
        deleteHome: (_, args) => {
            return homesController.deleteHomeById(args.id)
        }

    }
}