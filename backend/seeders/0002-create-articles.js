"use strict";

const User = require("../models/User");

module.exports = {
  async up(queryInterface, Sequelize) {
    
    const user = await User.findOne({
      where: {
        username: "Author"
      }
    });
    
    if (!user) {
      throw new Error("User Not Found");
    }

    const articles = [
      {
        id: 1,
        authorId: user.id,
        "title": "The Secret Life of Octopuses",
          "slug": "the-secret-life-of-octopuses",
          "description": "Exploring the intelligence and adaptability of these amazing underwater creatures.",
            "body": "Octopuses are among the *most intelligent* invertebrates on Earth. With **nine brains** (one central brain and eight in their arms), they can solve puzzles, recognize human faces, and even escape from tanks. \n\nTheir remarkable camouflage abilities allow them to change color and texture in milliseconds to match their surroundings. Despite their intelligence, octopuses live relatively short lives of 1-3 years, making their cognitive development even more impressive. \n\nThese solitary creatures represent one of nature's most *fascinating* evolutionary paths.",
            "createdAt": new Date(),
            "updatedAt": new Date(),
      },
      {
        id: 2,
        authorId: user.id,
        "title": "Hidden Cafés of Lisbon",
        "slug": "hidden-cafes-of-lisbon",
        "description": "Discovering Portugal's capital through its most charming local coffee spots.",
        "body": "Tucked away from Lisbon's tourist routes, small cafés reveal the *authentic rhythm* of Portuguese life. In Alfama's winding streets, traditional pastelerias serve freshly baked **pastéis de nata** alongside bica (strong espresso).\n\nPríncipe Real's modern coffee shops blend contemporary design with century-old azulejo tiles. For the best experience, visit like locals do—slowly savoring coffee while people-watching through open windows.",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      },
      {
        id: 3,
        authorId: user.id,
        "title": "Surprising Facts About Sloths",
        "slug": "surprising-facts-about-sloths",
        "description": "Uncovering the slow-paced but fascinating world of rainforest sloths.",
        "body": "Despite their reputation for laziness, sloths are **masters of energy conservation**. Moving at a top speed of 0.17 mph, they sleep 15-20 hours daily and can take a month to digest a single meal.\n\nTheir slow metabolism is an *evolutionary advantage* in the competitive rainforest. Sloths are:\n\n- Excellent swimmers\n- Hosts to symbiotic algae for camouflage\n- Visitors to the ground only once weekly\n\nTheir seemingly lazy lifestyle is actually a sophisticated survival strategy that has helped them thrive for 60+ million years.",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      },
      {
        id: 4,
        authorId: user.id,
        "title": "Weekend in Kyoto's Ancient Districts",
        "slug": "weekend-in-kyotos-ancient-districts",
        "description": "How to experience Japan's former capital in just 48 hours.",
        "body": "Even with limited time, Kyoto reveals its centuries of history through careful planning.\n\n**Morning:** Begin at dawn in Arashiyama's bamboo grove when crowds are sparse and light filters *magically* through towering stalks.\n\n**Afternoon:** Perfect for northern Higashiyama's temple path, walking from Nanzen-ji to Kiyomizu-dera through preserved Edo-period streets.\n\n**Evening:** Reserve for Gion, where geiko (Kyoto's geishas) occasionally glide between teahouses as lanterns illuminate wooden facades.\n\nStay in a `machiya` (traditional townhouse) rather than modern hotels for an immersive experience that transforms a brief visit into a journey through time.",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      },
      {
        id: 5,
        authorId: user.id,
        "title": "Ravens: Nature's Problem Solvers",
        "slug": "ravens-natures-problem-solvers",
        "description": "How ravens showcase remarkable intelligence rivaling primates.",
        "body": "Ravens possess cognitive abilities that rival those of **chimpanzees and dolphins**. These birds can use tools, plan for the future, and even hold grudges against specific humans who have wronged them. \n\nStudies show ravens engage in:\n1. Play behavior\n2. Logical problem-solving\n3. Speech mimicry\n\nTheir *social intelligence* allows them to form complex relationships and engage in tactical deception. In many indigenous cultures, ravens are regarded as tricksters or messengers between worlds – a testament to humanity's long recognition of their unusual intelligence.",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      },
      {
        id: 6,
        authorId: user.id,
        "title": "Desert Stargazing in Namibia",
        "slug": "desert-stargazing-in-namibia",
        "description": "Why Namibia offers some of Earth's most spectacular night skies.",
        "body": "he NamibRand Nature Reserve, Africa's first designated Dark Sky Reserve, offers stargazing experiences **unmatched anywhere else**. With virtually zero light pollution, the Milky Way casts visible shadows on moonless nights.\n\nThe desert's dry air eliminates atmospheric distortion, revealing celestial details invisible elsewhere. During day, explore:\n* Ancient sand dunes\n* Wildlife adapted to extreme conditions\n\nAs night falls, professional astronomers guide viewings through powerful telescopes. The *Southern Hemisphere's unique constellations*, including the Southern Cross and Magellanic Clouds, appear with breathtaking clarity against the ink-black canvas of Namibia's wilderness.",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      },
      {
        id: 7,
        authorId: user.id,
        "title": "Venice's Forgotten Islands",
        "slug": "venices-forgotten-islands",
        "description": "Exploring the overlooked archipelago beyond Venice's famous canals.",
        "body": "While tourists crowd St. Mark's Square, Venice's lagoon harbors dozens of islands waiting to be discovered.\n\n**Island highlights:**\n1. **Burano**: Rainbow-colored houses and lace-making traditions\n2. **Torcello**: Venice's first settlement with Byzantine mosaics in near-empty churches\n3. **Mazzorbo**: Walled vineyard producing rare native wine from pre-phylloxera grapes\n4. **San Michele**: Cemetery holding artistic luminaries including *Stravinsky* and *Diaghilev*\n\nAccessible by `vaporetto` yet overlooked by day-trippers, these islands preserve authentic Venetian life that has increasingly vanished from the main island's tourist-filled streets.",
        "createdAt": new Date(),
        "updatedAt": new Date(),
      }
    ]

    try {
      await queryInterface.bulkInsert("Articles", articles, {});
    } catch (error) {
      console.error("Error creating articles:", error);
    }

    const tagNames = [
      "MarineLife",
      "AnimalIntelligence",
      "Lisbon",
      "HiddenGems",
      "Sloths",
      "Conservation",
      "TravelItinerary",
      "Ravens",
      "Stargazing"
    ];

    const tags = tagNames.map(name => ({
      name,
    }));

    try {
      await queryInterface.bulkInsert("Tags", tags, {});
    } catch (error) {
      console.error("Error creating tags:", error);
    }


    const tagLists = [
      {
        articleId: 1,
        TagName: "MarineLife"
      },
      {
        articleId: 1,
        TagName: "AnimalIntelligence"
      },
      {
        articleId: 2,
        TagName: "Lisbon"
      },
      {
        articleId: 2,
        TagName: "HiddenGems"
      },
      {
        articleId: 3,
        TagName: "Sloths"
      },
      {
        articleId: 3,
        TagName: "Conservation"
      },
      {
        articleId: 4,
        TagName: "TravelItinerary"
      },
      {
        articleId: 4,
        TagName: "HiddenGems"
      },
      {
        articleId: 5,
        TagName: "Ravens"
      },
      {
        articleId: 5,
        TagName: "AnimalIntelligence"
      },
      {
        articleId: 6,
        TagName: "Stargazing"
      },
      {
        articleId: 6,
        TagName: "TravelItinerary"
      },
      {
        articleId: 7,
        TagName: "TravelItinerary"
      },
      {
        articleId: 7,
        TagName: "HiddenGems"
      } 
    ]
    try {
      await queryInterface.bulkInsert("TagLists", tagLists, {});
    } catch (error) {
      console.error("Error creating tag lists:", error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  },
};
