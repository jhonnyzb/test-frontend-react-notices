
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Article } from '../../interfaces/api-info'
import useFetch from '../../hooks/useFetch'
import useUtils from '../../hooks/useUtils'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {

    const { getArticles } = useFetch();
    const { formatDate } = useUtils();
    const navigate = useNavigate();

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
        const fetchArticles = async () => {
            const result = await getArticles();
            if ('code' in result) {
            } else {
                setArticles(result);
            }
        };
        fetchArticles();
    }, [])

    const handleClick = (id: number) => {
        navigate(`/detail/${id}`);
    };

    return (
        <>
            <div className='header_home'>
                <h5 className='header_home--white'>ALERTA</h5>
                <h4 className='header_home_subtitle header_home--white'>Listado de los carros mas vendidos en Colombia durante 2024</h4>
            </div>
            <section className='section_home' style={{ height: 800 }}>
                <div className='section_home_container'>
                    <div className='section_home_one'>
                        <div className="section_home_grid">

                            {
                                articles.map((article, index) => (
                                    <div key={index.toString()} className="section_home_grid_item" onClick={() => handleClick(article.id)}>
                                        <div className='section_home_container_item_img'>
                                            <img className='section_home_item_img' src={article.image} alt="article" />
                                        </div>
                                        <div className='section_home_item_descripcion'>
                                            <div className='section_home_item_title'>
                                                <span className='section_home_technology'>{article.section.name}</span>
                                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                            </div>
                                            <div className='section_home_title'>
                                                <span>
                                                    {article.title}
                                                </span>
                                            </div>
                                            <div className='section_home_autor'>
                                                <span>
                                                    Por {article.author.name} - {formatDate(article.published_date)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='section_home_two'></div>
                </div>
            </section>

        </>
    )
}

export default Home

