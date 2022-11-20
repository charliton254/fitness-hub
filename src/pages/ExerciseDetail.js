import Nav from '../components/Nav'
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import { useEffect, useState } from 'react';
import {exerciseOptions, fetchData, youtubeOptions} from '../Utilities/fetchData';
import { Box } from '@mui/material';
import ExerciseVideos from '../components/ExerciseVideos';
import Footer from '../components/Footer';

function ExerciseDetail() {
    const {id} = useParams();
    const [exerciseDetail, setExerciseDetail ] = useState({})
    const [exerciseVideos, setExerciseVideos] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async() => {
            const exerciseDbUrl ='https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
        }
        fetchExercisesData();

    },[id])
  return (
    <div>
    <Nav/>
        <div className='detail-body'>
            <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            </Box>
        </div>
        <Footer/>
    </div>
  )
}

export default ExerciseDetail
