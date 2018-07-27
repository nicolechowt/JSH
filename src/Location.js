import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: 250,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Anaheim.',
    link: "http://www.google.com",
  },
  {
    img: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1458631866000/photosp/70331207-ac7e-4e26-bd5f-0a0f7b17f9af/stock-photo-people-rain-street-shopping-london-fashion-urban-shop-retail-70331207-ac7e-4e26-bd5f-0a0f7b17f9af.jpg',
    title: 'Los Angeles.',
    link: "http://www.google.com",   
  },
  {
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',
    title: 'Santa Barbara.',
    link: "http://www.google.com",
  },
  {
    img: 'https://images.pexels.com/photos/219014/pexels-photo-219014.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    title: 'Las Vegas.',
    link: "http://www.google.com",
    featured: false,
  },
];

const GridListExampleComplex = () => (
  <MuiThemeProvider>
  <div style={styles.root}>
  <h1>Locations</h1>
    <GridList
      cols={4}
      cellHeight={250}
      padding={10}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
          href={tile.link}
        >      
          <img src={tile.img} />

        </GridTile>
      ))}
    </GridList>
  </div>
  </MuiThemeProvider>
);

export default GridListExampleComplex;