import { Link } from "react-router-dom";
import styled from "styled-components";

interface Item {
  photos: string[];
  name: string;
  distance: number;
  desc: string;
  rating: number;
  cheapestPrice: number;
  _id: string;
}

interface ISearchItemProps {
  item: Item;
}

const SearchItem = ({ item }: ISearchItemProps) => {
  return (
    <Container>
      <Img src={item.photos[0]} alt="" />
      <Desc>
        <Title>{item.name}</Title>
        <Distance>{item.distance}m from center</Distance>
        <Taxi>Free airport taxi</Taxi>
        <Subtitle>
          Studio Apartment with Air conditioning
        </Subtitle>
        <Features>{item.desc}</Features>
        <CancelOp>Free cancellation </CancelOp>
        <CancelSub>
          You can cancel later, so lock in this great price today!
        </CancelSub>
      </Desc>
      <Details >
        {item.rating && (
          <Rating>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </Rating>
        )}
        <DetailTexts>
          <Price>${item.cheapestPrice}</Price>
          <TaxOp>Includes taxes and fees</TaxOp>
          <Link to={`/hotels/${item._id}`}>
            <Button>See availability</Button>
          </Link>
        </DetailTexts>
      </Details>
    </Container>
  );
};

export default SearchItem;

const Container = styled.article`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;

const Distance = styled.span`
  font-size: 12px;
`;

const Taxi = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

const Subtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Features = styled.span`
  font-size: 12px;
`;

const CancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

const CancelSub = styled.span`
  font-size: 12px;
  color: #008009;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    font-weight: 500;
  }
  & > button {
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;

const DetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Price = styled.span`
  font-size: 24px;
`;

const TaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;

const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
