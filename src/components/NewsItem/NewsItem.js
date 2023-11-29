import React from "react";
import {Button, Card} from "react-bootstrap";
import {card, img, btn, text} from "./index";
import "./style.css"
import {Link} from "react-router-dom";

function NewsItem(props) {
    const {imageUrl, alt, description, title, id} = props;

    return (
        <>
            <Card style={card}>
                <Card.Img style={img} variant="top" src={imageUrl} alt={alt}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={text}>{description}</Card.Text>
                    <Link to={`/news/${id}`}>
                        <Button style={btn}>
                            Read more →
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
}



export default NewsItem;
