import { useEffect, useState } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

function BuildMuscle() {
    const [cuisine, setCuisine] = useState([]);

    useEffect(() => {
        getCuisine();
    }, []);

    const getCuisine = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/findByNutrients?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&maxProtein=100&minPeotein=50&number=15`);
        const recipes = await data.json();
        setCuisine(recipes);   
    };

  return (
    <div>
        <h1 className='results-h1'>Showing Results</h1>
    <Grid
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration:0.5}}
    >
        {cuisine && cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{ item.title }</h4>
                </Card>
            );
        })}
    </Grid>
    </div>
  )

}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 4rem;
    margin: 0% 10% 10% 5%;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        margin-top: 0;
    }
`;

export default BuildMuscle