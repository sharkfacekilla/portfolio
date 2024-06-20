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

interface CustomCardProps {
    id: string;
    image: string;
    altText: string;
    title: string;
    description: string;
    lang: string;
}

const CustomCard: React.FC<CustomCardProps> = ({id, image, altText, title, description, lang}) => {
    const dynamicRoute = `/pages/projects/${id}`;

    return (
        <Card sx={{ maxWidth: 350 }}>
                <CardMedia component="img" height="340" image={image} alt={altText}/>
                <CardContent className="bg-black text-white">
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                    <Typography variant="body1" >{description} </Typography>
                    <Link href={dynamicRoute} passHref >
                    <Button variant="contained" className="mb-5 mt-5 bg-blue hover:bg-light-blue">Learn More</Button>
                </Link>
                    <Divider className="bg-white" />
                    <Typography variant="caption" display="block" className="mt-2" gutterBottom>Language Used: {lang}</Typography>
                </CardContent>
        </Card>
    )
}

export default CustomCard;