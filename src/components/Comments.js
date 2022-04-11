import React from 'react';
import CommentDetail from './CommentDetail';
import '../style/Comments.css';

const Comments = () => {
  return (
    <div className="comment-container">
    <label><b><h2>Komentarze:</h2></b></label>
      <p><CommentDetail author="Ireneusz" text="Niektóre z tych zdjęć są słabe, ale większość mi się podoba." /></p>
      <p><CommentDetail author="Malwina" text="Najbardziej lubię duże psy." /></p>
      <p><CommentDetail author="Ka$ka" text="Ja osobiście wolę takie, co mieszczą się do torebki." /></p>
      <p><CommentDetail author="Witek" text="Hehe, Ka$ka! Ciekawe, jakbyś się czuła, gdybyś sama musiała podróżować w torebce XD" /></p>
      <p><CommentDetail author="Karol" text="Taa! Jeszcze nosić kretyńskie kapelusiki i wabić się Papcio XDDDDDDDD" /></p>
      <p><CommentDetail author="Klaudia" text="Oj dobra, zostawcie ją w spokoju..." /></p>
      <p><CommentDetail author="Rozalia" text="Wszystkie pieski są piękne i tyle!" /></p>
    </div>
  );
};

export default Comments;