import React from "react";

function Card(emojiTerm) {
  return (
    <div className="term" key={emojiTerm.id}>
      <dt>
        <span className="emoji" role="img" aria-label={emojiTerm.name}>
          {emojiTerm.emoji}
        </span>
        <span>{emojiTerm.name}</span>
      </dt>
      <dd>{emojiTerm.meaning}</dd>
    </div>
  );
}

export default Card;
