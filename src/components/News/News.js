import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import NewsItem from "../NewsItem/NewsItem";
import { v4 as uuidv4 } from "uuid";
import { Col, Row } from "react-bootstrap";
import { header } from "../../config/config";
import {API_DOMAIN} from "../../config/api";
import { Container, Header, card } from "./index";
import {useParams} from "react-router-dom";

function News({isRoot, navs}) {
  let {categoryId} = useParams()
  console.log(navs[categoryId])
  categoryId ??= 10;
  // const category = isRoot ? 'everything' : navs.name
  const category = "everything"
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([])

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const title = capitalize(category);
  document.title = `${capitalize(title)} - News`;

  const updatenews = async () => {
    try {
      const response = isRoot ? await axios.get(`${API_DOMAIN}/news`) : await axios.get(`${API_DOMAIN}/news/${categoryId}`)
      const {data} = await axios.get(`https://picsum.photos/v2/list?page=${categoryId}&limit=100)`);
      setLoading(true);
      const parsedData = response.data;
      setImages(data)
      setArticles(parsedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
    console.log(articles)
    // eslint-disable-next-line
  }, [isRoot, categoryId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header>{header(capitalize(category))}</Header>
          <Container>
            <Row>
              {articles.map((element, id) => {
                return (
                  <Col sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}>
                    <NewsItem
                        id={element.id}
                      title={element.title}
                      description={element.content}
                      created={element.createdAt}
                      alt="News image"
                      imageUrl={
                       images[id].download_url
                      }
                      urlNews={element.id}
                      author={element.authorId}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}



export default News;
