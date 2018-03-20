export default function() {
this.namespace = '/api';

this.get('/posts', 'posts', function(db) {
  return db.posts;
});

}