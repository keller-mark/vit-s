import React from 'react';

export default function Description(props) {
  const { description } = props;

  return (
    <div className="description">
      <p>{description}</p>
    </div>
  );
}
