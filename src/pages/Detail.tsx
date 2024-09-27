
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { Article } from '../interfaces/api-info';

const Detail: React.FC = () => {

    const { id } = useParams();
    const { articlesId }= useFetch();

    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        const fetchArticleId = async () => {
            const result = await articlesId(Number(id));
            if ('code' in result) {
            } else {
                setArticle(result);
            }
        };
        fetchArticleId();
    }, [])

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <h1>{article?.title}</h1>
        </div>
    )
}

export default Detail

