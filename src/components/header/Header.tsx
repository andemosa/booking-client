import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IHeaderProps {
  type?: string;
}

interface ITypeStyleProps {
  type?: string;
}

interface IActiveStyleProps {
  active?: boolean;
}

interface Range {
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  color?: string | undefined;
  key?: string | undefined;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
  showDateDisplay?: boolean | undefined;
}

interface OptionsState {
  adult: number;
  children: number;
  room: number;
}

type Operations = "i" | "d";

const Header = ({ type }: IHeaderProps) => {
  // const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState<OptionsState>({
    adult: 1,
    children: 0,
    room: 1,
  });

  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  const handleOption = (name: keyof OptionsState, operation: Operations) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // const { dispatch } = useContext(SearchContext);

  // const handleSearch = () => {
  //   dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  //   navigate("/hotels", { state: { destination, dates, options } });
  // };

  return (
    <Wrapper>
      <Container type={type}>
        <HeaderList>
          <HeaderListItem active>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </HeaderListItem>
        </HeaderList>
        {type !== "list" && (
          <>
            <h1>A lifetime of discounts? It's Genius.</h1>
            <Description>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </Description>
            {/* {!user && <Button>Sign in / Register</Button>} */}
            {<Button>Sign in / Register</Button>}
            <Search>
              <SearchItem>
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <SearchInput
                  type="text"
                  placeholder="Where are you going?"
                  //   onChange={(e) => setDestination(e.target.value)}
                />
              </SearchItem>
              <SearchItem>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <SearchText
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate!, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate!,
                  "MM/dd/yyyy"
                )}`}</SearchText>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </SearchItem>
              <SearchItem>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <SearchText
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</SearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <span>Adult</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <OptionCounterButton
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <span>Children</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <OptionCounterButton
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <span>Room</span>
                      <OptionCounter>
                        <OptionCounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCounterButton>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <OptionCounterButton
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </SearchItem>
              <SearchItem>
                <Button
                // onClick={handleSearch}
                >
                  Search
                </Button>
              </SearchItem>
            </Search>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div<ITypeStyleProps>`
  width: 100%;
  max-width: 1024px;
  margin: ${(props) =>
    props.type === "list" ? "20px 0px 0px 0px" : "20px 0px 100px 0px"};
`;

const HeaderList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const HeaderListItem = styled.li<IActiveStyleProps>`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
  border: ${(props) => props.active && "1px solid white"};
  border-radius: ${(props) => props.active && "20px"};
  padding: ${(props) => props.active && "10px"};
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Search = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;

// const Icon = styled.i`
//   color: lightgray;
// `;

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .date {
    position: absolute;
    top: 50px;
    z-index: 2;
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
`;

const SearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`;

const Options = styled.ul`
  z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

const OptionItem = styled.li`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
