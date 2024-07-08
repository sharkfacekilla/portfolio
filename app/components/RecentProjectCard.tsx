import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import data from '../../public/projects.json';

interface CustomCardProps {
    proj: string;
}

/**
 * Renders the most recent object in the JSON. Includes image, name, short description, languages used, and a link to check out more information.
 * Uses custom props.
 * @param proj The project object, housing the information to render.
 * @returns Recent Project Card Component.
 */
const CustomCard: React.FC<CustomCardProps> = ( {proj}) => {
    const project = data.projects.find((p) => p.id === proj )!;

    project.id = proj;
    const dynamicRoute = `/pages/projects/${project.id}`;

    return (
        <Card sx={{ maxWidth: 350 }}>
                <CardMedia component="img" sx={{ height: 240, objectFit: 'cover' }} image={project.img} alt={project.altTxt}/>
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
    );
};

export default CustomCard;
