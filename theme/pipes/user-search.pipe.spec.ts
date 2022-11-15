import { UserSearchPipe } from './user-search.pipe';

describe('UserSearchPipe', () => {
  let userSearchPipe: UserSearchPipe;

  beforeEach(() => {
    userSearchPipe = new UserSearchPipe();
  });

  // mock users is array of object
  const users = [
    {
      name: 'Arun',
      email: 'arun@gmail.com',
      username: 'ArunRam',
      location: 'chennai',
    },
    { username: 'Kumarvel', email: 'kumar@gmail.com', age: 22 },
  ];
  it('should be instanciated', () => {
    expect(userSearchPipe).toBeDefined();
  });

  // positive test case with name
  it('should return the value of appropriate user when searched with name', () => {
    const selectedUser = userSearchPipe.transform(users, 'Arun');
    expect(selectedUser[0].location).toBe('chennai');
  });

  // positive test case with username
  it('should return the value of appropriate user when searched with username', () => {
    const selectedUser = userSearchPipe.transform(users, 'Kumarvel');
    expect(selectedUser[0].email).toBe('kumar@gmail.com');
  });

  // nagative test case
  it('should return not rerun any user', () => {
    const selectedUser = userSearchPipe.transform(users, 'Dhoni');
    expect(selectedUser.length).toBe(0);
  });

});
