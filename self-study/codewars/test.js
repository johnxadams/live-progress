function litres(time) {
    let halfedTime = time / 2;
    let flooredTime = Math.floor(halfedTime)
    return flooredTime;
  }

  console.log(litres(11.8))