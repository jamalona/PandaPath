import { useRef} from 'react';
import { IoIosStar } from "react-icons/io";
import reviewsData from '../../data/reviews.json'; 

const ReviewList = () => {
  const scrollRef = useRef(null);


  return (
    <div className="w-screen">
      <h1 className="text-4xl text-center pb-9">What Travellers Are Raving About</h1>

      <div
        ref={scrollRef}
        className="flex items-center justify-start space-x-6 w-10/12 overflow-x-scroll ml-auto mr-auto h-72 no-scrollbar"
      >
       
        {reviewsData.map((review, index) => (
          <div key={index} className="text-center bg-white min-w-[31%] h-64 content-center p-4 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">{review.title}</h2>
            <p className="text-sm mb-2">{review.opinion}</p>
            <p className="font-bold pr-2">{review.name}</p>
            {[...Array(review.rating)].map((_, i) => (
              <span key={i} className="inline-flex w-5 text-yellow-400"><IoIosStar /></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;


