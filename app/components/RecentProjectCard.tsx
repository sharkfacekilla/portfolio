import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { Project } from '../utils/project';
import data from '../../public/projects.json';

interface CustomCardProps {
    proj: string;
}

const CustomCard: React.FC<CustomCardProps> = ( {proj}) => {
    const project = data.projects.find((p) => p.id === proj )!;

    project.id = proj;
    const dynamicRoute = `/pages/projects/${project.id}`;

    return (
        <Card sx={{ maxWidth: 350 }}>
                <CardMedia component="img" height="340" image={project.img} alt={project.altTxt}/>
                <CardContent className="bg-black text-white">
                    <Typography gutterBottom variant="h5" component="div">{project.name}</Typography>
                    <Typography variant="body1" className="mb-5">{project.shortDesc} </Typography>
                    <Link href={dynamicRoute} passHref >
                    <Button variant="contained" className="mb-5 bg-blue hover:bg-light-blue">Learn More</Button>
                </Link>
                    <Divider className="bg-white" />
                    <Typography variant="caption" display="block" className="mt-2" gutterBottom>Language Used: {project.lang}</Typography>
                </CardContent>
        </Card>
    )
}

export default CustomCard;