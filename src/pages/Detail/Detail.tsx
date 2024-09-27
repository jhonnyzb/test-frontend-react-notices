
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { Article } from '../../interfaces/api-info';
import './Detail.css';
import useUtils from '../../hooks/useUtils';


const Detail: React.FC = () => {

    const { id } = useParams();
    const { articlesId } = useFetch();
    const { formatDate } = useUtils();

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

    const quitarText = (text = '') => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        return doc.body.innerText.substring(0, 150)+ '....';
    }

    return (
        <>
            <div className='detail'>
                <div className='detail_header'>
                    <h3 className='detail_section'>{article?.section.name}</h3>
                    <p className='detail_name'>{article?.title}</p>
                    <p className='detail_content1'>{quitarText(article?.content)}</p>
                    <hr className='detail_separator' />
                    <span className='detail_author'>
                        Por {article?.author.name} - {formatDate(article ? article.published_date : '')}
                    </span>
                </div>
                <div className='detail_container_info'>
                    <div className='detail_info_one'>
                        <div className='detail_container_img'>
                            <img className='detail_img' src={article?.image} alt="foto noticia" />
                        </div>
                        <hr className='detail_separator1' />
                        <div className='detail_container_content'>
                            <div className='detail_content' dangerouslySetInnerHTML={{ __html: article ? article?.content : '' }}>
                            </div>
                        </div>
                    </div>
                    <div className='detail_info_two'></div>

                </div>

            </div>
        </>
    )
}

export default Detail

