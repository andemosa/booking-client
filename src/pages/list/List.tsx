import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import styled from "styled-components";

import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";

interface State {
  destination: string;
  dates: string[];
  options: { adult: string; children: string; room: string };
}

const List = () => {
  const location = useLocation() as { state: State };
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // const { data, loading, error, reFetch } = useFetch(
  //   `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  // );

  const handleClick = () => {
    // reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Container>
        <Wrapper>
          <ListSearch>
            <Title>Search</Title>
            <Item>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </Item>
            {/* <Item>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </Item> */}
            <Item>
              <label>Options</label>
              <Options>
                <OptionItem>
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </OptionItem>
                <OptionItem>
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </OptionItem>
                <OptionItem>
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} placeholder={options.adult} />
                </OptionItem>
                <OptionItem>
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} placeholder={options.children} />
                </OptionItem>
                <OptionItem>
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} placeholder={options.room} />
                </OptionItem>
              </Options>
            </Item>
            <Button onClick={handleClick}>Search</Button>
          </ListSearch>
          <Result>
            {/* {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )} */}
          </Result>
        </Wrapper>
      </Container>
    </div>
  );
};

export default List;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;

const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  & > label {
    font-size: 12px;
  }
  & > input {
    height: 30px;
    border: none;
    padding: 5px;
  }
  & > span {
    height: 30px;
    padding: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Options = styled.div`
  padding: 10px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
  & > input {
    width: 50px;
  }
`;

const Result = styled.div`
  flex: 3;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;
