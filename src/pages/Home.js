import Button from "../component/Button";
import Header from "../component/Header";
import { useState,useContext,useEffect } from "react";
import { DiaryStateContext } from '../App';
import { getMonthRangeDate, setPageTitle } from "../util";
import DiaryList from "../component/DiaryList";

const Home = () => {
    const [pivotDate, setPivotDate] = useState(new Date());
    const data = useContext(DiaryStateContext);
    const [filteredData, setFilteredData] = useState([]);
        const onIncresesMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    }
    const onDecresesMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    }
    const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`;
    useEffect(()=>{
        if(data.length >=1){
            const {beginTimeStamp, endTimeStamp} = getMonthRangeDate(pivotDate);
            setFilteredData(
                data.filter(it=>beginTimeStamp <= it.date && it.date <= endTimeStamp )
            )
        }else{
            setFilteredData([]);
        }
    },[data,pivotDate])
    useEffect(()=>{
        setPageTitle('율쌤님의 감정일기장');
    },[]);
    return (
        <div>
            <Header 
            title={headerTitle} 
            leftChild={
                <Button 
                text={'<'}  onClink={onDecresesMonth}/>
            }
            rightChild={
            <Button 
                text={'>'} onClink={onIncresesMonth}
               /> }
            />
            <DiaryList data={filteredData}/>
        </div>
    )
}
export default Home;