import {Card} from "react-bootstrap";
import {card, img, text} from "./index";
import { useParams} from "react-router-dom";
import {API_DOMAIN} from "../../config/api";
import axios from "axios";
import {useEffect, useState} from "react";
import UserComment from "../UserComment";

function NewsPage() {
    let { newsId} = useParams()
    const [news, setNews] = useState([])
    const [comments, setComments] = useState([])
    const fetchNews = async () => {
        const {data} = await axios.get(`${API_DOMAIN}/news/${newsId}`)
        console.log(data[0])
        setNews(data[0])
    }
    const fetchComments = async () => {
        const {data} = await axios.get(`${API_DOMAIN}/comments/news/${newsId}/comments`)
        console.log(data)
        setComments(data.content)
    }
    const imageUrl = 'https://picsum.photos/1920/1080'
    useEffect(() => {
        fetchNews()
        fetchComments()
    }, []);
    return (
        <>
            <Card style={card}>
                <Card.Img style={img} variant="top" src={imageUrl}/>
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text style={text}>{news.content}</Card.Text>
                </Card.Body>
            </Card>
            {comments.map((comment) => (
                <UserComment key={comment.id} id={comment.id} content={comment.content} />
            ))}
        </>
    );
}



export default NewsPage;
