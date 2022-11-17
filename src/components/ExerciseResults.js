import { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import ExerciseCard from './ExerciseCard';

const ExerciseResults = ({exercises}) => {

    const [currentPage, setcurrentPage] = useState(1);
    const exercisePerPage = 9;

    const indexOfLastExercise = currentPage * exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setcurrentPage(value);
        window.scrollTo({ top:1800, behavior:'smooth'})
    }

  return (
    <Box id="exercises"
    sx={{mt: {lg:'60px' }}} mt="50px" p="20px">
      <Typography variant='h3' mb="46px">Showing Results
      </Typography>
        <Stack direction="row" sx={{ gap:{lg:'110px', xs:'50px'}}}
        flexWrap="wrap" justifyContent="center" >
          {currentExercises.map((exercise, index) =>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
        </Stack>
        <Stack mt="70px" mb="100px" alignItems="center">
          {exercises.length> 9 && (
            <Pagination color="standard" shape="rounded" defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage )} page={currentPage}
            onChange={paginate} size="large" />
          )}
        </Stack>    
    </Box>
  )
}

export default ExerciseResults