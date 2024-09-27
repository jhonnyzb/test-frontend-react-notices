
import { BASE_URL } from '../constants/constants';
import { Article, ErrorServer } from '../interfaces/api-info';

const useFetch = () => {

    const getArticles = async (): Promise<Article[] | ErrorServer> => {
        try {
            const url = `${BASE_URL}/api/articles-all`
            const response = await fetch(url);
            const result: Article[] = await response.json();
            return result;
        } catch (error) {
            let objectError: ErrorServer = {
                code: 500,
                message: 'Error en la respuesta del servidor'
            }
            return objectError
        }

    }

    const articlesId = async (id: number): Promise<Article | ErrorServer> => {
        try {
            const url = `${BASE_URL}/api/articles-detail/${id}`
            const response = await fetch(url);
            const result: Article = await response.json();
            return result;
        } catch (error) {
            let objectError: ErrorServer = {
                code: 500,
                message: 'Error en la respuesta del servidor'
            }
            return objectError
        }

    }


    return {
        getArticles,
        articlesId
    };
}

export default useFetch;
