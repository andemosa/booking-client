import styled from "styled-components";
// import useFetch from "../../hooks/useFetch";

const Featured = () => {
  //   const { data, loading, error } = useFetch(
  //     "/hotels/countByCity?cities=berlin,madrid,london"
  //   );

  return (
    <Container>
      {
        //   loading ? (
        //     "Loading please wait"
        //   ) :
        <>
          <Item>
            <Img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
            />
            <Titles>
              <h1>Berlin</h1>
              {/* <h2>{data[0]} properties</h2> */}
            </Titles>
          </Item>

          <Item>
            <Img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
            />
            <Titles>
              <h1>Madrid</h1>
              {/* <h2>{data[1]} properties</h2> */}
            </Titles>
          </Item>
          <Item>
            <Img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
            />
            <Titles>
              <h1>London</h1>
              {/* <h2>{data[2]} properties</h2> */}
            </Titles>
          </Item>
        </>
      }
    </Container>
  );
};

export default Featured;

const Container = styled.section`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;

const Item = styled.article`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Titles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
