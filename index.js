// Code your solution in this file!
function distanceFromHqInBlocks(pickup_block){
  const HQ_Block=42; return Math.abs(HQ_Block - pickup_block)
}
function distanceFromHqInFeet(pickup_block) {const BLOCK_LENGTH=264;
  return distanceFromHqInBlocks(pickup_block)*BLOCK_LENGTH
}
function distanceTravelledInFeet(point_a,point_b) {
  const BLOCK_LENGTH=264; return Math.abs(point_a-point_b)*BLOCK_LENGTH
}
function calculatesFarePrice (point_a, point_b) {
  let distance= distanceTravelledInFeet(point_a, point_b)
  // First 400 feet are free
  let fareprice=0;
  //400-2000ft, $25
  if (distance >=400 && distance<2000) {
    fareprice=(distance-400)*0.02
  }
  //2000-2500ft, $25
  else if (distance>= 2000 && distance<2500) {
    fareprice=25
  }
  //2500 cannot travel that fareprice
  else if (distance>= 2500) {
    fareprice='cannot travel that far'
  }
  return fareprice
}
