import styled from "styled-components";

export const PostStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: dodgerblue;
  color: white;
  padding: 20px;
  border-radius: 5px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 10px;

    img {
      width: 50px;
      margin-right: 5px;
    }
  }
`;
