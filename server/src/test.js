const { prisma } = require('./generated/prisma-client')

async function test() {
  const newUser = await prisma.
    createUser({
      firstName: "Parker",
      lastName: "Place",
      username: "pakaplace",
      gender: "MALE",
      nationality: "USA",
      description: "Cool guy",
      email: "testytest@gmail.com",
      phoneNumber: "8137657071",
      facebookUrl: "www.facebook.com",
      twitterUrl: "www.twitter.com",
      linkedinUrl: "www.linkedin.com",
      isVerified: true,
      isAdmin: true,
      uwcName: "PEARSON",
      places: {
        create: [{
          title: "Big Comfy Couch",
          description: "Big and Comfy",
          latitude: "100",
          longitude: "100",
          city: "Tampa",
          state: "Florida",
          country: "United States",
          street: "100 Smith St."
        }]
      }
    })

  //   console.log(`New User~~~~~ ${newUser}`)
    let allUsers = await prisma.users()
    console.log(`All users~~~ allUser`, allUsers)
    let places = await prisma.places()
    console.log(`All users~~~ allUser`, places)
    console.log()
}
test()