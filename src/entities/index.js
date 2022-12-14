import Balloon from '../components/Balloon';
import Matter from 'matter-js';

//-- Overriding this function because the original references HTMLElement
Matter.Common.isElement = () => false; 

export default restart => {
  //-- Cleanup existing entities..
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.03;
  let width = 320;
  
  return {
    physics: {engine: engine, world: world},
    Balloon: Balloon(
      world,
      'pink',
      {x: 220, y: 30},
      {height: 80, width: 80},
    ),
   };
};