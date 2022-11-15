import { ProfilePicturePipe } from './profilePicture.pipe';

describe('ProfilePicturePipe', () => {

  const pipe = new ProfilePicturePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  // test case on transform the profile picture
  it('transforms the profile picture', () => {
    const transformedText = pipe.transform('image');
    expect(transformedText).toBe('../assets/images/profile/image.jpg');
  });


});
