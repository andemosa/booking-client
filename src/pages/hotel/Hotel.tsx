import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { SetStateAction, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Reserve from "components/reserve/Reserve";
import Navbar from "components/navbar/Navbar";
import Header from "components/header/Header";
import MailList from "components/mailList/MailList";
import Footer from "components/footer/Footer";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1: { getTime: () => number; }, date2: { getTime: () => number; }) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const handleOpen = (i: SetStateAction<number>) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  // const handleClick = () => {
  //   if (user) {
  //     setOpenModal(true);
  //   } else {
  //     navigate("/login");
  //   }
  // };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {/* {loading ? (
        "loading"
      ) : (
        <Container>
          {open && (
            <Slider>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <SliderWrapper>
                <SliderImg src={data.photos[slideNumber]} alt="" />
              </SliderWrapper>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </Slider>
          )}
          <Wrapper>
            <BookNow>Reserve or Book Now!</BookNow>
            <Title>{data.name}</Title>
            <Address>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </Address>
            <Distance>
              Excellent location – {data.distance}m from center
            </Distance>
            <Highlight>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </Highlight>
            <Images>
              {data.photos?.map((photo, i) => (
                <ImgWrapper key={i}>
                  <Img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                  />
                </ImgWrapper>
              ))}
            </Images>
            <Details>
              <DetailsTexts>
                <Title>{data.title}</Title>
                <HotelDesc>{data.desc}</HotelDesc>
              </DetailsTexts>
              <Price>
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </Price>
            </Details>
          </Wrapper>
          <MailList />
          <Footer />
        </Container>
      )} */}
      {/* {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />} */}
    </div>
  );
};

export default Hotel;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Address = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Distance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

const Highlight = styled.span`
  color: #008009;
  font-weight: 500;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  width: 33%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const DetailsTexts = styled.div`
  flex: 3;
`;

const HotelDesc = styled.div`
  font-size: 14px;
  margin-top: 20px;
`;

const Price = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > h1 {
    font-size: 18px;
    color: #555;
  }
  & > span {
    font-size: 14px;
  }
  & > h2 {
    font-weight: 300;
  }
  & > button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;
  }
  .arrow {
    margin: 20px;
    font-size: 50px;
    color: lightgray;
    cursor: pointer;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`;
