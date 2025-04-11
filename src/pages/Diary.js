import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";
import { getFormattedDate, setPageTitle } from "../util";
import Viewer from "../component/Viewer";
import { useEffect } from "react";
const Diary = () => {
    const { id } = useParams();
    const data = useDiary(id);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }
    useEffect(() => {
        setPageTitle(`${id}번 일기`);
    }, []);
    if (!data) {
        return <div>일기를 불러오는 중입니다...</div>
    } else {
        const { date, emotionId, content } = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`
        return (
            <div>
                <Header title={title}
                    leftChild={<Button text={'< 뒤로 가기'} onClink={goBack} />}
                    rightChild={<Button text={'수정하기'} onClink={goEdit} />}
                />
                <Viewer content={content} emotionId={emotionId} />
            </div>
        )
    }
}
export default Diary;