import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { Project } from '../utils/project';

//To give the project a type
interface CustomCardProps {
    project: Project;
}

/**
 * 
 * @param param0 project: The Project passed in.
 * @returns A card with the project details, and a link to the project page for more information.
 */
const CustomCard: React.FC<CustomCardProps> = ({project}) => {
    //Get the dynamic route for the Link component
    const dynamicRoute = `/pages/projects/${project.id}`;

    return (
        <Card sx={{ maxWidth: 350 }}>
            <CardMedia component="img" sx={{ objectFit: 'cover', height: 200}}  image={project.img} alt={project.altTxt}/>
            <CardContent className="bg-black text-white" sx={{flexGrow: 1}}>
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <Typography gutterBottom variant="h5" component="div">{project.name}</Typography>
                    <Typography variant="body1" >{project.shortDesc} </Typography>
                    <Link href={dynamicRoute} passHref >
                        <Button variant="contained" className="mb-5 mt-5 bg-blue hover:bg-light-blue">Learn More</Button>
                    </Link>
                    <Divider className="bg-white" />
                    <Typography variant="caption" display="block" className="mt-2" gutterBottom>Languages/Technology Used: {project.lang}</Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default CustomCard;