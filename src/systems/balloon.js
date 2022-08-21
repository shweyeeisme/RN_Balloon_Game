import Matter from 'matter-js';

const UpdateBalloon = (entities, {touches, time}) => {
  const engine = entities.physics.engine;
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Balloon.body, {
        x: entities.Balloon.body.velocity.x,
        y: -3,
      });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateBalloon;