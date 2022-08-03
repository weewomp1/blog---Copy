const post = {
  content: 'mock post contend :D',
  title: 'a title',
  author: 'an author',
  time: `${new Date()}`,
  thumbsUp: 0, 
  thumbsDown: 0
};

const result = [];
for (let i = 0; i < 100; i++){
  result.push({...post});
}

export default{
  posts: result
};