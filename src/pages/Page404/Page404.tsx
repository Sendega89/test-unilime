import React from "react"
import Button from "../../components/Button/Button.tsx";
import Header from "../../components/Header/Header.tsx";
import Main from "../../components/Main/Main.tsx";
import {useTranslation} from 'react-i18next';
import image404 from '../../assets/images/ErrorPage/image.png';
import image204 from '../../assets/images/ErrorPage/204.png';
import {useNavigate} from "react-router-dom";
type Props = {
    codePage: '404' | '204';
};
const Page404: React.FC<Props> = ({codePage}) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };
    const dataMap = [
        {
            id: '404',
            title: t('Page not found'),
            description: t(
                'Sorry, webpage you are trying to access cannot be found on the server',
            ),
            image: image404,
        },
        {
            id: '204',
            title: t('This functionality is in development'),
            description: t(
                'We are already working on this section. It will be available for you soon!',
            ),
            image: image204,
        },
    ];
    const page = dataMap.find((d) => d.id === codePage);
    return (
        <>
            <Header />
            <Main>
                <div >
                    <div className='flex items-center justify-center'>
                        <img src={page?.image} alt={codePage} />
                    </div>
                    <div className="mt">
                        <div>{page?.title}</div>
                        <div>{page?.description}</div>
                    </div>
                    <div>
                        <Button
                            text={t('Back home')}
                            type={'button'}
                            callback={handleClick}
                        />
                    </div>
                </div>
            </Main>
        </>
    );
};

export default Page404;
