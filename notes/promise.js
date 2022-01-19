
//Handling Promises
// 1. What is the output?

function doSecond() {
  return new Promise(resolve => {
    setTimeout(() => resolve(console.log('Second')), 5000)
  })
}

function addNew(options = {}) {
     console.log('First');
     doSecond();
     console.log('Third');
}

addNew();


