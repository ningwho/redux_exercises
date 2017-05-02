import reducer from './Gallery.reducer';

it('should initialize to zero', () => {
  expect(reducer(undefined, {type: 'init'})).toEqual(0);
});

// Write additional tests for
// 1. going to next image
// 2. make sure it wraps around if goes over
// 3. going to previous image
// 4. make sure it wraps around if goes under
// 5. jumping to a specific image index
it('go to next image(incrementing state)', () => {
  const state ={
    currentIndex: 1,
    images: []
  };
  expect(reducer(state, {type: 'next'})).toEqual({
    currentIndex: 2,
    images: []
  });
});

it('pass images in', () => {
  const state = {
    currentIndex: 1,
    images: []
  };
  const action = {
    type: 'receive_images',
    images: ['lolcat.jpg', 'loldog.jpg']
  });

});

it('next wraps around if it goes over', () => {
  const state = {
    currentIndex: 1,
    images: ['lolcat.jpg', 'loldog.jpg']
  };
  expect 
})
