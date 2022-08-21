import React from 'react';
import {Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const balloonImg = require('.././assets/balloon.png');

const Balloon = props => {
const width = props.size[0];
const height = props.size[1];
const x = props.body.position.x - width / 2;
const y = props.body.position.y - height / 2;
  
  return (
    <Image
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: width,
      height: height,
    }}
    resizeMode="stretch"
    source={balloonImg}
  />
  );
};

export default (world, color, pos, size) => {
  const initialBalloon = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    50,
    50,
  );
  Matter.World.add(world, [initialBalloon]);

  return {
    body: initialBalloon,
    size: [80, 71],
    color: color,
    renderer: <Balloon />,
  };
};

Balloon.propTypes = {
  size: array,
  body: object,
  color: string,
};