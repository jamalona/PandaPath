
const ReviewList = () => {
  const Reviews = [
    {
      rating: 5,
      title: 'Amazing Experience Exploring China with James',
      opinion: "James helped plan an unforgettable trip to China. The itinerary was perfectly tailored to our interests, including hidden gems we wouldn't have discovered on our own. His local knowledge made the experience rich and authentic. Highly recommend!",
      name: 'Jessica',
    },
    {
      rating: 4,
      title: 'Great Cultural Tour Curated',
      opinion: "Chen provided a detailed and thoughtful itinerary, focusing on China’s minority cultures. He was attentive to our preferences and made sure everything went smoothly. We got to see parts of China we never imagined. Would book again!",
      name: 'Ilya',
    },
    {
      rating: 5,
      title: 'A Smooth and Fun Adventure with Yang',
      opinion: "Yang was amazing! His recommendations made our 9-day tour so much fun and stress-free. We especially loved his restaurant suggestions and the off-the-beaten-path stops. He made sure our experience was personalized and exciting!",
      name: 'David',
    },
    {
      rating: 4,
      title: 'Wonderful Support from Jamal on Our Custom Trip',
      opinion: '"Jamal was fantastic! He made the planning process so easy. He took our ideas and budget into account and crafted the perfect itinerary. We felt confident the entire time, thanks to his expert advice and attention to detail."',
      name: 'Eric',
    },
    {
      rating: 5,
      title: 'Top-Notch Service from James on Our China Journey',
      opinion: "James did a phenomenal job planning our China tour. His attention to detail was outstanding, and he made sure we experienced the best of China’s culture, history, and nature. Couldn’t have asked for a better guide!",
      name: 'Eren',
    },
  ];

  return (
    <>
      <div className="w-screen">
        <h1 className="text-4xl text-center pb-9">What Travellers Are Raving About</h1>

        <div className="flex items-center justify-start space-x-6 w-3/4 overflow-x-scroll ml-auto mr-auto h-72">
          {Reviews.map((review, index) => (
            <div key={index} className="text-center bg-white  min-w-[31%] h-64 content-center p-4 shadow-lg rounded-lg ">
              <h2 className="text-2xl font-semibold mb-2">{review.title}</h2>
              <p className="text-sm mb-2">{review.opinion}</p>
              <p className="font-bold">{review.name}</p>
            </div>

          ))}


        </div>
      </div>
    </>
  )
}

export default ReviewList
