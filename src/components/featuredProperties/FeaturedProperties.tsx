// import useFetch from "../../hooks/useFetch";

import styled from "styled-components";

const FeaturedProperties = () => {
  //   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  const data = [
    {
      _id: 1,
      photos: [
        "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
      ],
      name: "Stare",
      city: "madrid",
      cheapestPrice: "$120",
      rating: 8.9,
    },
  ];

  return (
    <Container>
      {
        //   loading ? (
        //     "Loading"
        //   ) :
        <>
          {data.map((item) => (
            <Item key={item._id}>
              <Img src={item.photos[0]} alt="" />
              <Name>{item.name}</Name>
              <City>{item.city}</City>
              <Price>Starting from ${item.cheapestPrice}</Price>
              {item.rating && (
                <Rating>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </Rating>
              )}
            </Item>
          ))}
        </>
      }
    </Container>
  );
};

export default FeaturedProperties;

const Container = styled.section`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Item = styled.article`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Name = styled.span`
  color: #333;
  font-weight: bold;
`;

const City = styled.span`
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 500;
`;

const Rating = styled.div`
  & > span {
    font-size: 14px;
  }
  & > button {
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }
`;
