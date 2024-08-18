import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
`;

const CardHeader = styled.div`
  height: 200px;
  background: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const CardContent = styled.div`
  background-color: #fff;
  padding: 30px;
`;

const CardTitle = styled.h3`
  height: 20px;
  margin: 0;
  opacity: 0.8;
  background: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
`;

const CardExcerpt = styled.p`
  color: #777;
  margin: 10px 0 20px;
  font-style: italic;

  span {
    display: inline-block;
    background: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
    height: 10px;
    width: 100%;
    border-radius: 50px;
  }
`;

const Author = styled.div`
  display: flex;
`;

const ProfileImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
  background: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 100%;

  strong,
  small {
    background: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
    display: inline-block;
    width: 100%;
    border-radius: 50px;
    height: 10px;
  }

  small {
    color: #aaa;
  }
`;

const Card: React.FC = () => {
  const [data, setData] = useState({
    headerImage: "",
    title: "",
    advice: "",
    profileImage: "",
    name: "",
    age: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const [adviceRes, response, res] = await Promise.all([
        fetch("https://api.adviceslip.com/advice").then((res) => res.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) => res.json()),
        fetch("https://randomuser.me/api").then((res) => res.json())
      ]);

      const user = res.results[0];

      setData({
        headerImage: "https://source.unsplash.com/featured/300x201",
        title: response.title,
        advice: adviceRes.slip.advice,
        profileImage: user.picture.large,
        name: `${user.name.first} ${user.name.last}`,
        age: `Age: ${user.dob.age}`
      });
    };

    setTimeout(fetchData, 3000);
  }, []);

  return (
    <CardContainer>
      <CardHeader>
        {data.headerImage && <img src={data.headerImage} alt="unsplash" />}
      </CardHeader>
      <CardContent>
        <CardTitle>{data.title || <>&nbsp;</>}</CardTitle>
        <CardExcerpt>
          {data.advice || <>&nbsp;</>}
        </CardExcerpt>
        <Author>
          <ProfileImg>
            {data.profileImage && <img src={data.profileImage} alt={data.name} />}
          </ProfileImg>
          <AuthorInfo>
            <strong>{data.name || <>&nbsp;</>}</strong>
            <small>{data.age || <>&nbsp;</>}</small>
          </AuthorInfo>
        </Author>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
